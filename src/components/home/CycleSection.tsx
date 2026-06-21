import { CycleToggle } from "./CycleToggle";
import { getPerformanceCoreImage } from "@/lib/site-images";

export function CycleSection() {
  const performanceCoreImage = getPerformanceCoreImage();

  return (
    <section id="cycle" className="bg-[#061a33] px-5 py-24 text-white sm:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-12">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold tracking-[0.28em] text-cyan-100">
            SHINGITAI CYCLE
          </p>
          <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.01em] sm:text-5xl">
            心技体の重なりが、試合で出せる力を決める。
          </h2>
          <p className="mt-7 font-serif text-2xl leading-[1.85] text-cyan-50 sm:text-3xl">
            技術と身体だけでは、本番の力は安定しません。心・技・体が重なったとき、中央に強い核が生まれ、パフォーマンスは最大化します。
          </p>
        </div>

        <CycleToggle coreImage={performanceCoreImage} />
      </div>
    </section>
  );
}
