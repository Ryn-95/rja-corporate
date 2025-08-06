import { forwardRef } from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { motion } from 'framer-motion';

interface LinkProps extends RouterLinkProps {
  variant?: 'default' | 'underline' | 'nav';
  isExternal?: boolean;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    { variant = 'default', isExternal = false, className = '', children, ...props },
    ref
  ) => {
    const baseStyles = 'inline-flex items-center transition-colors duration-180';

    const variants = {
      default: 'text-text hover:text-accent',
      underline: 'link-underline',
      nav: 'text-muted hover:text-text',
    };

    const Component = isExternal ? 'a' : RouterLink;
    const externalProps = isExternal
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {};

    return (
      <motion.div
        whileHover={{ scale: variant === 'underline' ? 1.02 : 1 }}
        className="inline-block"
      >
        <Component
          ref={ref}
          className={`${baseStyles} ${variants[variant]} ${className}`}
          {...externalProps}
          {...props}
        >
          {children}
        </Component>
      </motion.div>
    );
  }
); 