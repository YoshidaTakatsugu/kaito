"use client";

import { useEffect, useState, type FormEvent } from "react";

const inputClass = "mt-2 block min-h-12 w-full min-w-0 rounded border border-white/25 bg-[#041225] px-3 py-3 text-base text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d6ae64]";
const times = ["10:00〜", "11:00〜", "12:00〜", "13:00〜", "14:00〜", "15:00〜", "16:00〜", "17:00〜", "それ以外"];

function Requirement({ required }: { required?: boolean }) {
  return <span className={`ml-3 text-xs font-normal ${required ? "text-[#e8c980]" : "text-slate-400"}`}>{required ? "必須" : "任意"}</span>;
}

export function InquiryForm({ trial = false }: { trial?: boolean }) {
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const reset = () => setSending(false);
    window.addEventListener("pageshow", reset);
    return () => window.removeEventListener("pageshow", reset);
  }, []);

  function submit(event: FormEvent<HTMLFormElement>) {
    const form = event.currentTarget;
    const data = new FormData(form);
    form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input[required]:not([type="checkbox"]):not([type="radio"]):not([type="date"]), textarea[required]').forEach(input => {
      input.setCustomValidity(input.value.trim() ? "" : "この項目を入力してください。");
    });
    const now = new Date();
    const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
    for (let i = 1; trial && i <= 3; i++) {
      const date = form.elements.namedItem(`第${i}希望日`) as HTMLInputElement;
      const hasTimes = data.getAll(`第${i}希望時間`).length > 0;
      const invalidPair = (i === 1 || Boolean(date.value) || hasTimes) && (!date.value || !hasTimes);
      date.setCustomValidity(invalidPair ? "希望日と時間帯を両方選択してください。" : date.value && date.value < today ? "本日以降の日付を選択してください。" : "");
    }
    if (!form.reportValidity()) {
      event.preventDefault();
      return;
    }
    // Send multiple selected time slots as a single readable email field.
    form.addEventListener("formdata", (event) => {
      for (let i = 1; trial && i <= 3; i++) {
        const name = `第${i}希望時間`;
        (event as FormDataEvent).formData.set(name, data.getAll(name).join("、"));
      }
    }, { once: true });
    setSending(true);
  }

  return (
    <form action="https://formsubmit.co/sport.mental.oshida@gmail.com" method="post" onSubmit={submit} aria-busy={sending} onChange={(event) => {
      event.currentTarget.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input, textarea').forEach(input => input.setCustomValidity(""));
    }} className="mt-10 border-t border-white/15" aria-label={trial ? "体験コーチング申し込み" : "お問い合わせ"}>
      <input type="hidden" name="_subject" value={trial ? "【NARERU】体験コーチングのお申し込み" : "【NARERU】お問い合わせ"} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value="https://kaito-git-customer-preview-20260906-yoshidatakatsugus-projects.vercel.app/contact/thanks/" />
      <fieldset>
        <legend className="sr-only">{trial ? "体験コーチングのお申し込み内容" : "お問い合わせ内容"}</legend>
        <div className="grid gap-x-6 sm:grid-cols-2">
          <label className="block border-b border-white/10 py-5 text-sm font-semibold">氏名<Requirement required />
            <input name="氏名" autoComplete="name" required maxLength={100} className={inputClass} />
          </label>
          {!trial && <label className="block border-b border-white/10 py-5 text-sm font-semibold">会社名<Requirement />
            <input name="会社名" autoComplete="organization" maxLength={150} className={inputClass} />
          </label>}
          <label className="block border-b border-white/10 py-5 text-sm font-semibold">メールアドレス<Requirement required />
            <input name="email" type="email" autoComplete="email" autoCapitalize="none" required maxLength={254} className={inputClass} />
          </label>
          <label className="block border-b border-white/10 py-5 text-sm font-semibold">電話番号<Requirement required={trial} />
            <input name="電話番号" type="tel" autoComplete="tel" required={trial} maxLength={30} className={inputClass} />
          </label>
          {trial && <label className="block border-b border-white/10 py-5 text-sm font-semibold">競技名<Requirement required />
            <input name="競技名" required maxLength={100} className={inputClass} />
          </label>}
        </div>
        {trial && <>
          <fieldset className="border-b border-white/10 py-5">
            <legend className="pt-5 text-sm font-semibold">コーチング形式<Requirement required /></legend>
            <div className="flex flex-wrap gap-x-6 gap-y-1">{["対面", "オンライン", "相談して決めたい"].map(value => <label key={value} className="flex min-h-11 items-center gap-3 text-sm"><input type="radio" name="コーチング形式" value={value} required className="size-5 accent-[#d6ae64]" />{value}</label>)}</div>
          </fieldset>
          {[1, 2, 3].map(i => <fieldset key={i} className="border-b border-white/10 pb-5">
            <legend className="pt-5 text-sm font-semibold">体験コーチング希望日程（第{i === 1 ? "一" : i === 2 ? "二" : "三"}希望）<Requirement required={i === 1} /></legend>
            <label className="mt-3 block max-w-xs text-sm text-slate-300">希望日
              <input type="date" name={`第${i}希望日`} required={i === 1} className={`${inputClass} [color-scheme:dark]`} />
            </label>
            <div className="mt-3 grid grid-cols-2 gap-x-4 sm:grid-cols-3">{times.map(time => <label key={time} className="flex min-h-11 items-center gap-3 text-sm"><input type="checkbox" name={`第${i}希望時間`} value={time} className="size-5 shrink-0 accent-[#d6ae64]" />{time}</label>)}</div>
          </fieldset>)}
        </>}
        <label className="block border-b border-white/10 py-5 text-sm font-semibold">{trial ? "どんなことを期待していますか？" : "お問い合わせ内容"}<Requirement required={!trial} />
          <textarea name={trial ? "期待すること" : "お問い合わせ内容"} required={!trial} rows={6} maxLength={5000} className={`${inputClass} resize-y`} />
        </label>
        <p id="inquiry-privacy" className="mt-6 text-xs leading-6 text-slate-300">入力内容は、お問い合わせへの回答・日程調整のために使用します。送信処理には外部サービスのFormSubmitを使用し、入力内容が同サービス経由で担当者へ送信されます。</p>
        <label className="mt-3 flex min-h-11 items-start gap-3 py-2 text-sm leading-6"><input type="checkbox" name="個人情報の取り扱いへの同意" value="同意する" required aria-describedby="inquiry-privacy" className="mt-0.5 size-5 shrink-0 accent-[#d6ae64]" />上記の個人情報の取り扱いに同意する</label>
        {trial && <p className="mt-3 text-xs leading-6 text-slate-300">送信時点では予約は確定しません。希望日程を確認のうえ、メールでご連絡します。「それ以外」の時間帯は、期待することの欄にご記入ください。</p>}
        <button type="submit" disabled={sending} className="mt-6 flex min-h-14 w-full items-center justify-center rounded bg-[#d6ae64] px-5 py-3 text-sm font-semibold text-[#031226] hover:bg-[#e8c980] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white disabled:cursor-wait">{sending ? "送信画面へ移動しています…" : "上記の内容で送信する"}</button>
      </fieldset>
    </form>
  );
}
