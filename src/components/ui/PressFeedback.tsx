"use client";

import { useEffect } from "react";

export function PressFeedback() {
  useEffect(() => {
    let pressed: HTMLElement | null = null;
    let pointer = -1;
    let x = 0;
    let y = 0;
    function clear() { pressed?.removeAttribute("data-pressed"); pressed = null; pointer = -1; }
    function down(event: PointerEvent) {
      if (!event.isPrimary || event.button !== 0 || !(event.target instanceof Element)) return;
      const target = event.target.closest<HTMLElement>("main a.inline-flex, .motion-button, main button[type=submit]");
      if (!target || target.matches(":disabled, [aria-disabled=true]")) return;
      clear();
      pressed = target;
      pointer = event.pointerId;
      x = event.clientX;
      y = event.clientY;
      target.setAttribute("data-pressed", "");
    }
    function move(event: PointerEvent) {
      if (pressed && event.pointerId === pointer && Math.hypot(event.clientX - x, event.clientY - y) > 10) clear();
    }
    function release(event: PointerEvent) { if (event.pointerId === pointer) clear(); }
    // Touch browsers do not consistently expose :active until the finger is released.
    document.addEventListener("pointerdown", down, { passive: true });
    document.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerup", release, { passive: true });
    document.addEventListener("pointercancel", release, { passive: true });
    window.addEventListener("blur", clear);
    return () => {
      clear();
      document.removeEventListener("pointerdown", down);
      document.removeEventListener("pointermove", move);
      document.removeEventListener("pointerup", release);
      document.removeEventListener("pointercancel", release);
      window.removeEventListener("blur", clear);
    };
  }, []);
  return null;
}
