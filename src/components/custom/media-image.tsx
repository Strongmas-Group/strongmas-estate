import { cld, cldSrcSet } from "@/lib/cld";

/**
 * Cover image that avoids double-optimising Cloudinary assets.
 *
 * Cloudinary already delivers modern formats and right-sized variants via
 * f_auto/q_auto/w_N, so routing those URLs through the Next image optimiser
 * just adds ~1.5s of server CPU per unique image on a cold cache, painful on
 * listing pages that render a dozen cards at once. Cloudinary URLs are served
 * straight from the CDN with a responsive srcSet; local /public files fall
 * back to a plain tag with explicit lazy loading.
 *
 * Drop-in replacement for `<Image fill className="object-cover" />` inside a
 * `relative` container.
 */
export default function MediaImage({
  src,
  alt,
  sizes = "100vw",
  priority = false,
  className = "",
  width = 1024,
}: {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  /** Base width requested from Cloudinary for the default src. */
  width?: number;
}) {
  const isCloudinary = src.includes("/upload/");

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={isCloudinary ? cld(src, width) : src}
      srcSet={isCloudinary ? cldSrcSet(src) : undefined}
      sizes={isCloudinary ? sizes : undefined}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : undefined}
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
    />
  );
}
