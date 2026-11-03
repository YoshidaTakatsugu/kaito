"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";

export function HorizontalScroller({ children, className, label }: { children: ReactNode; className: string; label: string }) {
  const id = useId();
  const track = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ active: 0, count: 0, overflow: false });

  useEffect(() => {
    const element = track.current;
    if (!element) return;
    let frame = 0;
    function measure() {
      if (!element) return;
      const items = Array.from(element.children);
      const max = element.scrollWidth - element.clientWidth;
      const left = element.getBoundingClientRect().left;
      let active = 0;
      let distance = Infinity;
      // The final card can stop before its leading edge reaches the viewport edge.
      items.forEach((item, index) => {
        const offset = Math.min(item.getBoundingClientRect().left - left + element.scrollLeft, max);
        const delta = Math.abs(offset - element.scrollLeft);
        if (delta < distance) { distance = delta; active = index; }
      });
      const next = { active, count: items.length, overflow: max > 2 };
      setPosition(previous => previous.active === next.active && previous.count === next.count && previous.overflow === next.overflow ? previous : next);
    }
    function schedule() { cancelAnimationFrame(frame); frame = requestAnimationFrame(measure); }
    const resize = new ResizeObserver(schedule);
    resize.observe(element);
    element.addEventListener("scroll", schedule, { passive: true });
    schedule();
    return () => { cancelAnimationFrame(frame); resize.disconnect(); element.removeEventListener("scroll", schedule); };
  }, []);

  function move(direction: number) {
    const element = track.current;
    if (!element) return;
    const index = Math.max(0, Math.min(position.count - 1, position.active + direction));
    const item = element.children[index];
    if (!item) return;
    const left = item.getBoundingClientRect().left - element.getBoundingClientRect().left + element.scrollLeft;
    element.scrollTo({ left, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }

  return (
    <div>
      <div ref={track} id={id} className={className} role="region" aria-label={label} tabIndex={0}>{children}</div>
      <div className="scroller-controls" style={{ visibility: position.overflow ? "visible" : "hidden" }} aria-hidden={!position.overflow} inert={!position.overflow}>
        <button type="button" onClick={() => move(-1)} disabled={position.active === 0} aria-label={`${label}：前へ`} aria-controls={id} className="scroller-arrow">←</button>
        <div className="min-w-0 flex-1">
          <div className="flex gap-1.5" aria-hidden="true">{Array.from({ length: position.count }, (_, index) => <span key={index} className={`scroller-position ${index === position.active ? "is-current" : ""}`} />)}</div>
          <p className="mt-1 text-center text-[11px] tabular-nums text-slate-400" role="status" aria-live="polite" aria-atomic="true"><span className="sr-only">{label}：</span>{String(position.active + 1).padStart(2, "0")} / {String(position.count).padStart(2, "0")}</p>
        </div>
        <button type="button" onClick={() => move(1)} disabled={position.active >= position.count - 1} aria-label={`${label}：次へ`} aria-controls={id} className="scroller-arrow">→</button>
      </div>
    </div>
  );
}
