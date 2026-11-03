"use client";

import { useEffect, useRef, type ReactNode } from "react";
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
  soft?: boolean;
};

function SoftReveal({ children, className }: SectionRevealProps) {
  const element = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = element.current;
    if (!node || !("IntersectionObserver" in window) || !node.animate) return;
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const rect = node.getBoundingClientRect();
    // Keep server-rendered and already-visible content readable without waiting.
    if (preference.matches || (rect.top < innerHeight && rect.bottom > 0)) return;
    let animation: Animation | null = null;
    let revealed = false;
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting) || revealed) return;
      revealed = true;
      observer.disconnect();
      node.style.removeProperty("opacity");
      if (!preference.matches) animation = node.animate(
        [{ opacity: 0, transform: "translateY(10px)" }, { opacity: 1, transform: "none" }],
        { duration: 360, easing: "cubic-bezier(.22,1,.36,1)" },
      );
    }, { rootMargin: "0px 0px 48px 0px", threshold: 0 });
    function showImmediately() {
      revealed = true;
      observer.disconnect();
      animation?.cancel();
      node?.style.removeProperty("opacity");
    }
    function preferenceChanged() { if (preference.matches) showImmediately(); }
    node.style.opacity = "0";
    observer.observe(node);
    node.addEventListener("focusin", showImmediately);
    preference.addEventListener("change", preferenceChanged);
    return () => {
      showImmediately();
      node.removeEventListener("focusin", showImmediately);
      preference.removeEventListener("change", preferenceChanged);
    };
  }, []);
  return <div ref={element} data-soft-reveal className={className}>{children}</div>;
}

export function SectionReveal({ children, className, soft = false }: SectionRevealProps) {
  if (soft) return <SoftReveal className={className}>{children}</SoftReveal>;
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
