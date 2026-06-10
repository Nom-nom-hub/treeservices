'use client';

import { useState, useEffect, useRef } from 'react';

export default function AnimatedCounter({ target, duration = 2000 }: { target: string; duration?: number }) {
  const [count, setCount] = useState('0');
  const startedRef = useRef(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !startedRef.current) {
        startedRef.current = true;
        const numTarget = parseInt(target.replace(/\D/g, '')) || 0;
        const start = performance.now();
        const animate = (now: number) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(eased * numTarget);
          setCount(target.includes('%') ? `${current}%` : target.includes('min') ? `${current} min` : `${current}+`);
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return <span ref={ref}>{count}</span>;
}
