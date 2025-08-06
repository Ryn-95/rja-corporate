import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

interface MegaMenuItem {
  id: string;
  title: string;
  description?: string;
  href: string;
  image?: string;
}

interface MegaMenuSection {
  title: string;
  items: MegaMenuItem[];
}

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  sections: MegaMenuSection[];
  featuredItems?: MegaMenuItem[];
}

const menuItems = {
  notreGroupe: {
    sections: [
      {
        title: "À Propos",
        items: [
          {
            id: "vision",
            title: "Vision & Mission",
            description: "Notre vision pour l'avenir de l'investissement",
            href: "/notre-groupe/vision",
            image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf"
          },
          {
            id: "histoire",
            title: "Notre Histoire",
            description: "Le parcours de Robbin James Agoh",
            href: "/notre-groupe/histoire",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
          },
          {
            id: "equipe",
            title: "L'Équipe",
            description: "Les talents qui font RJA",
            href: "/notre-groupe/equipe",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c"
          }
        ]
      },
      {
        title: "Expertise",
        items: [
          {
            id: "approche",
            title: "Notre Approche",
            description: "Méthodologie d'investissement unique",
            href: "/notre-groupe/approche"
          },
          {
            id: "innovation",
            title: "Innovation",
            description: "À la pointe de la technologie",
            href: "/notre-groupe/innovation"
          }
        ]
      }
    ],
    featured: [
      {
        id: "rapport",
        title: "Rapport d'Impact 2024",
        description: "Découvrez notre impact sur l'économie et la société",
        href: "/publications/rapport-2024",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf"
      }
    ]
  },
  investissements: {
    sections: [
      {
        title: "Secteurs",
        items: [
          {
            id: "tech",
            title: "Technologie",
            description: "IA, Blockchain, Cloud Computing",
            href: "/investissements/tech"
          },
          {
            id: "energie",
            title: "Énergie Verte",
            description: "Solutions énergétiques durables",
            href: "/investissements/energie"
          },
          {
            id: "immobilier",
            title: "Immobilier Premium",
            description: "Actifs immobiliers d'exception",
            href: "/investissements/immobilier"
          }
        ]
      },
      {
        title: "Services",
        items: [
          {
            id: "conseil",
            title: "Conseil Stratégique",
            description: "Expertise en investissement",
            href: "/services/conseil"
          },
          {
            id: "gestion",
            title: "Gestion d'Actifs",
            description: "Solutions sur mesure",
            href: "/services/gestion"
          }
        ]
      }
    ]
  }
};

export const MegaMenu = ({ isOpen, onClose, sections, featuredItems }: MegaMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            className="fixed top-[120px] left-0 right-0 bg-white z-50 overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="container mx-auto py-16">
              <div className="grid grid-cols-12 gap-8">
                {/* Main Content */}
                <div className="col-span-8 grid grid-cols-2 gap-16">
                  {sections.map((section, index) => (
                    <div key={section.title}>
                      <motion.h3
                        className="text-lg font-medium mb-8 text-black/60"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {section.title}
                      </motion.h3>
                      <ul className="space-y-6">
                        {section.items.map((item, itemIndex) => (
                          <motion.li
                            key={item.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: (index * 0.1) + (itemIndex * 0.05) }}
                          >
                            <Link
                              to={item.href}
                              className="group block"
                              onClick={onClose}
                            >
                              <span className="block text-xl font-medium mb-2 text-black group-hover:text-accent transition-colors duration-200">
                                {item.title}
                              </span>
                              {item.description && (
                                <span className="block text-sm text-black/60 group-hover:text-black/80 transition-colors duration-200">
                                  {item.description}
                                </span>
                              )}
                            </Link>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Featured Content */}
                {featuredItems && (
                  <div className="col-span-4">
                    {featuredItems.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + (index * 0.1) }}
                      >
                        <Link
                          to={item.href}
                          className="group block"
                          onClick={onClose}
                        >
                          {item.image && (
                            <div className="relative aspect-[16/9] overflow-hidden mb-4">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-200" />
                            </div>
                          )}
                          <h4 className="text-xl font-medium mb-2 group-hover:text-accent transition-colors duration-200">
                            {item.title}
                          </h4>
                          {item.description && (
                            <p className="text-sm text-black/60">
                              {item.description}
                            </p>
                          )}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export { menuItems }; 