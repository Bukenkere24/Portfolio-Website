import { useState } from "react";
import { Skeleton } from "@/components/common/Skeleton";
import { cn } from "@/utils/cn";
import { getImageFallbackLabel, isValidImageSrc } from "@/utils/images";

interface SafeImageProps {
  src?: string;
  alt: string;
  className?: string;
  placeholder?: string;
  loading?: "lazy" | "eager";
  rounded?: boolean;
  fit?: "cover" | "contain";
}

export function SafeImage({
  src,
  alt,
  className,
  placeholder,
  loading = "lazy",
  rounded = true,
  fit = "cover",
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(isValidImageSrc(src));
  const showFallback = !isValidImageSrc(src) || hasError;

  if (showFallback) {
    return (
      <div
        className={cn(
          "grid h-full w-full place-items-center bg-[radial-gradient(circle_at_50%_20%,rgba(37,99,235,0.18),rgba(7,9,15,0.95))] p-6 text-center",
          rounded && "rounded-image",
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
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden",
        fit === "contain" && "bg-black/25",
        rounded && "rounded-image",
      )}
    >
      {isLoading && (
        <Skeleton className="absolute inset-0 rounded-image" aria-hidden />
      )}
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        className={cn(
          "transition-opacity duration-300",
          fit === "contain"
            ? "max-h-full max-w-full object-contain"
            : "h-full w-full object-cover",
          isLoading ? "opacity-0" : "opacity-100",
          className,
        )}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
      />
    </div>
  );
}
