import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  lazy?: boolean;
}

export const OptimizedImage = ({ src, alt, className = "", lazy = true }: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Preload image
    const img = new Image();
    img.onload = () => setIsLoading(false);
    img.onerror = () => {
      setHasError(true);
      setIsLoading(false);
    };
    img.src = src;
  }, [src]);

  if (isLoading) {
    return <Skeleton className={`${className} bg-muted animate-pulse`} />;
  }

  if (hasError) {
    return (
      <div className={`${className} bg-muted/50 flex items-center justify-center text-muted-foreground text-xs`}>
        Error loading image
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={lazy ? "lazy" : "eager"}
      decoding="async"
    />
  );
};