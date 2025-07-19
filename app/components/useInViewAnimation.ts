import { useRef } from 'react';
import { useInView } from 'framer-motion';

/**
 * Custom hook for in-view animation logic.
 * Returns a ref and a boolean indicating if the element is in view.
 * Usage: const [ref, isInView] = useInViewAnimation();
 */
export function useInViewAnimation(options = { once: true, rootMargin: '-100px' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, options);
  return [ref, isInView] as const;
} 