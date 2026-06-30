/* ── Cloudinary delivery helpers ──
   Inject auto-format (WebP/AVIF), auto-quality and a width cap so the browser
   downloads a right-sized, modern-format image instead of the full original.
   Non-Cloudinary URLs (local /public assets) pass through untouched. */
export const cld = (url: string, w: number) =>
  url?.includes("/upload/")
    ? url.replace("/upload/", `/upload/f_auto,q_auto,c_limit,w_${w}/`)
    : url;

// Responsive srcSet across common breakpoints for crisp images on any screen.
export const cldSrcSet = (url: string) =>
  url?.includes("/upload/")
    ? [480, 768, 1024, 1440, 1920].map((w) => `${cld(url, w)} ${w}w`).join(", ")
    : undefined;
