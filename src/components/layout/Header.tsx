import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const mainMenu = [
  { id: 'notre-groupe', label: 'NOTRE GROUPE' },
  { id: 'histoire', label: 'HISTOIRE' },
  { id: 'gouvernance', label: 'GOUVERNANCE' },
  { id: 'robbin-james-holdings', label: 'ROBBIN JAMES HOLDINGS COMPANY' },
  { id: 'aid-holdings', label: 'AID HOLDINGS' },
  { id: 'impact', label: 'IMPACT' },
  { id: 'notre-futur', label: 'NOTRE FUTUR' },
  { id: 'contact', label: 'CONTACT' }
];

const secondaryMenu = [
  { id: 'robbin-james-holdings', label: 'ROBBIN JAMES HOLDINGS', hasArrow: true, featured: true },
  { id: 'aid-holdings', label: 'AID HOLDINGS', hasArrow: true, featured: true }
];

const utilityMenu = [
  { id: 'ad-hoc-disclosures', label: 'Ad Hoc Disclosures' },
  { id: 'investors-relations', label: 'Investors Relations' },
  { id: 'governance', label: 'Governance' }
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const menuRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  // Détection mobile optimisée
  useEffect(() => {
    const checkIsMobile = () => {
      const isMobileDevice = window.innerWidth < 768;
      setIsMobile(isMobileDevice);
      
      // Optimisation pour mobile: désactive certaines animations
      if (isMobileDevice && activeSubmenu) {
        setActiveSubmenu(null);
      }
    };
    
    checkIsMobile();
    
    // Debounce du resize pour les performances
    let timeoutId: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkIsMobile, 150);
    };
    
    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, [activeSubmenu]);

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveSubmenu(null);
  }, [location]);
  
  // Fermeture automatique sur changement d'orientation mobile
  useEffect(() => {
    const handleOrientationChange = () => {
      if (isMobile && isMenuOpen) {
        setTimeout(() => {
          setIsMenuOpen(false);
        }, 100);
      }
    };
    
    window.addEventListener('orientationchange', handleOrientationChange);
    return () => window.removeEventListener('orientationchange', handleOrientationChange);
  }, [isMobile, isMenuOpen]);

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

  // Ferme le menu si on clique en dehors ou avec Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  // Animation variants optimisées avec useMemo
  const menuItemVariants = useMemo(() => ({
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -20, y: shouldReduceMotion ? -10 : 0 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: shouldReduceMotion ? { duration: 0.1 } : {
        delay: isMenuOpen ? i * 0.03 : 0, // Délai encore plus réduit
        duration: 0.25,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }),
    exit: { 
      opacity: 0, 
      x: shouldReduceMotion ? 0 : -20,
      y: shouldReduceMotion ? -10 : 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.15
      }
    }
  }), [isMenuOpen, shouldReduceMotion]);
  
  // Variants pour le panel principal
  const panelVariants = useMemo(() => ({
    hidden: isMobile 
      ? { y: shouldReduceMotion ? 0 : '100%', opacity: shouldReduceMotion ? 0 : 1 }
      : { x: shouldReduceMotion ? 0 : -440, opacity: 0 },
    visible: { 
      y: 0, 
      x: 0, 
      opacity: 1,
      transition: shouldReduceMotion ? { duration: 0.2 } : { 
        duration: 0.35, 
        ease: [0.215, 0.61, 0.355, 1] 
      }
    },
    exit: isMobile 
      ? { y: shouldReduceMotion ? 0 : '100%', opacity: shouldReduceMotion ? 0 : 1 }
      : { x: shouldReduceMotion ? 0 : -440, opacity: 0 },
  }), [isMobile, shouldReduceMotion]);

  // Optimisation avec useCallback pour éviter les re-renders
  const handleMenuItemHover = useCallback((id: string) => {
    // Désactive le hover sur mobile pour éviter les bugs
    if (isMobile || shouldReduceMotion) return;
    
    const menuItem = mainMenu.find(item => item.id === id);
    if (menuItem?.submenu) {
      setActiveSubmenu(prev => prev === id ? null : id);
    } else {
      setActiveSubmenu(null);
    }
  }, [isMobile, shouldReduceMotion]);
  
  const handleMenuItemClick = useCallback((id: string) => {
    const menuItem = mainMenu.find(item => item.id === id);
    if (menuItem?.submenu) {
      setActiveSubmenu(prev => prev === id ? null : id);
    } else {
      // Navigation vers la page
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 500);
    }
  }, []);
  
  const handleMenuOpen = useCallback(() => {
    setIsMenuOpen(true);
    setSearchQuery('');
    // Focus sur la recherche après l'ouverture
    setTimeout(() => {
      searchInputRef.current?.focus();
    }, 400);
  }, []);
  
  const handleMenuClose = useCallback(() => {
    setIsMenuOpen(false);
    setActiveSubmenu(null);
    setSearchQuery('');
  }, []);

  return (
    <>
      {/* Menu Button amélioré avec loading state */}
      <motion.button
        onClick={handleMenuOpen}
        disabled={isLoading}
        className={`fixed top-4 left-4 md:top-6 md:left-6 z-50 w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-white/95 backdrop-blur-[12px] flex items-center justify-center rounded-sm hover:bg-white shadow-lg border border-white/20 transition-all duration-200 ${
          isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-xl'
        }`}
        whileHover={!isLoading && !shouldReduceMotion ? { scale: 1.02, y: -1 } : {}}
        whileTap={!isLoading && !shouldReduceMotion ? { scale: 0.98 } : {}}
        transition={{ duration: shouldReduceMotion ? 0.1 : 0.2 }}
        aria-label="Ouvrir le menu de navigation"
        aria-expanded={isMenuOpen}
      >
        {isLoading ? (
          <motion.div
            className="w-5 h-5"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          </motion.div>
        ) : (
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
                  opacity: index === 1 ? 0 : 1
                } : {
                  rotate: 0,
                  y: (index - 1) * 6,
                  width: "20px",
                  opacity: 1
                }}
                transition={{ 
                  duration: shouldReduceMotion ? 0.1 : 0.25, 
                  ease: [0.215, 0.61, 0.355, 1] 
                }}
              />
            ))}
          </motion.div>
        )}
      </motion.button>

      {/* Mega Menu avec meilleur positionnement et style */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay avec gradient progressif */}
            <motion.div
              className="fixed inset-0 z-40 bg-gradient-to-br from-black/50 via-black/30 to-black/60 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.1 : 0.25, ease: "easeInOut" }}
              onClick={handleMenuClose}
            />

            {/* Menu Panel optimisé */}
            <motion.div 
              ref={menuRef}
              className={`fixed z-50 bg-white shadow-2xl overflow-hidden border border-gray-100 ${
                isMobile 
                  ? 'inset-0 rounded-none' 
                  : 'top-4 left-4 bottom-4 md:top-6 md:left-6 md:bottom-6 w-[90vw] max-w-[420px] rounded-lg'
              }`}
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              style={{
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
              }}
            >
              {/* Menu Header avec recherche intégrée */}
              <div className="h-[50px] md:h-[60px] flex items-center justify-between px-4 md:px-8 border-b border-gray-100 bg-gray-50/50">
                <motion.button
                  onClick={handleMenuClose}
                  className="flex items-center space-x-2 md:space-x-3 group"
                  whileHover={{ opacity: 0.7 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  aria-label="Fermer le menu"
                >
                  <div className="relative w-6 h-6">
                    <span className="absolute top-1/2 left-0 w-6 h-[1px] bg-current rotate-45 transform-gpu transition-transform group-hover:rotate-[135deg]"></span>
                    <span className="absolute top-1/2 left-0 w-6 h-[1px] bg-current -rotate-45 transform-gpu transition-transform group-hover:-rotate-[135deg]"></span>
                  </div>
                  <span className="text-[12px] md:text-[14px] uppercase tracking-wider font-medium">Fermer</span>
                </motion.button>

                {/* Search Input */}
                <div className="flex items-center space-x-2">
                  <motion.input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Rechercher..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-24 md:w-32 px-2 py-1 text-sm border border-gray-200 rounded focus:outline-none focus:border-gray-400 transition-all"
                    whileFocus={{ scale: 1.02 }}
                  />
                  <motion.button
                    className="w-6 h-6 text-gray-600 hover:text-gray-900"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </motion.button>
                </div>
              </div>

              {/* Menu Content avec scroll optimisé */}
              <div className="h-[calc(100%-50px)] md:h-[calc(100%-60px)] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400">
                <div className="p-4 md:p-8 space-y-1">
                  <nav className="space-y-8">
                    {/* Main Menu avec espacements compacts */}
                    <div className="space-y-2">
                      {mainMenu.map((item, i) => (
                        <motion.div
                          key={item.id}
                          custom={i}
                          variants={menuItemVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          <Link
                            to={`/${item.id}`}
                            className="relative text-[14px] md:text-[16px] font-display tracking-wide group w-full text-left py-1 px-2 rounded-md hover:bg-gray-50 transition-colors duration-200 block"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <span className="relative z-10 inline-block">{item.label}</span>
                            <AnimatePresence>
                              {item.submenu && activeSubmenu === item.id && (
                                <motion.div
                                  className="absolute -left-4 md:-left-8 right-0 top-full pt-4 pb-6 px-4 md:px-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg shadow-lg border border-gray-200"
                                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -10, scale: shouldReduceMotion ? 1 : 0.95 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -10, scale: shouldReduceMotion ? 1 : 0.95 }}
                                  transition={{ duration: shouldReduceMotion ? 0.1 : 0.25, ease: "easeOut" }}
                                >
                                {item.submenu.map((subitem, subIndex) => (
                                  <motion.button
                                    key={subitem.id}
                                    className="block w-full text-left text-[14px] md:text-[16px] py-2 md:py-3 px-3 rounded-md hover:bg-white hover:shadow-sm transition-all duration-200 group"
                                    whileHover={!isMobile && !shouldReduceMotion ? { x: 6 } : {}}
                                    whileTap={!shouldReduceMotion ? { scale: 0.98 } : {}}
                                    transition={{ duration: shouldReduceMotion ? 0.1 : 0.2 }}
                                    initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: subIndex * 0.05, duration: shouldReduceMotion ? 0.1 : 0.15 }}
                                  >
                                    <span className="group-hover:text-blue-600 transition-colors duration-200">
                                      {subitem.label}
                                    </span>
                                  </motion.button>
                                ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </Link>
                        </motion.div>
                      ))}
                    </div>

                    {/* Secondary Menu avec design amélioré */}
                    <div className="space-y-4 pt-8 border-t border-gray-200">
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
                            className="group inline-flex items-center space-x-2 md:space-x-3 text-[12px] md:text-[14px] tracking-wide w-full py-3 px-4 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 border border-blue-100 transition-all duration-300"
                            whileHover={!isMobile && !shouldReduceMotion ? { x: 4, scale: 1.02 } : {}}
                            whileTap={!shouldReduceMotion ? { scale: 0.98 } : {}}
                            transition={{ duration: shouldReduceMotion ? 0.1 : 0.2 }}
                          >
                            <span>{item.label}</span>
                            {item.hasArrow && (
                              <motion.svg
                                className="w-4 h-4 flex-shrink-0 text-blue-600"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                initial={false}
                                animate={item.featured && !shouldReduceMotion ? { x: [0, 6, 0] } : {}}
                                transition={{ duration: shouldReduceMotion ? 0 : 2, repeat: shouldReduceMotion ? 0 : Infinity, ease: "easeInOut" }}
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                              </motion.svg>
                            )}
                          </motion.button>
                        </motion.div>
                      ))}
                    </div>

                    {/* Utility Menu avec design compact */}
                    <div className="space-y-3 pt-8 border-t border-gray-200">
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
                            className="text-[11px] md:text-[13px] uppercase tracking-wider w-full text-left py-2 px-3 rounded-md hover:bg-gray-100 text-gray-600 hover:text-gray-900 transition-all duration-200"
                            whileHover={!isMobile && !shouldReduceMotion ? { x: 4 } : {}}
                            whileTap={!shouldReduceMotion ? { scale: 0.98 } : {}}
                            transition={{ duration: shouldReduceMotion ? 0.1 : 0.2 }}
                          >
                            {item.label}
                          </motion.button>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Footer du menu avec informations */}
                    <div className="pt-8 mt-8 border-t border-gray-200">
                      <motion.div
                        className="text-center space-y-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.4 }}
                      >
                        <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                          RJA Corporate
                        </div>
                        <div className="text-xs text-gray-400">
                          Excellence & Innovation depuis 2019
                        </div>
                        <div className="flex justify-center space-x-4 pt-2">
                          {['FR', 'EN', 'AR'].map((lang) => (
                            <motion.button
                              key={lang}
                              className="text-xs px-2 py-1 rounded border border-gray-200 hover:bg-gray-50 transition-colors"
                              whileHover={!shouldReduceMotion ? { scale: 1.05 } : {}}
                              whileTap={!shouldReduceMotion ? { scale: 0.95 } : {}}
                            >
                              {lang}
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>
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