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
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-12 gap-8">
            {/* Colonne de gauche vide pour l'espacement */}
            <div className="col-span-1"></div>
            
            {/* Contenu principal sur le côté */}
            <motion.div
              className="col-span-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-8xl font-light mb-12 text-black" style={{ 
                fontFamily: 'serif', 
                lineHeight: '0.9',
                fontWeight: '300',
                marginBottom: '3rem'
              }}>
                About Us
              </h1>
              
              <div className="max-w-lg space-y-8">
                <p className="text-2xl leading-relaxed text-black" style={{ 
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  lineHeight: '1.8',
                  fontWeight: '400'
                }}>
                  AAIC est un groupe à caractère familial fondé en 2025. Il développe ses activités à travers deux holdings principales, AAA-ROBBIN JAMES HOLDINGS COMPANY, qui accompagne la croissance et l'expansion internationale de ses groupes dans le monde entier, et AID HOLDINGS, orientée vers le développement de ses groupes avec un ancrage stratégique au Moyen-Orient et en Afrique.
                </p>
                
                <p className="text-2xl leading-relaxed text-black" style={{ 
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  lineHeight: '1.8',
                  fontWeight: '400'
                }}>
                  À travers ces deux holdings, AAIC Group s'impose comme un acteur stratégique, animé par la volonté de bâtir un groupe solide, international et durable, contribuant activement à la croissance économique mondiale tout en renforçant son rôle au Moyen-Orient et en Afrique.
                </p>
                
                {/* Bouton Explore More - Style Ultima Capital */}
                <motion.div
                  className="mt-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <button 
                    className="bg-black text-white px-8 py-3 text-sm font-light tracking-wider hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                    style={{ 
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      letterSpacing: '0.1em'
                    }}
                    onClick={() => navigate('/notre-groupe')}
                  >
                    Découvrez nos holdings
                  </button>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Colonne de droite vide */}
            <div className="col-span-6"></div>
          </div>
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
              Découvrez nos holdings, Explorez nos groupes et leurs filiales
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
              Explorez nos groupes et leurs filiales
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

      {/* AAIC Group Overview - Style Ultima */}
      <section className="py-24 bg-white">
        <div className="container max-w-7xl mx-auto">
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Image à gauche */}
            <motion.div
              className="relative aspect-[4/3] overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="/images/aaiccard.jpeg"
                alt="AAIC - Groupe familial international"
                className="object-cover w-full h-full"
              />
            </motion.div>
            
            {/* Contenu à droite */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-lg font-light text-gray-700 leading-relaxed">
                AAIC est un groupe à caractère familiale, détenu par AAA–ROBBIN JAMES HOLDINGS COMPANY et AID HOLDINGS. Héritier d'une tradition entrepreneuriale solide, le groupe s'appuie sur une vision long terme et une gouvernance responsable, alliant héritage familial et envergure internationale.
              </p>
              
              <p className="text-lg font-light text-gray-700 leading-relaxed">
                Portée par AAA–ROBBIN JAMES HOLDINGS COMPANY, AAIC déploie ses activités à travers le monde, consolidant sa présence sur des marchés stratégiques et diversifiés. En parallèle, AID Holdings se distingue par son rôle moteur au Moyen-Orient et en Afrique, où il développe des initiatives majeures et contribue activement au dynamisme économique de ces régions.
              </p>
              
              <p className="text-lg font-light text-gray-700 leading-relaxed">
                AAIC se définit ainsi comme une plateforme familiale mondiale, capable de conjuguer stabilité, discrétion et innovation, tout en offrant à ses partenaires et investisseurs des solutions exclusives et durables.
              </p>
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
                src="/images/dubai.jpeg"
                alt="Dubaï - Nos activités internationales et développement au Moyen-Orient"
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