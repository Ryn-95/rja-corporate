import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export const Stat = ({
  value,
  label,
  prefix = '',
  suffix = '',
  duration = 2,
  className = '',
}: StatProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const incrementTime = (duration * 1000) / end;
      const counter = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(counter);
      }, incrementTime);

      return () => clearInterval(counter);
    }
  }, [value, duration, isInView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`text-center ${className}`}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <div className="font-serif text-4xl md:text-5xl mb-4">
        {prefix}
        {isInView ? count : 0}
        {suffix}
      </div>
      <div className="text-sm uppercase tracking-wider text-muted">{label}</div>
    </motion.div>
  );
}; 