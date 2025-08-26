import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const heroStats = {
  founder: {
    label: 'Fondateur & CEO',
    value: 'ROBBIN JAMES AGOH',
    icon: '👑'
  },
  group: {
    label: 'Groupe',
    value: 'RJA GROUP',
    subtext: 'Excellence & Innovation'
  },
  experience: {
    label: 'Expérience',
    value: '5 ans',
    subtext: 'Depuis 2019'
  },
  location: {
    label: 'Siège Social',
    value: 'PARIS',
    subtext: 'France'
  }

};

const HomePage = () => {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <motion.img
            src="/images/aaic.jpeg"
            alt="AAIC - Excellence & Innovation"
            className="object-contain w-full h-full bg-black"
            style={{ y: parallaxY }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        </motion.div>

        {/* Pas de contenu au centre pour un design plus épuré */}

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent">
          <div className="container mx-auto px-8 py-12">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              {Object.entries(heroStats).map(([key, stat]) => (
                <div key={key} className="text-white">
                  <div className="text-white/60 text-sm mb-2 flex items-center gap-2">
                    {stat.icon && <span>{stat.icon}</span>}
                    {stat.label}
                  </div>
                  <div className="text-xl font-medium mb-1">{stat.value}</div>
                  {stat.subtext && (
                    <div className="text-sm text-white/80">{stat.subtext}</div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-32 overflow-hidden">
        <div className="container">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-title mb-12">Notre Vision</h2>
            <p className="text-2xl leading-relaxed mb-8">
              AAIC est une société de participation qui détient et développe ses activités à travers deux filiales principales ROBBBIN JAMES HOLDINGS COMPANY et AID HOLDINGS.
            </p>
            <p className="text-2xl leading-relaxed mb-8">
              ROBBIN JAMES HOLDINGS COMPANY est une société qui possède et gère ses filiales à travers le monde, en accompagnant leur croissance et leur expansion internationale.
            </p>
            <p className="text-2xl leading-relaxed mb-8">
              AID HOLDINGS, quant à elle, est une société tournée vers le développement de ses filiales et de ses groupes principalement centrés sur le continent africain.
            </p>
            <p className="text-2xl leading-relaxed">
              À travers ces deux pôles, AAIC s'impose comme un acteur stratégique, avec la volonté de bâtir un groupe solide, international et durable, contribuant à la croissance économique aussi bien en Afrique que dans le reste du monde.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-32 bg-gray-50">
        <div className="container">
          <motion.h2 
            className="text-title text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Projets Phares
          </motion.h2>
          <div className="grid grid-cols-2 gap-8">
                          {[
              {
                title: 'Robbin James Holding',
                description: 'Société qui possède et gère ses filiales à travers le monde, en accompagnant leur croissance et leur expansion internationale',
                image: '/images/Robbinjamesholdingcompany.jpeg',
                link: '/robbin-james-holding'
              },
              {
                title: 'AID Holdings',
                description: 'Société tournée vers le développement de ses filiales et de ses groupes principalement centrés sur le continent africain',
                image: '/images/AIDholding.jpeg',
                link: '/aid-holdings'
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => navigate(project.link)}
              >
                <div className="relative aspect-[4/3] overflow-hidden mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-200" />
                </div>
                <h3 className="text-2xl mb-4">{project.title}</h3>
                <p className="text-muted">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Holdings Section */}
      <section className="py-32">
        <div className="container">
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Image à gauche */}
            <motion.div
              className="relative aspect-[4/3] overflow-hidden rounded-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&h=900&fit=crop"
                alt="Holdings - Bureaux internationaux modernes"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>
            
            {/* Contenu à droite */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-title">Nos Holdings</h2>
              <p className="text-xl leading-relaxed text-gray-700">
                Nos deux sociétés holdings, à travers lesquelles vous pouvez découvrir nos différents groupes et filiales. ROBBIN JAMES HOLDINGS COMPANY regroupe nos activités internationales, tandis que AID HOLDINGS est tournée vers le développement de nos sociétés et de nos groupes en Afrique.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">ROBBIN JAMES HOLDINGS</h3>
                  <p className="text-sm text-gray-600">Activités internationales</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">AID HOLDINGS</h3>
                  <p className="text-sm text-gray-600">Développement en Afrique</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-gray-50">
        <div className="container">
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Contenu à gauche */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-title">Notre Philosophie d'Investissement</h2>
              <h3 className="text-3xl font-light text-gray-600">Investir aujourd'hui, construire demain</h3>
              <p className="text-xl leading-relaxed text-gray-700">
                AAIC adopte une stratégie fondée sur la croissance durable, la diversification et la création de valeur à long terme. Nous investissons dans des secteurs porteurs, en Afrique et à l'international, avec l'ambition de bâtir un groupe solide, responsable et tourné vers l'avenir.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-2">🌱</div>
                  <p className="text-sm font-medium">Croissance Durable</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-green-600 mb-2">🌍</div>
                  <p className="text-sm font-medium">International</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-purple-600 mb-2">💎</div>
                  <p className="text-sm font-medium">Valeur Long Terme</p>
                </div>
              </div>
            </motion.div>
            
            {/* Image à droite */}
            <motion.div
              className="relative aspect-[4/3] overflow-hidden rounded-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&h=900&fit=crop"
                alt="Philosophie d'investissement - Analyse financière et stratégie"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-32 bg-dark text-white">
        <div className="container">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-title mb-12">Notre Impact</h2>
            <div className="grid grid-cols-3 gap-12 mb-16">
              <div>
                <div className="text-4xl font-display mb-4">+500M€</div>
                <p className="text-lg text-white/60">Investis dans l'innovation</p>
              </div>
              <div>
                <div className="text-4xl font-display mb-4">1000+</div>
                <p className="text-lg text-white/60">Emplois créés</p>
              </div>
              <div>
                <div className="text-4xl font-display mb-4">25+</div>
                <p className="text-lg text-white/60">Projets majeurs</p>
              </div>
            </div>
            <button className="border border-white px-8 py-4 text-lg hover:bg-white hover:text-dark transition-colors duration-200">
              Découvrir Nos Projets
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;