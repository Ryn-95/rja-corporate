import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { Tag } from '../components/ui/Tag';
import { companies } from '../data/companies';
import { sectors } from '../data/sectors';

export const CompanyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const company = companies.find(c => c.id === id);
  const sector = sectors.find(s => s.id === company?.sectorId);

  if (!company) {
    return (
      <div className="container py-24 text-center">
        <h1 className="font-serif text-4xl mb-4">Entreprise non trouvée</h1>
        <p className="text-muted">L'entreprise que vous recherchez n'existe pas.</p>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: 'Portefeuille', href: '/portefeuille' },
    { label: company.name, href: `/portefeuille/${company.id}` }
  ];

  return (
    <>
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={company.image}
            alt={company.name}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-bg/60 backdrop-blur-sm" />
        </div>

        <div className="relative h-full">
          <div className="container h-full flex flex-col justify-end pb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="h-12"
                />
                <Tag variant="pill">{sector?.name}</Tag>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl mb-4">
                {company.name}
              </h1>
              <p className="text-xl text-muted max-w-3xl">
                {company.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl mb-6">Présentation</h2>
              <div className="prose text-muted">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-serif text-3xl mb-6">Chiffres clés</h2>
              <div className="grid grid-cols-2 gap-8">
                {company.stats.map((stat, index) => (
                  <div key={index} className="space-y-2">
                    <div className="font-serif text-3xl text-accent">
                      {stat.value}
                    </div>
                    <div className="text-sm uppercase tracking-wider text-muted">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="container">
          <h2 className="font-serif text-3xl mb-12 text-center">
            Galerie
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="aspect-[4/3] overflow-hidden rounded-sm"
              >
                <img
                  src={company.image}
                  alt={`${company.name} - Image ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}; 