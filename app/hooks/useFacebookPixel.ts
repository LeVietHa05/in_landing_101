/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

export default function useFacebookPixel(pixelId: string) {
  useEffect(() => {
    // Nếu đã có fbq thì không khởi tạo lại
    if (window.fbq) return;

    (function (f: any, b: Document, e: string, v: string) {
      const n: any = function (...args: any[]) {
        // eslint-disable-next-line prefer-spread
        n.callMethod ? n.callMethod.apply(n, args) : n.queue.push(args);
      };
      f.fbq = n;
      f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = "2.0";
      n.queue = [];

      const t = b.createElement(e) as HTMLScriptElement;
      t.async = true;
      t.src = v;

      const s = b.getElementsByTagName(e)[0];
      s.parentNode?.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );

    window.fbq("init", pixelId);
    window.fbq("track", "PageView");
  }, [pixelId]);

  const trackEvent = (eventName: string, data: Record<string, any> = {}) => {
    if (typeof window.fbq === "function") {
      window.fbq("track", eventName, data);
    }
  };

  return { trackEvent };
}
