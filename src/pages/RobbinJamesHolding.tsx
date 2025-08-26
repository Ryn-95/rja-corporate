import React from 'react';
import { motion } from 'framer-motion';

const RobbinJamesHolding = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/images/Robbinjamesholdingcompany.jpeg"
            alt="Robbin James Holding Company"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-8">
          <motion.h1
            className="text-6xl md:text-7xl font-serif mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Robbin James Holding
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Société qui possède et gère ses filiales à travers le monde, en accompagnant leur croissance et leur expansion internationale
          </motion.p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-title">Notre Mission Internationale</h2>
              <p className="text-xl leading-relaxed text-gray-700">
                Robbin James Holding Company se positionne comme un acteur majeur de l'investissement international, 
                avec pour mission d'accompagner ses filiales dans leur développement et leur expansion à travers le monde.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                Notre approche stratégique repose sur une vision globale des marchés, permettant à nos filiales 
                de bénéficier de synergies internationales et d'opportunités de croissance durables.
              </p>
            </motion.div>
            
            <motion.div
              className="relative aspect-[4/3] overflow-hidden rounded-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&h=900&fit=crop"
                alt="Expansion internationale"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nos Filiales Section */}
      <section className="py-32 bg-gray-50">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-title mb-8">Nos Filiales Internationales</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un portefeuille diversifié de filiales opérant dans des secteurs stratégiques à travers le monde
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Technologies Innovantes",
                description: "Solutions technologiques de pointe pour les entreprises du futur",
                location: "Europe & Amérique du Nord"
              },
              {
                title: "Immobilier Premium",
                description: "Développements immobiliers haut de gamme dans les capitales mondiales",
                location: "Paris, Londres, New York"
              },
              {
                title: "Services Financiers",
                description: "Solutions financières spécialisées pour une clientèle internationale",
                location: "Places financières mondiales"
              }
            ].map((filiale, index) => (
              <motion.div
                key={filiale.title}
                className="bg-white p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-semibold mb-4">{filiale.title}</h3>
                <p className="text-gray-600 mb-4">{filiale.description}</p>
                <div className="text-sm text-blue-600 font-medium">{filiale.location}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-dark text-white">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-title mb-8">Nous Contacter</h2>
              <p className="text-xl mb-12">
                Découvrez les opportunités d'investissement et de partenariat avec Robbin James Holding Company
              </p>
              <button className="bg-white text-black px-8 py-4 text-lg hover:bg-gray-100 transition-colors duration-200">
                Prendre Contact
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RobbinJamesHolding;
