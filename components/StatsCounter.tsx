
import React, { useState, useEffect, useRef } from 'react';

interface StatsCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const StatsCounter: React.FC<StatsCounterProps> = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  const displayCount = end >= 1000 ? (count / 1000).toFixed(1) : count;

  return (
    <span ref={elementRef}>
      {displayCount}{suffix}
    </span>
  );
};

export default StatsCounter;
