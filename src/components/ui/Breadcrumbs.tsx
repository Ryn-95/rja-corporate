import { Link, useLocation } from 'react-router-dom';
import { Fragment } from 'react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs = ({ items, className = '' }: BreadcrumbsProps) => {
  const location = useLocation();

  // Génération du schéma JSON-LD pour les breadcrumbs
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@id': `https://rja.com${item.href}`,
        'name': item.label
      }
    }))
  };

  return (
    <>
      <nav
        className={`flex items-center space-x-3 text-sm ${className}`}
        aria-label="Fil d'Ariane"
      >
        <Link
          to="/"
          className="text-muted hover:text-text transition-colors duration-180"
        >
          Accueil
        </Link>

        {items.map((item, index) => (
          <Fragment key={item.href}>
            <svg
              className="w-4 h-4 text-muted"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>

            {index === items.length - 1 ? (
              <span className="text-text" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link
                to={item.href}
                className="text-muted hover:text-text transition-colors duration-180"
              >
                {item.label}
              </Link>
            )}
          </Fragment>
        ))}
      </nav>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}; 