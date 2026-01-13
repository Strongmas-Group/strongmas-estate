'use client';
import { useEffect } from 'react';

export default function MetaPixel() {
  useEffect(() => {
    // Standard Meta Pixel script (TypeScript-safe)
    (function (f: any, b: Document, e: string, v: string, n?: any, t?: HTMLScriptElement, s?: Element) {
      if (f.fbq) return;
      n = f.fbq = function () {
        (n.queue = n.queue || []).push(arguments);
      };
      n.push = n;
      n.loaded = true;
      n.version = '2.0';
      t = b.createElement(e) as HTMLScriptElement;
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s?.parentNode?.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    // Initialize Pixel
    (window as any).fbq('init', '1163500775997386');
    (window as any).fbq('track', 'PageView');
  }, []);

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        src="https://www.facebook.com/tr?id=1163500775997386&ev=PageView&noscript=1"
        alt="fb-pixel"
      />
    </noscript>
  );
}
