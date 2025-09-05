import React from 'react';
import { motion } from 'framer-motion';

const NotreGroupe = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section avec motif LVMH */}
      <section className="relative py-24 bg-gradient-to-b from-blue-900 to-blue-800 overflow-hidden">
        {/* Motif de fond géométrique comme LVMH */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="group-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                <path d="M60,20 L80,40 L60,60 L40,40 Z M20,60 L40,80 L20,100 L0,80 Z M100,60 L120,80 L100,100 L80,80 Z" 
                      fill="none" stroke="white" strokeWidth="2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#group-pattern)"/>
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
              NOTRE <em className="italic">GROUPE</em>
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Un groupe à caractère familial fondé en 2025, avec pour mission d'assurer le développement 
              à long terme de chacune de ses holdings dans le respect de leur singularité.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section AAIC GROUP - Style LVMH */}
      <section className="py-32 bg-gray-100 relative">
        {/* Motif subtil en arrière-plan */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="aaic-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M40,10 L50,20 L40,30 L30,20 Z" fill="none" stroke="black" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#aaic-pattern)"/>
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
              AAIC <em className="italic">GROUP</em>
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
              AAIC GROUP est un groupe à caractère familial fondé en 2025. Il a pour mission d'assurer le développement à long terme de chacune de ses holdings, de leurs groupes ainsi que leurs filiales, dans le respect de ce qui fait leur singularité et leur force, en valorisant leurs compétences propres, leur culture d'entreprise et leur savoir-faire.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed" style={{ textAlign: 'justify' }}>
              AAIC GROUP s'engage à accompagner chacune de ses holdings, de leurs groupes et filiales, afin de stimuler leur innovation, renforcer leur performance et assurer une croissance durable, tout en préservant leur identité et leur autonomie.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section avec images grandes comme LVMH */}
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
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&h=800&fit=crop"
                alt="AAIC GROUP Vision"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black/20"></div>
          </motion.div>
        </div>
      </section>

      {/* Holdings Sections avec design LVMH */}
      <section className="py-32 bg-gray-100 relative">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="holdings-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M50,15 L65,30 L50,45 L35,30 Z" fill="none" stroke="black" strokeWidth="1.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#holdings-pattern)"/>
          </svg>
        </div>

        <div className="relative z-10 container max-w-6xl mx-auto">
          {/* ROBBIN JAMES HOLDINGS COMPANY */}
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
                    <rect x="5" y="5" width="8" height="8"/>
                    <rect x="27" y="5" width="8" height="8"/>
                    <rect x="5" y="27" width="8" height="8"/>
                    <rect x="27" y="27" width="8" height="8"/>
                    <rect x="16" y="16" width="8" height="8"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-3xl font-semibold mb-4 tracking-wide">
                ROBBIN JAMES <em className="italic">HOLDINGS COMPANY</em>
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                ROBBIN JAMES HOLDINGS COMPANY est une société à vocation familiale fondée dans le but de soutenir et développer ses différentes entités de manière durable. Sa mission est de promouvoir la croissance et la pérennité de chacune de ses filiales et sociétés affiliées, tout en respectant ce qui fait leur identité et leur singularité.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mt-6">
                ROBBIN JAMES HOLDINGS COMPANY valorise les compétences, le savoir-faire et la culture d'entreprise propres à chaque entité, et s'engage à stimuler l'innovation, renforcer la performance et assurer une croissance durable.
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
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=800&h=600&fit=crop"
                  alt="Robbin James Holdings Company"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* AID HOLDINGS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&h=600&fit=crop"
                  alt="AID Holdings"
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
                    <circle cx="10" cy="10" r="3"/>
                    <circle cx="30" cy="10" r="3"/>
                    <circle cx="10" cy="30" r="3"/>
                    <circle cx="30" cy="30" r="3"/>
                    <circle cx="20" cy="20" r="4"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-3xl font-semibold mb-4 tracking-wide">
                AID <em className="italic">HOLDINGS</em>
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg" style={{ textAlign: 'justify' }}>
                AID HOLDINGS se positionne comme un groupe familial dédié au développement stratégique et durable de ses holdings et filiales. Sa mission consiste à accompagner chaque société dans l'optimisation de ses compétences et de ses talents, tout en respectant sa culture et ses valeurs propres.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mt-6" style={{ textAlign: 'justify' }}>
                AID HOLDINGS encourage l'innovation, soutient la performance et favorise une croissance durable, en veillant à ce que chaque entité conserve sa singularité et son autonomie.
              </p>
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
              "Valoriser les compétences propres, la culture d'entreprise et le savoir-faire de chacune de nos entités, 
              tout en stimulant l'innovation et en assurant une croissance durable."
            </blockquote>
            <cite className="block mt-8 text-lg font-normal">— Vision AAIC GROUP</cite>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NotreGroupe;
