"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";

const ARTICLE_URL =
  "https://guardian.ng/specials/special-focus-on-50-distinguished-nigerians-of-merit-micheal-shobukola-steering-strongmas-group-toward-modern-real-estate-excellence/";

/** Bump this when the popup content changes to re-show it to returning visitors. */
const STORAGE_KEY = "featuredPopup:guardian-2026-05:dismissed";
/** Delay before the popup appears, giving the page time to settle. */
const APPEAR_DELAY_MS = 1500;
/** How long the card lingers in view before docking to the right edge. */
const DOCK_DELAY_MS = 3500;

const FeaturedPopup = () => {
  const [mounted, setMounted] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [docked, setDocked] = React.useState(false);

  // Decide whether to show — once per browser session.
  React.useEffect(() => {
    let dismissed = false;
    try {
      dismissed = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      // Private mode / storage disabled — fail open (show once, no persistence).
    }
    if (dismissed) return;

    const appearTimer = window.setTimeout(() => {
      setMounted(true);
      // Next frame so the entrance transition plays.
      requestAnimationFrame(() => setOpen(true));
    }, APPEAR_DELAY_MS);

    // After lingering in view, slide the card over to the right-hand side.
    const dockTimer = window.setTimeout(() => {
      setDocked(true);
    }, APPEAR_DELAY_MS + DOCK_DELAY_MS);

    return () => {
      window.clearTimeout(appearTimer);
      window.clearTimeout(dockTimer);
    };
  }, []);

  const dismiss = React.useCallback(() => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
    // Unmount after the exit transition completes.
    window.setTimeout(() => setMounted(false), 300);
  }, []);

  if (!mounted) return null;

  return (
    // Non-blocking layer: the page stays scrollable and clickable behind it.
    <div
      aria-hidden={!open}
      className="pointer-events-none fixed inset-0 z-[100] hidden sm:block"
    >
      <div
        role="dialog"
        aria-modal="false"
        aria-label="As featured in The Guardian"
        // Anchored to the right edge with the CSS `right` property so the card
        // can never extend past the viewport (vw/left-calc math broke on mobile).
        // It glides vertically down the right side from top → middle.
        className="pointer-events-auto absolute right-3 w-[190px] max-w-[calc(100%-1.5rem)] motion-reduce:!transition-none"
        style={{
          opacity: open ? 1 : 0,
          top: docked ? "50%" : "1.5rem",
          transform: docked
            ? "translateY(-50%)"
            : open
            ? "translateY(0)"
            : "translateY(-24px)",
          transition:
            "top 900ms cubic-bezier(0.22, 1, 0.36, 1), transform 900ms cubic-bezier(0.22, 1, 0.36, 1), opacity 500ms ease-out",
          willChange: "top, transform",
        }}
      >
        <div className="relative max-h-[88vh] w-full overflow-y-auto overflow-x-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5">
          <button
            type="button"
            onClick={dismiss}
            aria-label="Close"
            className="absolute right-2 top-2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-sm transition-colors hover:bg-white hover:text-black"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="flex flex-col">
            <Link
              href={ARTICLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[16/7] w-full overflow-hidden"
            >
              <Image
                src="/mdp.jpeg"
                alt="Michael Shobukola featured in The Guardian Nigeria"
                fill
                sizes="(max-width: 640px) 100vw, 190px"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>

            <div className="space-y-1.5 p-2.5">
              <p className="text-[9px] uppercase tracking-[0.2em] text-gray-500">
                As Featured In The Guardian
              </p>
              <p className="text-[11px] leading-snug text-gray-600">
                Recognised among{" "}
                <span className="font-medium text-gray-900">50 Distinguished Nigerians of Merit</span>{" "}
                &middot; The Guardian, May 2026
              </p>
              <div className="flex items-center justify-between gap-2 pt-0.5">
                <Link
                  href={ARTICLE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={dismiss}
                  className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-[11px] font-medium text-white transition-colors hover:bg-primary/90"
                >
                  Read the full story
                  <ArrowRight className="h-3 w-3" />
                </Link>
                <button
                  type="button"
                  onClick={dismiss}
                  className="text-[11px] font-medium text-gray-400 underline-offset-4 transition-colors hover:text-gray-700 hover:underline"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPopup;
