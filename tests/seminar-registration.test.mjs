import assert from "node:assert/strict";
import { test } from "node:test";

import { getSubscriptionApi, registerSubscriber } from "../src/lib/seminar-registration.ts";

const sessionUrl = "https://www.reservestock.jp/api/create_api_session/test_form_code";
const subscribeUrl = "https://www.reservestock.jp/api/new_subscribe_api/test_form_code?mid=369393&session_id=XXXXX";
const api = getSubscriptionApi(sessionUrl, subscribeUrl);
const subscriber = { lastName: "押田", firstName: "海斗", email: "test+tag@example.com" };

test("configuration requires matching subscription endpoints for the correct course", () => {
  assert.equal(getSubscriptionApi("", ""), null);
  assert.throws(() => getSubscriptionApi(sessionUrl, ""));
  assert.throws(() => getSubscriptionApi(sessionUrl, subscribeUrl.replace("369393", "123")));
  assert.throws(() => getSubscriptionApi(sessionUrl, subscribeUrl.replace("test_form_code", "other")));
  assert.throws(() => getSubscriptionApi(sessionUrl.replace("https:", "http:"), subscribeUrl));
  assert.throws(() => getSubscriptionApi(sessionUrl, subscribeUrl.replace("www.reservestock.jp", "example.com")));
  assert.equal(api.subscribeUrl, subscribeUrl.split("&")[0]);
});

test("each registration creates a session and correctly encodes names and email", async (t) => {
  const requests = [];
  t.mock.method(globalThis, "fetch", async (url, options) => {
    requests.push({ url: String(url), options });
    return requests.length % 2 ? new Response("api_session_test+/=") : new Response("");
  });
  await registerSubscriber(api, subscriber, new AbortController().signal);
  await registerSubscriber(api, subscriber, new AbortController().signal);
  assert.equal(requests.length, 4);
  assert.equal(requests[0].url, sessionUrl);
  assert.equal(requests[2].url, sessionUrl);
  const sent = new URL(requests[1].url);
  assert.equal(sent.searchParams.get("email_address"), subscriber.email);
  assert.equal(sent.searchParams.get("lname"), subscriber.lastName);
  assert.equal(sent.searchParams.get("fname"), subscriber.firstName);
  assert.equal(sent.searchParams.get("session_id"), "api_session_test+/=");
  assert.equal(sent.searchParams.get("mid"), "369393");
  assert.equal(requests[1].options.cache, "no-store");
  assert.equal(requests[1].options.credentials, "omit");
  assert.equal(requests[1].options.redirect, "error");
  assert.equal(requests[1].options.referrerPolicy, "no-referrer");
});

test("an HTML error page is not accepted as an API session", async (t) => {
  const fetchMock = t.mock.method(globalThis, "fetch", async () => new Response("<html>Login required</html>"));
  await assert.rejects(registerSubscriber(api, subscriber, new AbortController().signal), /session_failed/);
  assert.equal(fetchMock.mock.callCount(), 1);
});

test("provider validation and transport errors are not reported as success", async (t) => {
  let status = 400;
  t.mock.method(globalThis, "fetch", async (url) => String(url) === sessionUrl
    ? new Response("api_session_test")
    : new Response("", { status }));
  await assert.rejects(registerSubscriber(api, subscriber, new AbortController().signal), /invalid_input/);
  status = 503;
  await assert.rejects(registerSubscriber(api, subscriber, new AbortController().signal), /registration_failed/);
});

test("session failure stops before registration; aborted fetches propagate", async (t) => {
  const fetchMock = t.mock.method(globalThis, "fetch", async () => new Response("", { status: 403 }));
  await assert.rejects(registerSubscriber(api, subscriber, new AbortController().signal), /session_failed/);
  assert.equal(fetchMock.mock.callCount(), 1);
  fetchMock.mock.mockImplementation(async (_url, options) => options.signal.throwIfAborted());
  const controller = new AbortController();
  controller.abort();
  await assert.rejects(registerSubscriber(api, subscriber, controller.signal), { name: "AbortError" });
});
