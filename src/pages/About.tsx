import { motion } from 'framer-motion';
import { Hero } from '../components/blocks/Hero';
import { Timeline } from '../components/blocks/Timeline';
import { Leadership } from '../components/blocks/Leadership';
import { timeline } from '../data/timeline';
import { team } from '../data/team';

const Vision = () => (
  <section className="py-24" id="vision">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
            Notre vision
          </h2>
          <div className="space-y-6 text-muted">
            <p>
              Chez RJA, nous croyons que la création de valeur durable repose sur une vision à long terme et une expertise sectorielle approfondie. Notre approche d'investissement combine excellence opérationnelle et innovation responsable.
            </p>
            <p>
              Notre mission est d'accompagner le développement d'entreprises d'exception, en leur apportant non seulement des capitaux, mais aussi notre expertise stratégique et notre réseau international.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="font-serif text-4xl text-accent">25+</div>
              <div className="text-sm uppercase tracking-wider text-muted">
                Années d'expertise
              </div>
            </div>
            <div className="space-y-4">
              <div className="font-serif text-4xl text-accent">4</div>
              <div className="text-sm uppercase tracking-wider text-muted">
                Secteurs stratégiques
              </div>
            </div>
            <div className="space-y-4">
              <div className="font-serif text-4xl text-accent">15</div>
              <div className="text-sm uppercase tracking-wider text-muted">
                Pays d'implantation
              </div>
            </div>
            <div className="space-y-4">
              <div className="font-serif text-4xl text-accent">500+</div>
              <div className="text-sm uppercase tracking-wider text-muted">
                Collaborateurs
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Values = () => (
  <section className="py-24 bg-surface">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
          Nos valeurs
        </h2>
        <p className="text-muted text-lg">
          Des principes fondamentaux qui guident chacune de nos actions et décisions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: 'Excellence',
            description: 'Nous visons l\'excellence dans chacune de nos actions, en maintenant les plus hauts standards de qualité et de performance.',
          },
          {
            title: 'Innovation',
            description: 'Nous encourageons l\'innovation et la créativité pour développer des solutions durables et créatrices de valeur.',
          },
          {
            title: 'Responsabilité',
            description: 'Nous agissons de manière responsable envers nos parties prenantes, la société et l\'environnement.',
          },
        ].map((value, index) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="text-center p-8"
          >
            <h3 className="font-serif text-2xl mb-4">{value.title}</h3>
            <p className="text-muted">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const About = () => {
  return (
    <>
      <Hero
        title="À propos de RJA"
        subtitle="Une holding d'investissement engagée dans l'excellence et l'innovation depuis 1999."
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&h=1080&fit=crop"
      />

      <Vision />
      
      <Values />

      <Timeline events={timeline} />

      <Leadership team={team} />
    </>
  );
}; 