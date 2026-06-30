import { cld, cldSrcSet } from "@/lib/cld";

type CldImageProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src: string;
  /** Width cap for the default `src` (the largest size a single image needs). */
  width?: number;
  /** The `sizes` hint describing how wide the image renders at each breakpoint. */
  sizes?: string;
};

/**
 * Drop-in <img> replacement that serves optimized, responsive Cloudinary
 * images. Local /public assets pass through untouched.
 */
export default function CldImage({
  src,
  width = 1024,
  sizes = "100vw",
  loading = "lazy",
  decoding = "async",
  ...rest
}: CldImageProps) {
  return (
    <img
      src={cld(src, width)}
      srcSet={cldSrcSet(src)}
      sizes={sizes}
      loading={loading}
      decoding={decoding}
      {...rest}
    />
  );
}
