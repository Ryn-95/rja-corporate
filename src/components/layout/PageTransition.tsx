import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.33, 1, 0.68, 1],
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.4,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

export const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <motion.main
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      className="min-h-screen pt-24 md:pt-32"
    >
      {children}
    </motion.main>
  );
}; 