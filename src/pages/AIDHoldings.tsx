import React from 'react';
import { motion } from 'framer-motion';

const AIDHoldings = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/images/AIDholding.jpeg"
            alt="AID Holdings"
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
            AID Holdings
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Société tournée vers le développement de ses filiales et de ses groupes principalement centrés sur le continent africain
          </motion.p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="relative aspect-[4/3] overflow-hidden rounded-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1200&h=900&fit=crop"
                alt="Développement en Afrique"
                className="object-cover w-full h-full"
              />
            </motion.div>
            
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-title">Notre Mission en Afrique</h2>
              <p className="text-xl leading-relaxed text-gray-700">
                AID Holdings est dédiée au développement économique et social du continent africain, 
                en accompagnant ses filiales dans la création de valeur durable et l'innovation locale.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                Notre approche privilégie les partenariats locaux et le transfert de compétences, 
                contribuant ainsi à l'essor des économies africaines et à l'autonomisation des communautés.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nos Secteurs Section */}
      <section className="py-32 bg-gray-50">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-title mb-8">Nos Secteurs d'Activité</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des investissements stratégiques dans les secteurs porteurs du développement africain
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Infrastructure & Énergie",
                description: "Développement d'infrastructures durables et de solutions énergétiques innovantes",
                icon: "⚡",
                countries: "Ghana, Côte d'Ivoire, Sénégal"
              },
              {
                title: "Agriculture & Agro-industrie",
                description: "Modernisation des chaînes agricoles et développement agro-industriel",
                icon: "🌱",
                countries: "Mali, Burkina Faso, Niger"
              },
              {
                title: "Technologies & Innovation",
                description: "Solutions technologiques adaptées aux besoins locaux et formation numérique",
                icon: "💻",
                countries: "Maroc, Tunisie, Kenya"
              },
              {
                title: "Santé & Éducation",
                description: "Amélioration de l'accès aux soins et développement de l'éducation",
                icon: "🏥",
                countries: "Rwanda, Cameroun, Madagascar"
              },
              {
                title: "Services Financiers",
                description: "Inclusion financière et services bancaires adaptés aux PME locales",
                icon: "🏦",
                countries: "Nigeria, Afrique du Sud"
              },
              {
                title: "Commerce & Distribution",
                description: "Réseaux de distribution et plateformes de commerce régional",
                icon: "🛒",
                countries: "Ensemble du continent"
              }
            ].map((secteur, index) => (
              <motion.div
                key={secteur.title}
                className="bg-white p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{secteur.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{secteur.title}</h3>
                <p className="text-gray-600 mb-4">{secteur.description}</p>
                <div className="text-sm text-green-600 font-medium">{secteur.countries}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
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
              <h2 className="text-title">Notre Impact</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                  <p className="text-sm font-medium">Projets réalisés</p>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15</div>
                  <p className="text-sm font-medium">Pays d'implantation</p>
                </div>
                <div className="text-center p-6 bg-yellow-50 rounded-lg">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">10K+</div>
                  <p className="text-sm font-medium">Emplois créés</p>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">200M€</div>
                  <p className="text-sm font-medium">Investis en Afrique</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="relative aspect-[4/3] overflow-hidden rounded-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?q=80&w=1200&h=900&fit=crop"
                alt="Impact social en Afrique"
                className="object-cover w-full h-full"
              />
            </motion.div>
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
              <h2 className="text-title mb-8">Rejoignez Notre Mission</h2>
              <p className="text-xl mb-12">
                Participez au développement durable du continent africain avec AID Holdings
              </p>
              <button className="bg-white text-black px-8 py-4 text-lg hover:bg-gray-100 transition-colors duration-200">
                Nous Contacter
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIDHoldings;
