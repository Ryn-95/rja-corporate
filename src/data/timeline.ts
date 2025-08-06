export interface TimelineEvent {
  id: string;
  year: number;
  title: string;
  description: string;
  image?: string;
}

export const timeline: TimelineEvent[] = [
  {
    id: 'founding',
    year: 1999,
    title: 'Création de RJA',
    description: 'Fondation du groupe par Robbin James Agoh avec une vision claire : créer une holding d\'investissement d\'excellence.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&h=800&fit=crop'
  },
  {
    id: 'first-hotel',
    year: 2005,
    title: 'Premier investissement hôtelier',
    description: 'Acquisition et rénovation du Royal Riviera, marquant l\'entrée du groupe dans le secteur de l\'hôtellerie de luxe.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&h=800&fit=crop'
  },
  {
    id: 'international-expansion',
    year: 2010,
    title: 'Expansion internationale',
    description: 'Ouverture des premiers bureaux à l\'international et développement du portefeuille en Europe.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&h=800&fit=crop'
  },
  {
    id: 'luxury-retail',
    year: 2015,
    title: 'Diversification dans le luxe',
    description: 'Acquisition de Maison Lumière, marquant l\'entrée dans le secteur du luxe et du retail.',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1200&h=800&fit=crop'
  },
  {
    id: 'tech-innovation',
    year: 2020,
    title: 'Innovation technologique',
    description: 'Création de la division Tech & Services avec l\'acquisition de Quantum Solutions.',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1200&h=800&fit=crop'
  },
  {
    id: 'esg-commitment',
    year: 2024,
    title: 'Engagement ESG',
    description: 'Lancement de la stratégie ESG avec l\'objectif de neutralité carbone d\'ici 2040.',
    image: 'https://images.unsplash.com/photo-1464038008305-ee8def75f234?q=80&w=1200&h=800&fit=crop'
  }
]; 