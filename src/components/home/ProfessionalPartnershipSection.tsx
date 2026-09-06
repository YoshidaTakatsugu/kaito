import Image from "next/image";

export function ProfessionalPartnershipSection() {
  return (
    <section className="bg-[#041225] px-5 py-20 text-white sm:px-8" aria-labelledby="partnership-heading">
      <div className="mx-auto w-full max-w-7xl text-center">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#d6ae64]">PROFESSIONAL PARTNERSHIP</p>
        <h2 id="partnership-heading" className="mt-5 font-serif text-3xl sm:text-4xl">提携・所属団体</h2>
        <a
          href="https://jsmc-assoc.com/"
          target="_blank"
          rel="noreferrer"
          className="group mx-auto mt-10 block max-w-xl border border-cyan-100/15 bg-white p-7 text-[#041225] transition-transform duration-200 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d6ae64]"
          aria-label="一般社団法人 日本スポーツメンタルコーチ協会の公式サイトを開く"
        >
          <Image
            src="/images/JSMC_LOGO (1).png"
            alt="押田海斗が所属する一般社団法人 日本スポーツメンタルコーチ協会のJSMCロゴ"
            width={620}
            height={240}
            sizes="(max-width: 640px) 86vw, 36rem"
            className="mx-auto h-auto max-h-36 w-auto max-w-full object-contain"
          />
          <p className="mt-6 font-semibold leading-8">一般社団法人　日本スポーツメンタルコーチ協会</p>
          <span className="mt-3 inline-block text-xs font-semibold tracking-[0.16em] text-[#0b5f8f]">OFFICIAL SITE →</span>
        </a>
      </div>
    </section>
  );
}
