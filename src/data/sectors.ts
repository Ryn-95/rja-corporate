export interface Sector {
  id: string;
  name: string;
  description: string;
  image: string;
  stats?: {
    label: string;
    value: string;
  }[];
}

export const sectors: Sector[] = [
  {
    id: 'hospitality',
    name: 'Hôtellerie & Loisirs',
    description: 'Investissements stratégiques dans des actifs hôteliers premium et des destinations de loisirs exclusives.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&h=800&fit=crop',
    stats: [
      { label: 'Établissements', value: '25+' },
      { label: 'Pays', value: '8' }
    ]
  },
  {
    id: 'real-estate',
    name: 'Immobilier',
    description: 'Développement et gestion d\'actifs immobiliers d\'exception dans des emplacements stratégiques.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&h=800&fit=crop',
    stats: [
      { label: 'Surface totale', value: '500K m²' },
      { label: 'Projets', value: '12' }
    ]
  },
  {
    id: 'luxury-retail',
    name: 'Luxe & Retail',
    description: 'Partenariats avec des marques de luxe et développement de concepts retail innovants.',
    image: 'https://images.unsplash.com/photo-1541744573515-478c959628a0?q=80&w=1200&h=800&fit=crop',
    stats: [
      { label: 'Marques', value: '15+' },
      { label: 'Points de vente', value: '120' }
    ]
  },
  {
    id: 'tech-services',
    name: 'Tech & Services',
    description: 'Investissements dans des solutions technologiques disruptives et des services à forte valeur ajoutée.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&h=800&fit=crop',
    stats: [
      { label: 'Entreprises', value: '10' },
      { label: 'Brevets', value: '45+' }
    ]
  }
]; 