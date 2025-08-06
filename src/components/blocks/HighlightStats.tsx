import { motion } from 'framer-motion';
import { Stat } from '../ui/Stat';
import type { Stat as StatType } from '../../data/stats';

interface HighlightStatsProps {
  stats: StatType[];
  className?: string;
}

export const HighlightStats = ({ stats, className = '' }: HighlightStatsProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className={`py-24 bg-surface ${className}`}>
      <div className="container">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {stats.map((stat) => (
            <Stat
              key={stat.id}
              value={stat.value}
              label={stat.label}
              prefix={stat.prefix}
              suffix={stat.suffix}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}; 