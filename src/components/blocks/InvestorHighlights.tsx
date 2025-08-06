import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { financialHighlights, stockInfo, latestDocuments } from '../../data/investors';

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date);
};

export const InvestorHighlights = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column */}
          <div className="lg:col-span-8 space-y-16">
            {/* Financial Highlights */}
            <div>
              <h2 className="text-4xl font-serif mb-12">Chiffres Clés</h2>
              <div className="grid grid-cols-2 gap-8">
                {financialHighlights.map((highlight) => (
                  <motion.div
                    key={highlight.id}
                    className="bg-bg p-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-3xl font-serif text-accent mb-2">
                      {highlight.value}
                      {highlight.change && (
                        <span className={`text-base ml-2 ${highlight.trend === 'up' ? 'text-green-500' : highlight.trend === 'down' ? 'text-red-500' : 'text-muted'}`}>
                          {highlight.change}
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-muted uppercase tracking-wider">
                      {highlight.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Latest Documents */}
            <div>
              <h2 className="text-4xl font-serif mb-12">Publications</h2>
              <div className="space-y-6">
                {latestDocuments.map((doc) => (
                  <motion.div
                    key={doc.id}
                    className="group bg-bg p-6 hover:bg-bg/80 transition-colors duration-180"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <a href={doc.fileUrl} className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-muted mb-2">{formatDate(doc.date)}</div>
                        <h3 className="font-serif group-hover:text-accent transition-colors duration-180">
                          {doc.title}
                        </h3>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-muted">{doc.fileSize}</span>
                        <svg
                          className="w-5 h-5 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-4">
            {/* Stock Information */}
            <div className="bg-bg p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-sm text-muted mb-1">Cours de l'action</div>
                  <div className="text-2xl font-serif">{stockInfo.price} €</div>
                </div>
                <div className={`text-right ${Number(stockInfo.change) > 0 ? 'text-green-500' : 'text-red-500'}`}>
                  <div className="text-lg">{stockInfo.changePercent}</div>
                  <div className="text-sm">{stockInfo.change} €</div>
                </div>
              </div>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted">Volume</span>
                  <span>{stockInfo.volume}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Capitalisation</span>
                  <span>{stockInfo.marketCap}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Place de cotation</span>
                  <span>{stockInfo.exchange}</span>
                </div>
                <div className="text-xs text-muted text-right">
                  Mise à jour : {stockInfo.lastUpdate}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <Link
                to="/investisseurs/resultats"
                className="block bg-bg p-6 hover:bg-bg/80 transition-colors duration-180 group"
              >
                <h3 className="font-serif group-hover:text-accent transition-colors duration-180">
                  Résultats Financiers
                </h3>
                <p className="text-sm text-muted mt-2">
                  Consultez nos derniers résultats et présentations
                </p>
              </Link>
              <Link
                to="/investisseurs/assemblee-generale"
                className="block bg-bg p-6 hover:bg-bg/80 transition-colors duration-180 group"
              >
                <h3 className="font-serif group-hover:text-accent transition-colors duration-180">
                  Assemblée Générale
                </h3>
                <p className="text-sm text-muted mt-2">
                  Informations et documents pour les actionnaires
                </p>
              </Link>
              <Link
                to="/investisseurs/contact"
                className="block bg-bg p-6 hover:bg-bg/80 transition-colors duration-180 group"
              >
                <h3 className="font-serif group-hover:text-accent transition-colors duration-180">
                  Relations Investisseurs
                </h3>
                <p className="text-sm text-muted mt-2">
                  Contactez notre équipe Relations Investisseurs
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 