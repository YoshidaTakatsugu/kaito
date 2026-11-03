"use client";

import { useEffect, useRef, type DetailsHTMLAttributes, type MouseEvent } from "react";

export function Disclosure(props: DetailsHTMLAttributes<HTMLDetailsElement>) {
  const animation = useRef<Animation | null>(null);
  const targetOpen = useRef(Boolean(props.open));
  useEffect(() => () => animation.current?.cancel(), []);

  function toggle(event: MouseEvent<HTMLDetailsElement>) {
    const details = event.currentTarget;
    const summary = details.querySelector("summary");
    if (!summary || !(event.target instanceof Element) || event.target.closest("summary") !== summary || event.target.closest("a, button, input") || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || !details.animate) return;
    event.preventDefault();
    const height = details.getBoundingClientRect().height;
    targetOpen.current = animation.current ? !targetOpen.current : !details.open;
    animation.current?.cancel();
    // Measure the expanded content before animating the native details container.
    details.open = true;
    details.style.height = "auto";
    const style = getComputedStyle(details);
    const collapsed = summary.getBoundingClientRect().height + parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) + parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
    const end = targetOpen.current ? details.getBoundingClientRect().height : collapsed;
    details.style.overflow = "hidden";
    if (!targetOpen.current && details.contains(document.activeElement)) summary.focus({ preventScroll: true });
    const current = details.animate([{ height: `${height}px` }, { height: `${end}px` }], { duration: 220, easing: "cubic-bezier(.2,.7,.3,1)" });
    animation.current = current;
    current.onfinish = () => {
      if (animation.current !== current) return;
      details.open = targetOpen.current;
      details.style.removeProperty("height");
      details.style.removeProperty("overflow");
      animation.current = null;
    };
  }
  return <details {...props} data-disclosure onClick={toggle} />;
}
