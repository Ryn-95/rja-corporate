import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

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
    value: '14 ans',
    subtext: 'Depuis 2010'
  },
  location: {
    label: 'Siège Social',
    value: 'PARIS',
    subtext: 'France'
  },
  portfolio: {
    label: 'Portefeuille',
    value: '3.5B€',
    subtext: 'Actifs sous gestion'
  },
  projects: {
    label: 'Projets',
    value: '25+',
    subtext: 'Réalisations majeures'
  }
};

function App() {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-screen">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2070&h=1200&fit=crop"
              alt="Robbin James Agoh - Visionnaire de l'investissement"
              className="object-cover w-full h-full"
              style={{ y: parallaxY }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
          </motion.div>

          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-8">
              <div className="max-w-5xl">
                <motion.div
                  className="mb-6 text-white/80"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="text-xl font-light tracking-wider">Bienvenue dans l'univers de</span>
                </motion.div>

                <motion.h1
                  className="text-7xl md:text-8xl font-serif text-white mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Robbin James Agoh
                </motion.h1>

                <motion.p
                  className="text-2xl md:text-3xl text-white/90 font-light max-w-3xl leading-relaxed mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  Visionnaire de l'investissement et entrepreneur passionné, façonnant l'avenir à travers des projets innovants et durables qui transforment les industries.
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <button className="px-8 py-4 bg-white text-black hover:bg-white/90 transition-colors duration-200">
                    Découvrir notre vision
                  </button>
                  <button className="px-8 py-4 border border-white text-white hover:bg-white/10 transition-colors duration-200">
                    Nos projets phares
                  </button>
                </motion.div>
              </div>
            </div>
          </div>

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
                Sous la direction de Robbin James Agoh, RJA Group s'est imposé comme un acteur majeur de l'investissement stratégique, avec une approche unique combinant innovation, durabilité et excellence.
              </p>
              <p className="text-2xl leading-relaxed mb-8">
                Notre philosophie d'investissement repose sur l'identification et le développement d'opportunités exceptionnelles dans des secteurs clés : technologie, immobilier premium, énergies renouvelables et services innovants.
              </p>
              <p className="text-2xl leading-relaxed">
                Chaque projet est sélectionné pour son potentiel de création de valeur à long terme et son impact positif sur la société.
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
                  title: 'RJA Tech Hub',
                  description: 'Centre d\'innovation technologique regroupant les startups les plus prometteuses dans le domaine de l\'IA et de la blockchain',
                  image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&h=800&fit=crop'
                },
                {
                  title: 'Green Energy Initiative',
                  description: 'Projet d\'infrastructure majeur dans les énergies renouvelables, leader dans la transition énergétique',
                  image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&h=800&fit=crop'
                },
                {
                  title: 'Luxury Residences Collection',
                  description: 'Portfolio d\'actifs immobiliers d\'exception dans les emplacements les plus prestigieux d\'Europe',
                  image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&h=800&fit=crop'
                },
                {
                  title: 'RJA Innovation Lab',
                  description: 'Incubateur de projets innovants, accompagnant les entrepreneurs de demain',
                  image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&h=800&fit=crop'
                }
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
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

        {/* Investment Philosophy */}
        <section className="py-32">
          <div className="container">
            <div className="grid grid-cols-2 gap-16 items-center">
              <motion.div
                className="relative aspect-square overflow-hidden"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&h=1200&fit=crop"
                  alt="Robbin James Agoh - Investment Philosophy"
                  className="object-cover w-full h-full"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-title mb-12">Notre Philosophie d'Investissement</h2>
                <p className="text-xl leading-relaxed mb-8">
                  "L'investissement n'est pas seulement une question de rendement financier, c'est avant tout une vision à long terme et un engagement envers l'excellence et l'innovation." - Robbin James Agoh
                </p>
                <p className="text-xl leading-relaxed mb-8">
                  Notre approche unique combine une analyse approfondie des opportunités de marché avec une vision stratégique claire et une exécution rigoureuse.
                </p>
                <p className="text-xl leading-relaxed">
                  Chaque investissement est soigneusement sélectionné pour son potentiel de croissance, son impact positif et sa capacité à générer une valeur durable pour toutes les parties prenantes.
                </p>
              </motion.div>
            </div>
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
      </main>

      <Footer />
      </div>
  );
}

export default App;
