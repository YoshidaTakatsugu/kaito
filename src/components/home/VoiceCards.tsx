"use client";

import Image from "next/image";
import {
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
  type Variants,
} from "framer-motion";

export type VoiceCase = {
  id: string;
  icon: string;
  imageSrc: string;
  imageAlt: string;
  attribute: string;
  sport: string;
  conclusion: string;
  body: string;
};

type VoiceCardsProps = {
  cases: readonly VoiceCase[];
};

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 34,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.58,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function VoiceCards({ cases }: VoiceCardsProps) {
  const reduceMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className="grid gap-5 lg:grid-cols-3"
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.18 }}
        variants={listVariants}
      >
        {cases.map((voiceCase) => (
          <m.figure
            key={voiceCase.id}
            className="group flex min-h-full flex-col overflow-hidden border border-cyan-100/15 bg-white/[0.045] shadow-[0_24px_80px_rgba(0,0,0,0.2)]"
            variants={cardVariants}
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-[#001f3f]">
              <Image
                src={voiceCase.imageSrc}
                alt={voiceCase.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 31vw"
                className="object-cover object-[55%_center] opacity-[0.78] transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041225]/80 via-[#041225]/18 to-transparent" />
              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-cyan-100/20 bg-[#041225]/70 px-3 py-2 text-xs font-semibold tracking-[0.14em] text-cyan-50 backdrop-blur-sm">
                <span aria-hidden="true" className="text-base">
                  {voiceCase.icon}
                </span>
                {voiceCase.sport}
              </div>
            </div>

            <figcaption className="flex flex-1 flex-col p-6">
              <p className="text-xs font-semibold tracking-[0.24em] text-[#4ade80]">
                CHANGE RESULT
              </p>
              <blockquote className="mt-4 flex flex-1 flex-col">
                <p className="text-xl font-semibold leading-8 text-white">
                  {voiceCase.conclusion}
                </p>
                <p className="mt-5 leading-8 text-slate-300">
                  {voiceCase.body}
                </p>
              </blockquote>
              <div className="mt-7 border-t border-cyan-100/15 pt-4">
                <p className="text-sm font-semibold leading-7 text-cyan-50">
                  {voiceCase.attribute}
                </p>
              </div>
            </figcaption>
          </m.figure>
        ))}
      </m.div>
    </LazyMotion>
  );
}
