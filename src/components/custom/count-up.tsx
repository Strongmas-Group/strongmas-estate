"use client";

import * as React from "react";

/**
 * Animates the numeric part of a display figure ("1,256+", "70+", "6") from
 * zero to its final value, looping for as long as it stays in view: count up,
 * hold on the final figure, then start again.
 *
 * The final figure is what renders on the server and on the first client
 * render, so crawlers still see the real number and the layout never shifts;
 * the reset to zero happens in a layout effect, before the browser paints.
 */

const EASE_OUT_CUBIC = (t: number) => 1 - Math.pow(1 - t, 3);

/** Splits "1,256+" into prefix "", digits "1,256" and suffix "+". */
const FIGURE = /^(\D*?)(\d[\d,]*(?:\.\d+)?)(.*)$/;

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

export default function CountUp({
  value,
  duration = 1800,
  hold = 2500,
  className,
}: {
  value: string;
  /** Length of the count, in milliseconds. */
  duration?: number;
  /** How long the final figure stays up before the count restarts, in milliseconds. */
  hold?: number;
  className?: string;
}) {
  const parsed = React.useMemo(() => {
    const match = FIGURE.exec(value);
    if (!match) return null;

    const [, prefix, digits, suffix] = match;
    const fraction = digits.split(".")[1] ?? "";

    return {
      prefix,
      suffix,
      target: Number(digits.replace(/,/g, "")),
      decimals: fraction.length,
      grouped: digits.includes(","),
    };
  }, [value]);

  const [current, setCurrent] = React.useState(() => parsed?.target ?? 0);
  const ref = React.useRef<HTMLSpanElement>(null);

  useIsomorphicLayoutEffect(() => {
    const node = ref.current;
    if (!parsed || !node) return;

    // Anyone who has asked for less motion just keeps the final figure.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setCurrent(0);

    let frame = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const stop = () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
    };

    const run = () => {
      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        setCurrent(parsed.target * EASE_OUT_CUBIC(progress));
        if (progress < 1) frame = requestAnimationFrame(step);
        else timer = setTimeout(run, hold);
      };
      frame = requestAnimationFrame(step);
    };

    // Only loop while visible; leaving view pauses it, coming back restarts it.
    const observer = new IntersectionObserver(
      (entries) => {
        stop();
        if (entries[0]?.isIntersecting) run();
        else setCurrent(0);
      },
      { threshold: 0.4 }
    );
    observer.observe(node);

    return () => {
      observer.disconnect();
      stop();
    };
  }, [parsed, duration, hold]);

  if (!parsed) return <span className={className}>{value}</span>;

  const display = parsed.grouped
    ? current.toLocaleString("en-US", {
        minimumFractionDigits: parsed.decimals,
        maximumFractionDigits: parsed.decimals,
      })
    : current.toFixed(parsed.decimals);

  return (
    <span ref={ref} className={className}>
      {parsed.prefix}
      {display}
      {parsed.suffix}
    </span>
  );
}
