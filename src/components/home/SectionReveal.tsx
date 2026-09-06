"use client";

import type { ReactNode } from "react";
import {
  LazyMotion,
  MotionConfig,
  domAnimation,
  m,
  type Transition,
} from "framer-motion";

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
};

export function SectionReveal({ children, className }: SectionRevealProps) {
  const transition: Transition = {
    duration: 0.55,
    ease: [0.22, 1, 0.36, 1],
  };

  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation}>
        <noscript>
          <style>{"[data-section-reveal]{opacity:1!important;transform:none!important}"}</style>
        </noscript>
        <m.div
          data-section-reveal
          className={className}
          initial={{ y: 24 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={transition}
        >
          {children}
        </m.div>
      </LazyMotion>
    </MotionConfig>
  );
}
