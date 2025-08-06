import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const mainMenu = [
  { id: 'notre-groupe', label: 'NOTRE GROUPE', submenu: [
    { id: 'vision', label: 'Vision & Stratégie' },
    { id: 'gouvernance', label: 'Gouvernance' },
    { id: 'histoire', label: 'Notre Histoire' },
    { id: 'equipe', label: 'Notre Équipe' }
  ]},
  { id: 'nos-engagements', label: 'NOS ENGAGEMENTS', submenu: [
    { id: 'innovation', label: 'Innovation Durable' },
    { id: 'impact', label: 'Impact Social' },
    { id: 'environnement', label: 'Environnement' }
  ]},
  { id: 'nos-maisons', label: 'NOS MAISONS', submenu: [
    { id: 'tech', label: 'Technologies' },
    { id: 'real-estate', label: 'Immobilier Premium' },
    { id: 'hospitality', label: 'Hospitalité' }
  ]},
  { id: 'nous-rejoindre', label: 'NOUS REJOINDRE' },
  { id: 'dream-machine', label: 'DREAM MACHINE' }
];

const secondaryMenu = [
  { id: 'expo-osaka', label: 'EXPOSITION OSAKA 2025', hasArrow: true, featured: true },
  { id: 'formule1', label: 'RJA x FORMULE 1®', hasArrow: true, featured: true }
];

const utilityMenu = [
  { id: 'actionnaires', label: 'ACTIONNAIRES' },
  { id: 'presse', label: 'PRESSE' },
  { id: 'startups', label: 'STARTUPS & PARTENAIRES TECH' },
  { id: 'fournisseurs', label: 'FOURNISSEURS' },
  { id: 'espace-candidat', label: 'ESPACE CANDIDAT' }
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveSubmenu(null);
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setActiveSubmenu(null);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Ferme le menu si on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Animation variants pour les éléments du menu
  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }),
    exit: { opacity: 0, x: -20 }
  };

  const handleMenuItemHover = (id: string) => {
    const menuItem = mainMenu.find(item => item.id === id);
    if (menuItem?.submenu) {
      setActiveSubmenu(id);
    } else {
      setActiveSubmenu(null);
    }
  };

  return (
    <>
      {/* Menu Button avec meilleur positionnement et style */}
      <motion.button
        onClick={() => setIsMenuOpen(true)}
        className="fixed top-6 left-6 z-50 w-[60px] h-[60px] bg-white/90 backdrop-blur-[8px] flex items-center justify-center rounded-sm hover:bg-white"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="w-6 h-6 flex flex-col justify-center items-center gap-[6px]"
          initial={false}
        >
          {[0, 1, 2].map((index) => (
            <motion.span
              key={index}
              className="w-5 h-[1px] bg-current block transform-gpu origin-center"
              initial={false}
              animate={isMenuOpen ? {
                rotate: index === 1 ? 0 : index === 0 ? 45 : -45,
                y: index === 1 ? 0 : index === 0 ? 3.5 : -3.5,
                width: index === 1 ? "0px" : "20px",
              } : {
                rotate: 0,
                y: (index - 1) * 6,
                width: "20px",
              }}
              transition={{ duration: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
            />
          ))}
        </motion.div>
      </motion.button>

      {/* Mega Menu avec meilleur positionnement et style */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay amélioré */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel avec meilleur positionnement */}
            <motion.div 
              ref={menuRef}
              className="fixed top-6 left-6 bottom-6 z-50 w-[420px] bg-white shadow-2xl rounded-sm overflow-hidden"
              initial={{ x: -440, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -440, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
            >
              {/* Menu Header amélioré */}
              <div className="h-[60px] flex items-center justify-between px-8 border-b border-[#E5E5E5]">
                <motion.button
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-3"
                  whileHover={{ opacity: 0.7 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative w-6 h-6">
                    <span className="absolute top-1/2 left-0 w-6 h-[1px] bg-current rotate-45 transform-gpu"></span>
                    <span className="absolute top-1/2 left-0 w-6 h-[1px] bg-current -rotate-45 transform-gpu"></span>
                  </div>
                  <span className="text-[14px] uppercase tracking-wider">Fermer</span>
                </motion.button>

                {/* Search Icon */}
                <motion.button
                  className="w-6 h-6"
                  whileHover={{ opacity: 0.7 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </motion.button>
              </div>

              {/* Menu Content avec meilleur scroll */}
              <div className="h-[calc(100%-60px)] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
                <div className="p-8">
                  <nav className="space-y-8">
                    {/* Main Menu avec meilleurs espacements */}
                    <div className="space-y-6">
                      {mainMenu.map((item, i) => (
                        <motion.div
                          key={item.id}
                          custom={i}
                          variants={menuItemVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          <motion.button
                            className="relative text-[24px] font-display tracking-wide group w-full text-left"
                            onHoverStart={() => handleMenuItemHover(item.id)}
                            onHoverEnd={() => setActiveSubmenu(null)}
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                          >
                            <span className="relative z-10 inline-block">{item.label}</span>
                            {item.submenu && (
                              <motion.span
                                className="inline-block ml-2 opacity-0 group-hover:opacity-100"
                                initial={false}
                                transition={{ duration: 0.2 }}
                              >
                                <svg className="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                                </svg>
                              </motion.span>
                            )}
                            {item.submenu && activeSubmenu === item.id && (
                              <motion.div
                                className="absolute -left-8 right-0 top-full pt-4 pb-6 px-8 bg-[#F8F8F8]"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                {item.submenu.map((subitem) => (
                                  <motion.button
                                    key={subitem.id}
                                    className="block w-full text-left text-[16px] py-3 hover:opacity-70 transition-opacity duration-250"
                                    whileHover={{ x: 4 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    {subitem.label}
                                  </motion.button>
                                ))}
                              </motion.div>
                            )}
                          </motion.button>
                        </motion.div>
                      ))}
                    </div>

                    {/* Secondary Menu avec meilleurs espacements */}
                    <div className="space-y-5 pt-8 border-t border-[#E5E5E5]">
                      {secondaryMenu.map((item, i) => (
                        <motion.div
                          key={item.id}
                          custom={i + mainMenu.length}
                          variants={menuItemVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          <motion.button
                            className="group inline-flex items-center space-x-3 text-[14px] tracking-wide w-full"
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                          >
                            <span>{item.label}</span>
                            {item.hasArrow && (
                              <motion.svg
                                className="w-4 h-4 flex-shrink-0"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                initial={false}
                                animate={item.featured ? { x: [0, 4, 0] } : {}}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
                              </motion.svg>
                            )}
                          </motion.button>
                        </motion.div>
                      ))}
                    </div>

                    {/* Utility Menu avec meilleurs espacements */}
                    <div className="space-y-4 pt-8 border-t border-[#E5E5E5]">
                      {utilityMenu.map((item, i) => (
                        <motion.div
                          key={item.id}
                          custom={i + mainMenu.length + secondaryMenu.length}
                          variants={menuItemVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          <motion.button
                            className="text-[13px] uppercase tracking-wider w-full text-left"
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.label}
                          </motion.button>
                        </motion.div>
                      ))}
                    </div>
                  </nav>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}; 