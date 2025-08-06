import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { news, NewsItem } from '../../data/news';

interface NewsGridProps {
  limit?: number;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date);
};

const NewsCard = ({ item }: { item: NewsItem }) => (
  <motion.article
    className="group cursor-pointer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <Link to={item.href} className="block">
      <div className="relative aspect-[16/9] overflow-hidden mb-6">
        <img
          src={item.image}
          alt={item.title}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-bg/20 group-hover:bg-bg/0 transition-colors duration-180" />
      </div>
      <div className="space-y-4">
        <div className="flex items-center space-x-4 text-sm">
          <span className="text-accent">{item.category}</span>
          <span className="text-muted">{formatDate(item.date)}</span>
        </div>
        <h3 className="text-xl font-serif group-hover:text-accent transition-colors duration-180">
          {item.title}
        </h3>
        <p className="text-muted text-sm line-clamp-2">
          {item.description}
        </p>
      </div>
    </Link>
  </motion.article>
);

export const NewsGrid = ({ limit = 3 }: NewsGridProps) => {
  const displayedNews = limit ? news.slice(0, limit) : news;

  return (
    <section className="py-24">
      <div className="container mx-auto px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-serif mb-4">Actualités</h2>
            <p className="text-muted">
              Découvrez les dernières actualités de RJA et de nos investissements
            </p>
          </div>
          <Link
            to="/actualites"
            className="text-accent hover:text-accent/80 transition-colors duration-180"
          >
            Toutes les actualités →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {displayedNews.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}; 