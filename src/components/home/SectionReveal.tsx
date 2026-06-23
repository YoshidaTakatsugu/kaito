"use client";

import type { ReactNode } from "react";
import {
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
  type Transition,
} from "framer-motion";

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
};

export function SectionReveal({ children, className }: SectionRevealProps) {
  const reduceMotion = useReducedMotion();
  const transition: Transition = {
    duration: reduceMotion ? 0 : 0.55,
    ease: [0.22, 1, 0.36, 1],
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={className}
        initial={reduceMotion ? false : { opacity: 0, y: 32 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.22 }}
        transition={transition}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
