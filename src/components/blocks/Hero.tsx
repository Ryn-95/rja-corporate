import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../ui/Button';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

export const Hero = ({
  title,
  subtitle,
  backgroundImage = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&h=1080&fit=crop',
  ctaLabel = 'Découvrir RJA',
  ctaHref = '/a-propos',
  className = '',
}: HeroProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.section
      ref={ref}
      className={`relative h-screen overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y, opacity }}
      >
        <div className="absolute inset-0 bg-bg/60 backdrop-blur-sm" />
        <img
          src={backgroundImage}
          alt=""
          className="object-cover w-full h-full"
        />
      </motion.div>

      <div className="relative h-full">
        <div className="container h-full flex flex-col justify-center items-start">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-6">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl md:text-2xl text-muted mb-8">
                {subtitle}
              </p>
            )}
            <Button
              as="a"
              href={ctaHref}
              size="lg"
              className="mt-4"
            >
              {ctaLabel}
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}; 