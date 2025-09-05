import React from 'react';
import { motion } from 'framer-motion';

const NotreFutur = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section avec motif LVMH */}
      <section className="relative py-24 bg-gradient-to-b from-blue-900 to-blue-800 overflow-hidden">
        {/* Motif de fond géométrique comme LVMH */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="futur-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                <path d="M60,20 L80,40 L60,60 L40,40 Z M20,60 L40,80 L20,100 L0,80 Z M100,60 L120,80 L100,100 L80,80 Z" 
                      fill="none" stroke="white" strokeWidth="2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#futur-pattern)"/>
          </svg>
        </div>
        
        <div className="relative z-10 container max-w-4xl mx-auto text-center">
          <motion.div
            className="bg-white/95 backdrop-blur-sm px-12 py-16 rounded-sm shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-light mb-8 text-black">
              NOTRE <em className="italic">FUTUR</em>
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              À l'horizon, AAIC GROUP se projette comme un acteur incontournable du développement durable et de l'innovation, 
              porté par une vision claire d'excellence et de croissance responsable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Vision - Style LVMH */}
      <section className="py-32 bg-gray-100 relative">
        {/* Motif subtil en arrière-plan */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="vision-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M40,10 L50,20 L40,30 L30,20 Z" fill="none" stroke="black" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#vision-pattern)"/>
          </svg>
        </div>
        
        <div className="relative z-10 container max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-light mb-8 text-black">
              VISION <em className="italic">2030</em>
            </h2>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-xl text-gray-800 leading-relaxed" style={{ textAlign: 'justify' }}>
              À l'horizon, AAIC GROUP se projette comme un acteur incontournable du développement durable et de l'innovation, porté par la vision de ROBBIN JAMES HOLDINGS COMPANY et AID HOLDINGS. Nous imaginons un futur où chacune de nos holdings et filiales continue de grandir tout en conservant son identité unique, son savoir-faire et sa culture propre.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed" style={{ textAlign: 'justify' }}>
              Notre ambition est de créer un écosystème dynamique où l'innovation est au service de la performance et de la croissance durable. Nous souhaitons investir dans des technologies et des pratiques responsables, renforcer les compétences de nos équipes et encourager des collaborations fructueuses au sein de nos groupes.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed" style={{ textAlign: 'justify' }}>
              Dans les années à venir, AAIC GROUP s'engage à accompagner ses entreprises partenaires vers l'excellence, à stimuler leur créativité et à construire des modèles de développement flexibles et résilients. Notre futur est celui d'un groupe solide et visionnaire, capable de concilier succès économique, responsabilité sociale et préservation des valeurs qui font notre force.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section avec image grande comme LVMH */}
      <section className="py-0 bg-blue-900 relative">
        <div className="container max-w-7xl mx-auto">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="aspect-[21/9] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&h=800&fit=crop"
                alt="Innovation et Futur"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black/20"></div>
          </motion.div>
        </div>
      </section>

      {/* Sections Engagements avec design LVMH */}
      <section className="py-32 bg-gray-100 relative">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="engagements-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M50,15 L65,30 L50,45 L35,30 Z" fill="none" stroke="black" strokeWidth="1.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#engagements-pattern)"/>
          </svg>
        </div>

        <div className="relative z-10 container max-w-6xl mx-auto">
          {/* Innovation Durable */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <div className="w-24 h-24 bg-white border-4 border-black mx-auto lg:mx-0 flex items-center justify-center mb-6">
                  <svg width="40" height="40" viewBox="0 0 40 40" className="fill-black">
                    <path d="M20,5 L25,15 L35,15 L27,22 L30,32 L20,27 L10,32 L13,22 L5,15 L15,15 Z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-3xl font-semibold mb-4 tracking-wide">
                INNOVATION <em className="italic">DURABLE</em>
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Investir dans des technologies et des pratiques responsables pour un avenir meilleur. Notre groupe s'engage à développer des solutions innovantes qui respectent l'environnement et créent de la valeur à long terme.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mt-6">
                Nous plaçons la recherche et développement au cœur de notre stratégie, en encourageant l'innovation collaborative entre nos différentes entités.
              </p>
            </motion.div>

            <motion.div
              className="order-first lg:order-last"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=800&h=600&fit=crop"
                  alt="Innovation Durable"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Excellence Opérationnelle */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&h=600&fit=crop"
                  alt="Excellence Opérationnelle"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              className="text-center lg:text-right"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="mb-8">
                <div className="w-24 h-24 bg-white border-4 border-black mx-auto lg:ml-auto lg:mr-0 flex items-center justify-center mb-6">
                  <svg width="40" height="40" viewBox="0 0 40 40" className="fill-black">
                    <rect x="10" y="10" width="20" height="20" rx="2"/>
                    <circle cx="20" cy="20" r="6"/>
                    <circle cx="20" cy="20" r="2"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-3xl font-semibold mb-4 tracking-wide">
                EXCELLENCE <em className="italic">OPÉRATIONNELLE</em>
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Accompagner nos entreprises partenaires vers l'excellence et stimuler leur créativité. Nous développons des standards de qualité exceptionnels et des processus optimisés pour maximiser les performances.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mt-6">
                Notre approche privilégie l'amélioration continue et l'adaptation aux évolutions technologiques et sociétales.
              </p>
            </motion.div>
          </div>

          {/* Croissance Responsable */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <div className="w-24 h-24 bg-white border-4 border-black mx-auto lg:mx-0 flex items-center justify-center mb-6">
                  <svg width="40" height="40" viewBox="0 0 40 40" className="fill-black">
                    <path d="M20,35 Q15,30 15,20 Q15,10 20,5 Q25,10 25,20 Q25,30 20,35 Z"/>
                    <circle cx="20" cy="15" r="3"/>
                    <circle cx="20" cy="25" r="2"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-3xl font-semibold mb-4 tracking-wide">
                CROISSANCE <em className="italic">RESPONSABLE</em>
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Concilier succès économique, responsabilité sociale et préservation des valeurs. Notre vision à long terme intègre les enjeux environnementaux, sociaux et de gouvernance dans toutes nos décisions stratégiques.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mt-6">
                Nous nous engageons à créer de la valeur partagée pour toutes nos parties prenantes, en respectant les principes du développement durable.
              </p>
            </motion.div>

            <motion.div
              className="order-first lg:order-last"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&h=600&fit=crop"
                  alt="Croissance Responsable"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section finale avec citation style LVMH */}
      <section className="py-24 bg-blue-900 text-white text-center">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <blockquote className="text-2xl font-light italic leading-relaxed">
              "Notre futur est celui d'un groupe solide et visionnaire, capable de concilier succès économique, 
              responsabilité sociale et préservation des valeurs qui font notre force."
            </blockquote>
            <cite className="block mt-8 text-lg font-normal">— Vision AAIC GROUP 2030</cite>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NotreFutur;
