import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import type { TeamMember } from '../../data/team';

interface LeadershipProps {
  team: TeamMember[];
  className?: string;
}

export const Leadership = ({ team, className = '' }: LeadershipProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className={`py-24 bg-surface ${className}`}>
      <div className="container">
        <SectionHeader
          eyebrow="Notre équipe"
          title="Une équipe dirigeante expérimentée"
          intro="Des leaders visionnaires qui façonnent l'avenir de RJA avec passion et expertise."
          className="mb-16"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {team.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <h3 className="font-serif text-xl mb-2">{member.name}</h3>
              <div className="text-sm text-muted mb-4">{member.role}</div>
              <p className="text-sm text-muted mb-4">{member.bio}</p>

              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-accent hover:text-accent/80 transition-colors duration-180"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  LinkedIn
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}; 