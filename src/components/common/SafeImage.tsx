import { useState } from "react";
import { cn } from "@/utils/cn";
import { getImageFallbackLabel, isValidImageSrc } from "@/utils/images";

interface SafeImageProps {
  src?: string;
  alt: string;
  className?: string;
  placeholder?: string;
  loading?: "lazy" | "eager";
}

export function SafeImage({
  src,
  alt,
  className,
  placeholder,
  loading = "lazy",
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);
  const showFallback = !isValidImageSrc(src) || hasError;

  if (showFallback) {
    return (
      <div
        className={cn(
          "grid h-full w-full place-items-center bg-[radial-gradient(circle_at_50%_20%,rgba(37,99,235,0.18),rgba(7,9,15,0.95))] p-6 text-center",
          className,
        )}
        role="img"
        aria-label={getImageFallbackLabel(alt)}
      >
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan">
            Image unavailable
          </p>
          <p className="mt-4 font-heading text-xl font-semibold">
            {placeholder ?? alt}
          </p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      className={cn("h-full w-full object-cover", className)}
      onError={() => setHasError(true)}
    />
  );
}
