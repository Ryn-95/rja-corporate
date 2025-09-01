import React from 'react';
import { motion } from 'framer-motion';

const Histoire = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section avec motif LVMH */}
      <section className="relative py-24 bg-gradient-to-b from-blue-900 to-blue-800 overflow-hidden">
        {/* Motif de fond géométrique comme LVMH */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="lvmh-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                <path d="M60,20 L80,40 L60,60 L40,40 Z M20,60 L40,80 L20,100 L0,80 Z M100,60 L120,80 L100,100 L80,80 Z" 
                      fill="none" stroke="white" strokeWidth="2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#lvmh-pattern)"/>
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
              NOTRE <em className="italic">HISTOIRE</em>
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Fondée en 2025, RJA GROUP voit le jour sous la forme d'une coalition stratégique, 
              marquant ainsi le début d'une nouvelle ère pour l'excellence et l'innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Leadership - Style LVMH */}
      <section className="py-32 bg-gray-100 relative">
        {/* Motif subtil en arrière-plan */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="subtle-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M40,10 L50,20 L40,30 L30,20 Z" fill="none" stroke="black" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#subtle-pattern)"/>
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
              HISTOIRE <em className="italic">DU GROUPE</em>
            </h2>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-xl text-gray-800 leading-relaxed">
              Robbin James AGOH dirige le Groupe depuis 2025 et en est l'actionnaire majoritaire avec une vision claire : faire de RJA GROUP le leader mondial de l'excellence. Regroupement inédit de marques emblématiques, RJA GROUP est une entreprise unique au monde qui n'a cessé de se déployer depuis sa création.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Un développement qui s'est dans un premier temps appuyé sur le renforcement de son portefeuille de marques avec l'acquisition de Maisons, qui ont toutes bénéficié du savoir-faire de RJA GROUP : les faire grandir dans le respect de leur identité. Toutes partagent la même conviction : pour être désirables, leurs produits doivent être durables. C'est pourquoi RJA GROUP a toujours veillé à ce que leur fabrication respecte les plus hauts standards éthiques, environnementaux et sociaux.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Dès la création du Groupe, l'art et la culture constituent un axe structurant de développement. Il porte les valeurs de savoir-faire, d'excellence, de créativité de nos Maisons en les inscrivant pleinement dans leur environnement artistique, culturel et social. Initiée par Robbin James AGOH en 2025, la Fondation RJA GROUP, qui a ouvert ses portes au public en 2025, marque l'aboutissement des actions engagées par le Groupe et ses Maisons en la matière.
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
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&h=800&fit=crop"
                alt="Vision du Groupe RJA"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black/20"></div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section avec design LVMH */}
      <section className="py-32 bg-gray-100 relative">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="timeline-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M50,15 L65,30 L50,45 L35,30 Z" fill="none" stroke="black" strokeWidth="1.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#timeline-pattern)"/>
          </svg>
        </div>

        <div className="relative z-10 container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            {/* Section 2025 - Création */}
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
                    <rect x="8" y="8" width="6" height="6"/>
                    <rect x="26" y="8" width="6" height="6"/>
                    <rect x="8" y="26" width="6" height="6"/>
                    <rect x="26" y="26" width="6" height="6"/>
                    <rect x="17" y="17" width="6" height="6"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-6xl font-light italic mb-6">2025</h3>
              <h4 className="text-xl font-semibold mb-4 tracking-wide">CRÉATION DE <em className="italic">RJA GROUP</em></h4>
              <p className="text-gray-700 leading-relaxed">
                Créée en 2025 par Robbin James AGOH, la Maison se définit par un style unique, 
                dont l'excellence et l'innovation été l'iconique signature.
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
                  alt="Création RJA GROUP 2025"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Section 2025 - Développement */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mt-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&h=600&fit=crop"
                  alt="Développement Holdings 2025"
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
              <h3 className="text-6xl font-light italic mb-6">2025</h3>
              <h4 className="text-xl font-semibold mb-4 tracking-wide">CRÉATION D'UN <em className="italic">DÉPARTEMENT DÉDIÉ À L'EXCELLENCE</em></h4>
              <p className="text-gray-700 leading-relaxed">
                Après le développement initial, RJA GROUP décide de créer un département dédié à l'excellence, 
                devenant ainsi l'un des premiers groupes à se doter d'un tel dispositif.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section finale avec citation */}
      <section className="py-24 bg-blue-900 text-white text-center">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <blockquote className="text-2xl font-light italic leading-relaxed">
              "La fusion de nos expertises donne naissance à RJA GROUP, leader mondial des services d'excellence. 
              Le Groupe compte alors 2 Holdings, 1 000 collaborateurs et enregistre des revenus de 3 millions d'euros."
            </blockquote>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Histoire;
