import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ProfileBar } from '../components/ui/ProfileBar';

const heroStats = {
  founder: {
    label: '👑 Fondateur & CEO',
    value: 'ROBBIN JAMES AGOH',
    icon: ''
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
  },
  sector: {
    label: 'Secteur',
    value: 'HOLDING',
    subtext: ''
  },
  status: {
    label: 'Statut*',
    value: 'ACTIF',
    subtext: ''
  }
};

const HomePage = () => {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const navigate = useNavigate();

      return (
    <div className="pb-24">
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

        <div className="absolute bottom-0 left-0 right-0">
          <ProfileBar data={heroStats} />
        </div>
      </section>

      {/* About Us Section - Style Ultima Capital */}
      <section className="py-24 bg-white">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-light mb-16 text-black" style={{ fontFamily: 'serif' }}>
              About Us
            </h2>
            <div className="space-y-8 text-lg leading-relaxed text-gray-700">
              <p className="text-xl font-light">
                Une société de participation suisse spécialisée dans le développement et la gestion d'un portefeuille diversifié d'actifs de haute qualité dans des secteurs stratégiques.
              </p>
              <p className="font-light">
                Nos activités commerciales comprennent la détention directe ou indirecte à long terme d'entreprises de prestige, situées en Europe, en Afrique et dans le monde entier. Nos filiales exclusives sont destinées principalement aux investisseurs institutionnels et aux entreprises de premier plan.
              </p>
              <p className="font-light">
                RJA GROUP est une holding cotée sur les marchés financiers suisses, avec une approche axée sur l'excellence opérationnelle et la croissance durable.
              </p>
            </div>
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <button className="bg-black text-white px-8 py-3 text-sm font-light tracking-wide hover:bg-gray-800 transition-colors duration-300">
                Explore More
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Properties Section - Style Ultima Capital */}
      <section className="py-24 bg-gray-50">
        <div className="container max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-light mb-8 text-black" style={{ fontFamily: 'serif' }}>
              Our Portfolio
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: 'Robbin James Holding Company',
                subtitle: 'Société qui possède et gère ses filiales à travers le monde, en accompagnant leur croissance et leur expansion internationale',
                image: '/images/Robbinjamesholdingcompany.jpeg',
                link: '/robbin-james-holding'
              },
              {
                title: 'AID Holdings',
                subtitle: 'Société tournée vers le développement de ses filiales et de ses groupes principalement centrés sur le continent africain',
                image: '/images/AIDholding.jpeg',
                link: '/aid-holdings'
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                onClick={() => navigate(project.link)}
              >
                <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-light text-black group-hover:text-gray-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm font-light text-gray-600 leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <button className="bg-black text-white px-8 py-3 text-sm font-light tracking-wide hover:bg-gray-800 transition-colors duration-300">
              Explore More
            </button>
          </motion.div>
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

      {/* RJA Collection Signature Service - Style Ultima */}
      <section className="py-24 bg-white">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-light mb-8 text-black" style={{ fontFamily: 'serif' }}>
              RJA Collection Signature<br />Service
            </h2>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto space-y-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-lg font-light text-gray-700 leading-relaxed">
              RJA GROUP SA acquiert et fournit des services de participation de haut niveau qui constituent une alternative aux investissements traditionnels et se caractérisent généralement par un niveau de confidentialité plus élevé, une proposition de service sur mesure, des concepts et des conceptions de niche.
            </p>
            
            <p className="text-lg font-light text-gray-700 leading-relaxed">
              Les services de signature RJA Collection dans les propriétés sont gérés par RJA Management Holding SA, une structure indépendante, qui fournit des services de gestion et opérationnels aux clients ultra-fortunés (UHNW) qui viennent investir.
            </p>
            
            <p className="text-lg font-light text-gray-700 leading-relaxed">
              Ces services comprennent des expériences personnalisées et des services d'hospitalité inégalés qui répondent aux besoins et aux demandes des investisseurs les plus exigeants au monde. Les offres "cinq étoiles plus" et les retraites sur mesure font partie de la marque signature RJA Collection.
            </p>
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

      </div>
    );
  };

export default HomePage;