import { HTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'horizontal';
  imageUrl?: string;
  imageAlt?: string;
  title: string;
  description?: string;
  tags?: string[];
  href?: string;
  isExternal?: boolean;
}

export const Card = ({
  variant = 'default',
  imageUrl,
  imageAlt,
  title,
  description,
  tags,
  href,
  isExternal = false,
  className = '',
  ...props
}: CardProps) => {
  const Content = () => (
    <>
      {imageUrl && (
        <div className="relative overflow-hidden rounded-sm aspect-[16/9]">
          <img
            src={imageUrl}
            alt={imageAlt || title}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      )}
      <div className="space-y-4 pt-6">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs font-medium uppercase tracking-wider text-muted bg-surface px-3 py-1 rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <h3 className="text-xl font-serif">{title}</h3>
        {description && (
          <p className="text-muted text-sm leading-relaxed">{description}</p>
        )}
      </div>
    </>
  );

  const containerStyles = `
    group relative bg-transparent transition-all duration-320
    ${variant === 'horizontal' ? 'grid grid-cols-1 md:grid-cols-2 gap-8' : ''}
    ${className}
  `;

  if (href) {
    const LinkComponent = isExternal ? 'a' : Link;
    const externalProps = isExternal
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {};

    return (
      <motion.div
        whileHover={{ y: -4 }}
        className={containerStyles}
        {...props}
      >
        <LinkComponent
          to={!isExternal ? href : undefined}
          href={isExternal ? href : undefined}
          className="block"
          {...externalProps}
        >
          <Content />
        </LinkComponent>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={containerStyles}
      {...props}
    >
      <Content />
    </motion.div>
  );
}; 