import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect, useRef } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  lazy?: boolean;
  priority?: boolean;
}

export const OptimizedImage = ({ src, alt, className = "", lazy = true, priority = false }: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(!lazy || priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (!lazy || priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [lazy, priority]);

  useEffect(() => {
    if (!isInView) return;

    // Timeout para evitar carregamento infinito
    timeoutRef.current = setTimeout(() => {
      if (isLoading) {
        setHasError(true);
        setIsLoading(false);
      }
    }, 10000);

    const img = new Image();
    img.onload = () => {
      setIsLoading(false);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    img.onerror = () => {
      setHasError(true);
      setIsLoading(false);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    img.src = src;

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [src, isInView]);

  if (!isInView) {
    return <div ref={imgRef} className={`${className} bg-muted/30`} />;
  }

  if (isLoading) {
    return <Skeleton className={`${className} bg-muted animate-pulse`} />;
  }

  if (hasError) {
    return (
      <div className={`${className} bg-muted/50 flex items-center justify-center text-muted-foreground text-xs`}>
        Falha ao carregar
      </div>
    );
  }

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={className}
      loading={lazy && !priority ? "lazy" : "eager"}
      decoding="async"
    />
  );
};