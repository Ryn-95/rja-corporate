import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { SectionHeader } from '../ui/SectionHeader';
import type { Company } from '../../data/companies';

interface PortfolioCarouselProps {
  companies: Company[];
  className?: string;
}

export const PortfolioCarousel = ({ companies, className = '' }: PortfolioCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = companies.length - 1;
      if (nextIndex >= companies.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const company = companies[currentIndex];

  return (
    <section className={`py-24 bg-surface overflow-hidden ${className}`}>
      <div className="container">
        <SectionHeader
          eyebrow="Notre portefeuille"
          title="Des actifs d'exception"
          intro="Découvrez nos participations stratégiques dans des entreprises leaders de leur secteur."
          className="mb-16"
        />

        <div className="relative">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              ref={slideRef}
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute inset-0"
            >
              <Card
                variant="horizontal"
                title={company.name}
                description={company.description}
                imageUrl={company.image}
                imageAlt={company.name}
                href={`/portefeuille/${company.id}`}
                tags={company.stats.map((stat) => `${stat.label}: ${stat.value}`)}
              />
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-12 space-x-4">
            <Button
              variant="ghost"
              onClick={() => paginate(-1)}
              aria-label="Précédent"
            >
              ←
            </Button>
            <Button
              variant="ghost"
              onClick={() => paginate(1)}
              aria-label="Suivant"
            >
              →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}; 