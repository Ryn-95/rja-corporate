import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { SectionHeader } from '../ui/SectionHeader';
import type { Sector } from '../../data/sectors';

interface SectorsGridProps {
  sectors: Sector[];
  className?: string;
}

export const SectorsGrid = ({ sectors, className = '' }: SectorsGridProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
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
          eyebrow="Nos secteurs d'expertise"
          title="Des investissements stratégiques dans des secteurs porteurs"
          intro="Nous développons un portefeuille diversifié d'actifs d'exception dans des secteurs à fort potentiel de croissance."
          align="center"
          className="mb-16"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {sectors.map((sector) => (
            <motion.div key={sector.id} variants={cardVariants}>
              <Card
                title={sector.name}
                description={sector.description}
                imageUrl={sector.image}
                imageAlt={sector.name}
                href={`/portefeuille/${sector.id}`}
                tags={sector.stats?.map((stat) => `${stat.label}: ${stat.value}`)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}; 