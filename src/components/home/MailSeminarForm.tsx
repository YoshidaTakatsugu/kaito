"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type FormEvent } from "react";

import { registerSubscriber, type SubscriptionApi } from "@/lib/seminar-registration";

type MailSeminarFormProps = {
  api: SubscriptionApi | null;
  registrationUrl: string;
};

const inputClassName = "mt-2 block min-h-12 w-full min-w-0 rounded border border-white/25 bg-[#041225] px-3 py-3 text-base leading-6 text-white placeholder:text-slate-400 focus-visible:border-[#d6ae64] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d6ae64] disabled:opacity-55";

const subscribeToHydration = () => () => {};
const clientReady = () => true;
const serverReady = () => false;

export function MailSeminarForm({ api, registrationUrl }: MailSeminarFormProps) {
  // Keep native submission disabled until the inline registration handler is ready.
  const hydrated = useSyncExternalStore(subscribeToHydration, clientReady, serverReady);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const pending = useRef<AbortController | null>(null);
  const notice = useRef<HTMLDivElement>(null);

  useEffect(() => () => pending.current?.abort(), []);
  useEffect(() => {
    if (status === "success" || status === "error") notice.current?.focus();
  }, [status]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!api || pending.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const subscriber = {
      lastName: String(data.get("lastName") ?? "").trim(),
      firstName: String(data.get("firstName") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
    };
    if (!subscriber.lastName || !subscriber.firstName || !subscriber.email || data.get("consent") !== "yes") {
      setError("お名前・メールアドレス・配信への同意をご確認ください。");
      setStatus("error");
      return;
    }

    const controller = new AbortController();
    pending.current = controller;
    const timeout = window.setTimeout(() => controller.abort(), 25000);
    setError("");
    setStatus("submitting");
    try {
      await registerSubscriber(api, subscriber, controller.signal);
      form.reset();
      setStatus("success");
    } catch (cause) {
      setError(cause instanceof Error && cause.message === "invalid_input"
        ? "入力内容をご確認ください。メールアドレスが正しく入力されているかお確かめのうえ、もう一度お試しください。"
        : "受付結果を確認できませんでした。確認メールが届いていないかお確かめください。届いていない場合は、時間をおいて再度お試しください。");
      setStatus("error");
    } finally {
      window.clearTimeout(timeout);
      pending.current = null;
    }
  }

  return (
    <div className="mt-6">
      {status === "success" ? (
        <div ref={notice} tabIndex={-1} role="status" className="border-t border-[#67d5ae]/40 pt-6 outline-none">
          <p className="text-lg font-semibold text-[#91e2c6]">確認メールをご確認ください</p>
          <p className="mt-3 text-sm leading-7 text-slate-200">
            お申し込みを受け付けました。メール内の登録完了リンクを押すと、登録が完了します。
          </p>
          <p className="mt-3 text-xs leading-6 text-slate-300">
            メールが見当たらない場合は、迷惑メールフォルダと受信設定をご確認ください。
          </p>
        </div>
      ) : (
        <form action={registrationUrl} method="post" onSubmit={handleSubmit} aria-label="無料メールセミナー登録" aria-describedby="seminar-data-notice" aria-busy={status === "submitting"}>
          <fieldset disabled={!api || !hydrated || status === "submitting"}>
            <legend className="sr-only">お名前とメールアドレス</legend>
            <div className="grid grid-cols-2 gap-3">
              <label className="text-sm font-semibold text-slate-100" htmlFor="seminar-last-name">
                姓 <span className="text-xs font-normal text-[#e8c980]">必須</span>
                <input id="seminar-last-name" name="lastName" autoComplete="family-name" required maxLength={80} placeholder="例：押田" className={inputClassName} />
              </label>
              <label className="text-sm font-semibold text-slate-100" htmlFor="seminar-first-name">
                名 <span className="text-xs font-normal text-[#e8c980]">必須</span>
                <input id="seminar-first-name" name="firstName" autoComplete="given-name" required maxLength={80} placeholder="例：海斗" className={inputClassName} />
              </label>
            </div>
            <label className="mt-5 block text-sm font-semibold text-slate-100" htmlFor="seminar-email">
              メールアドレス <span className="text-xs font-normal text-[#e8c980]">必須</span>
              <input id="seminar-email" name="email" type="email" inputMode="email" autoComplete="email" autoCapitalize="none" spellCheck={false} required maxLength={254} placeholder="例：yourname@example.com" className={inputClassName} />
            </label>
            <p id="seminar-data-notice" className="mt-4 text-xs leading-6 text-slate-300">
              お名前とメールアドレスは、講座の登録・配信のためリザストへ送信されます。配信はメール内のリンクからいつでも停止できます。
            </p>
            <label className="mt-3 flex min-h-11 cursor-pointer items-center gap-3 py-2 text-sm leading-6 text-slate-200">
              <input type="checkbox" name="consent" value="yes" required className="size-5 shrink-0 accent-[#d6ae64]" />
              上記を確認し、メール配信に同意します
            </label>
            <button type="submit" className="mt-4 flex min-h-14 w-full items-center justify-center gap-3 rounded bg-[#d6ae64] px-4 py-3 text-center text-sm font-semibold leading-6 text-[#031226] transition-colors hover:bg-[#e8c980] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-60">
              {status === "submitting" ? "送信しています…" : api ? "無料で受け取る" : "登録受付を準備しています"}
              {api && status !== "submitting" ? <span aria-hidden="true">→</span> : null}
            </button>
          </fieldset>
          {status === "error" ? (
            <div ref={notice} tabIndex={-1} role="alert" className="mt-4 border-l-2 border-[#e3a49e] pl-3 text-sm leading-6 text-[#f0c4bf] outline-none">
              {error}
              <a href={registrationUrl} className="mt-2 block underline underline-offset-4">登録できない場合は、リザストの登録ページへ</a>
            </div>
          ) : null}
          {!api ? <p className="mt-3 text-xs leading-6 text-slate-300">このページからの受付は準備中です。</p> : null}
          <noscript><p className="mt-4 text-sm leading-6"><a href={registrationUrl} className="underline underline-offset-4">JavaScriptが無効の場合は、リザストの登録ページをご利用ください。</a></p></noscript>
        </form>
      )}
    </div>
  );
}
