import { HTMLAttributes } from 'react';
import { motion } from 'framer-motion';

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'filter' | 'pill';
  isActive?: boolean;
  onClick?: () => void;
}

export const Tag = ({
  variant = 'default',
  isActive = false,
  className = '',
  children,
  onClick,
  ...props
}: TagProps) => {
  const baseStyles = 'inline-flex items-center text-xs font-medium uppercase tracking-wider transition-all duration-180';

  const variants = {
    default: 'bg-surface px-3 py-1 rounded-sm',
    filter: `px-4 py-2 rounded-full cursor-pointer ${
      isActive
        ? 'bg-accent text-bg'
        : 'bg-surface text-muted hover:text-text'
    }`,
    pill: 'bg-accent/10 text-accent px-3 py-1 rounded-full',
  };

  const Component = onClick ? motion.button : motion.span;

  return (
    <Component
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      whileHover={onClick ? { scale: 1.02 } : {}}
      whileTap={onClick ? { scale: 0.98 } : {}}
      {...props}
    >
      {children}
    </Component>
  );
}; 