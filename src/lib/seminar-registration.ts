export type SubscriptionApi = {
  sessionUrl: string;
  subscribeUrl: string;
};

export type Subscriber = {
  lastName: string;
  firstName: string;
  email: string;
};

// Only the form-specific public endpoints documented for external forms belong here.
export function getSubscriptionApi(
  sessionUrl = process.env.NEXT_PUBLIC_RESAST_SESSION_URL,
  subscribeUrl = process.env.NEXT_PUBLIC_RESAST_SUBSCRIBE_URL,
): SubscriptionApi | null {
  if (!sessionUrl && !subscribeUrl) return null;
  if (!sessionUrl || !subscribeUrl) {
    throw new Error("Both Resast subscription endpoint URLs must be configured.");
  }

  const session = new URL(sessionUrl);
  const subscribe = new URL(subscribeUrl);
  const allowedOrigin = "https://www.reservestock.jp";
  const sessionCode = session.pathname.match(/^\/api\/create_api_session\/([a-zA-Z0-9_-]+)$/)?.[1];
  const subscribeCode = subscribe.pathname.match(/^\/api\/new_subscribe_api\/([a-zA-Z0-9_-]+)$/)?.[1];

  if (
    session.origin !== allowedOrigin || subscribe.origin !== allowedOrigin ||
    session.username || session.password || subscribe.username || subscribe.password ||
    !sessionCode || sessionCode !== subscribeCode ||
    subscribe.searchParams.get("mid") !== "369393"
  ) {
    throw new Error("Use the public subscription endpoints for Resast course 369393.");
  }

  // Discard copied placeholder session IDs and any unrelated query parameters.
  return {
    sessionUrl: `${allowedOrigin}${session.pathname}`,
    subscribeUrl: `${allowedOrigin}${subscribe.pathname}?mid=369393`,
  };
}

export async function registerSubscriber(
  api: SubscriptionApi,
  subscriber: Subscriber,
  signal: AbortSignal,
): Promise<void> {
  const options: RequestInit = {
    cache: "no-store",
    credentials: "omit",
    referrerPolicy: "no-referrer",
    redirect: "error",
    signal,
  };
  const sessionResponse = await fetch(api.sessionUrl, options);
  if (sessionResponse.status !== 200) throw new Error("session_failed");
  const sessionId = (await sessionResponse.text()).trim();
  if (!/^api_session_[a-zA-Z0-9+/=_-]+$/.test(sessionId) || sessionId.length > 1024) {
    throw new Error("session_failed");
  }

  const url = new URL(api.subscribeUrl);
  url.searchParams.set("session_id", sessionId);
  url.searchParams.set("email_address", subscriber.email);
  url.searchParams.set("lname", subscriber.lastName);
  url.searchParams.set("fname", subscriber.firstName);

  // Resast's external-form API specifies GET; personal data never enters page URLs.
  const response = await fetch(url, options);
  if (response.status === 400) throw new Error("invalid_input");
  if (response.status !== 200) throw new Error("registration_failed");
}
