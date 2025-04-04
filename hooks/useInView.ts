// src/hooks/useInView.ts
import { useState, useEffect, useRef } from "react";

interface UseInViewOptions {
  triggerOnce?: boolean;
}

const useInView = (options: UseInViewOptions = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (options.triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else {
          if (!options.triggerOnce) {
            setIsInView(false);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options.triggerOnce]);

  return [ref, isInView] as const;
};

export default useInView;
