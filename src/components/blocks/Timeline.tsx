import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import type { TimelineEvent } from '../../data/timeline';

interface TimelineProps {
  events: TimelineEvent[];
  className?: string;
}

export const Timeline = ({ events, className = '' }: TimelineProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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
    <section className={`py-24 ${className}`}>
      <div className="container">
        <SectionHeader
          eyebrow="Notre histoire"
          title="25 ans d'excellence et d'innovation"
          intro="Depuis sa création en 1999, RJA n'a cessé de se développer et d'innover pour créer de la valeur durable."
          className="mb-16"
        />

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Ligne verticale */}
          <div className="absolute left-[25px] md:left-1/2 ml-[-1px] top-0 bottom-0 w-[2px] bg-line" />

          <div className="space-y-24">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                variants={itemVariants}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'
                }`}
              >
                <div
                  className={`relative ${
                    index % 2 === 0 ? 'md:order-1' : 'md:order-2'
                  }`}
                >
                  {/* Point sur la timeline */}
                  <div className="absolute left-0 md:left-auto md:right-[-32px] top-[28px] w-[12px] h-[12px] rounded-full bg-accent transform md:translate-x-1/2 translate-y-[-50%]" />
                  
                  <div className="pl-12 md:pl-0">
                    <div className="font-serif text-4xl mb-4">{event.year}</div>
                    <h3 className="text-xl font-serif mb-3">{event.title}</h3>
                    <p className="text-muted">{event.description}</p>
                  </div>
                </div>

                {event.image && (
                  <div
                    className={`relative aspect-[16/9] overflow-hidden rounded-sm ${
                      index % 2 === 0 ? 'md:order-2' : 'md:order-1'
                    }`}
                  >
                    <img
                      src={event.image}
                      alt={event.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 