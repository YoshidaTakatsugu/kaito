import { faqs } from "@/lib/brand";
import { SectionReveal } from "./SectionReveal";

export function FaqSection() {
  return (
    <section id="faq" className="bg-[#061a33] px-5 py-20 text-white sm:px-8 sm:py-24">
      <SectionReveal className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.42fr_1fr]">
        <header>
          <p className="text-xs font-semibold tracking-[0.28em] text-cyan-100">FAQ</p>
          <h2 className="mt-6 font-serif text-[2rem] leading-[1.4] sm:text-5xl sm:leading-[1.3]">よくある質問</h2>
        </header>
        <dl className="grid gap-5">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="border-t border-cyan-100/15 pt-6">
              <dt className="grid grid-cols-[2.5rem_1fr] gap-3 text-base font-semibold leading-7 text-white">
                <span className="font-serif text-[#d6ae64]">Q{index + 1}</span>
                <span>{faq.question}</span>
              </dt>
              <dd className="mt-4 grid grid-cols-[2.5rem_1fr] gap-3 text-[15px] leading-7 text-slate-300 sm:text-base sm:leading-8">
                <span className="font-serif text-[#67d5ae]">A</span>
                <span>{faq.answer}</span>
              </dd>
            </div>
          ))}
        </dl>
      </SectionReveal>
    </section>
  );
}
