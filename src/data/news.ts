export interface NewsItem {
  id: string;
  type: 'press' | 'financial' | 'corporate';
  title: string;
  description: string;
  date: string;
  image?: string;
  category: string;
  href: string;
}

export const news: NewsItem[] = [
  {
    id: 'acquisition-tech-2024',
    type: 'corporate',
    title: 'RJA acquiert une participation majoritaire dans TechVision Solutions',
    description: 'Une acquisition stratégique qui renforce notre position dans le secteur technologique avec un leader des solutions cloud enterprise.',
    date: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&h=800&fit=crop',
    category: 'Acquisition',
    href: '/actualites/acquisition-techvision-2024'
  },
  {
    id: 'resultats-2023',
    type: 'financial',
    title: 'Résultats annuels 2023 : Une année de croissance exceptionnelle',
    description: 'RJA annonce des résultats record pour l\'exercice 2023, avec une croissance de 25% du chiffre d\'affaires.',
    date: '2024-02-28',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1200&h=800&fit=crop',
    category: 'Résultats',
    href: '/actualites/resultats-annuels-2023'
  },
  {
    id: 'nouveau-hotel-luxe',
    type: 'corporate',
    title: 'Ouverture d\'un complexe hôtelier de luxe à Saint-Tropez',
    description: 'RJA étend son portefeuille hôtelier avec l\'inauguration d\'une propriété exceptionnelle sur la Côte d\'Azur.',
    date: '2024-01-15',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&h=800&fit=crop',
    category: 'Hôtellerie',
    href: '/actualites/nouveau-hotel-saint-tropez'
  },
  {
    id: 'engagement-esg',
    type: 'press',
    title: 'RJA renforce son engagement ESG avec un nouveau plan d\'action',
    description: 'Lancement d\'une initiative ambitieuse pour la neutralité carbone et l\'impact social positif d\'ici 2030.',
    date: '2023-12-10',
    image: 'https://images.unsplash.com/photo-1535025183041-0991a977e25b?q=80&w=1200&h=800&fit=crop',
    category: 'ESG',
    href: '/actualites/engagement-esg-2030'
  },
  {
    id: 'partenariat-luxe',
    type: 'corporate',
    title: 'Partenariat stratégique avec Maison de Luxe SA',
    description: 'RJA s\'associe à un acteur majeur du luxe pour développer une nouvelle ligne d\'hôtels boutiques.',
    date: '2023-11-20',
    image: 'https://images.unsplash.com/photo-1541744573515-478c959628a0?q=80&w=1200&h=800&fit=crop',
    category: 'Partenariat',
    href: '/actualites/partenariat-maison-luxe'
  }
]; 