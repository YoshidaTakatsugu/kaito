import { servicePrograms, services } from "@/lib/brand";

export function ServicesSection() {
  return (
    <section
      id="coaching"
      className="bg-slate-50 px-5 py-24 text-[#001f3f] sm:px-8"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-[#0b5f8f]">
              SERVICE
            </p>
            <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.01em] sm:text-5xl">
              サービス紹介・価格
            </h2>
          </div>
          <div>
            <p className="font-serif text-2xl leading-[1.85] text-[#001f3f] sm:text-3xl">
              NARERUのコーチングは、単なる励ましではなく、脳科学と心理学に基づき「心技体」を統合させる専門的な介入です。
            </p>
            <div className="mt-8 border-y border-[#001f3f]/15 py-6">
              <p className="text-xs font-semibold tracking-[0.24em] text-[#0b5f8f]">
                TRIAL COACHING
              </p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold">{services[0].name}</h3>
                  <p className="mt-3 text-slate-600">
                    50分 / 対面・オンライン
                  </p>
                </div>
                <p className="text-4xl font-semibold tracking-[-0.02em]">
                  {services[0].price}
                </p>
              </div>
              <p className="mt-5 max-w-3xl leading-8 text-slate-700">
                {services[0].description}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {servicePrograms.map((program) => (
            <article
              key={program.name}
              className="flex min-h-64 flex-col justify-between border border-[#001f3f]/12 bg-white p-6"
            >
              <div>
                <p className="text-xs font-semibold tracking-[0.22em] text-[#0b5f8f]">
                  {program.level}
                </p>
                <h3 className="mt-5 text-2xl font-semibold text-[#001f3f]">
                  {program.name}
                </h3>
                <p className="mt-5 leading-8 text-slate-700">
                  {program.description}
                </p>
              </div>
              <p className="mt-8 border-t border-[#001f3f]/10 pt-4 text-sm font-semibold text-slate-500">
                {program.recommendedFor}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
