import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hero } from '../components/blocks/Hero';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { Card } from '../components/ui/Card';
import { Tag } from '../components/ui/Tag';
import { companies } from '../data/companies';
import { sectors } from '../data/sectors';

const breadcrumbItems = [
  { label: 'Portefeuille', href: '/portefeuille' }
];

export const Portfolio = () => {
  const [selectedSector, setSelectedSector] = useState<string | null>(null);

  const filteredCompanies = selectedSector
    ? companies.filter(company => company.sectorId === selectedSector)
    : companies;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <>
      <Hero
        title="Notre portefeuille"
        subtitle="Découvrez nos participations stratégiques dans des entreprises leaders de leur secteur."
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&h=1080&fit=crop"
      />

      <div className="container py-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <section className="py-16">
        <div className="container">
          <div className="flex flex-wrap gap-4 mb-12">
            <Tag
              variant="filter"
              isActive={!selectedSector}
              onClick={() => setSelectedSector(null)}
            >
              Tous les secteurs
            </Tag>
            {sectors.map((sector) => (
              <Tag
                key={sector.id}
                variant="filter"
                isActive={selectedSector === sector.id}
                onClick={() => setSelectedSector(sector.id)}
              >
                {sector.name}
              </Tag>
            ))}
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence mode="wait">
              {filteredCompanies.map((company) => (
                <motion.div
                  key={company.id}
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Card
                    title={company.name}
                    description={company.description}
                    imageUrl={company.image}
                    imageAlt={company.name}
                    href={`/portefeuille/${company.id}`}
                    tags={[
                      sectors.find(s => s.id === company.sectorId)?.name || '',
                      company.location,
                      ...company.stats.map(stat => `${stat.label}: ${stat.value}`)
                    ]}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredCompanies.length === 0 && (
            <div className="text-center py-12 text-muted">
              Aucune entreprise trouvée pour ce secteur.
            </div>
          )}
        </div>
      </section>
    </>
  );
}; 