export interface Company {
  id: string;
  name: string;
  sectorId: string;
  description: string;
  logo: string;
  image: string;
  location: string;
  stats: {
    label: string;
    value: string;
  }[];
}

export const companies: Company[] = [
  {
    id: 'royal-riviera',
    name: 'Royal Riviera',
    sectorId: 'hospitality',
    description: "Complexe hôtelier de luxe sur la Côte d'Azur, alliant élégance française et service d'exception.",
    logo: 'https://via.placeholder.com/200x80?text=Royal+Riviera',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&h=800&fit=crop',
    location: 'Saint-Jean-Cap-Ferrat, France',
    stats: [
      { label: 'Chambres', value: '94' },
      { label: 'Restaurants', value: '3' }
    ]
  },
  {
    id: 'alpine-heights',
    name: 'Alpine Heights',
    sectorId: 'real-estate',
    description: "Développement résidentiel de prestige dans les Alpes suisses, incarnant l'excellence architecturale.",
    logo: 'https://via.placeholder.com/200x80?text=Alpine+Heights',
    image: 'https://images.unsplash.com/photo-1601919051950-bb9f3ffb3fee?q=80&w=1200&h=800&fit=crop',
    location: 'Verbier, Suisse',
    stats: [
      { label: 'Résidences', value: '28' },
      { label: 'Surface', value: '15 000 m²' }
    ]
  },
  {
    id: 'maison-lumiere',
    name: 'Maison Lumière',
    sectorId: 'luxury-retail',
    description: "Marque de haute parfumerie française, créant des fragrances d'exception depuis 1880.",
    logo: 'https://via.placeholder.com/200x80?text=Maison+Lumiere',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1200&h=800&fit=crop',
    location: 'Paris, France',
    stats: [
      { label: 'Boutiques', value: '45' },
      { label: 'Pays', value: '12' }
    ]
  },
  {
    id: 'quantum-solutions',
    name: 'Quantum Solutions',
    sectorId: 'tech-services',
    description: "Leader européen des solutions de cybersécurité quantique pour les institutions financières.",
    logo: 'https://via.placeholder.com/200x80?text=Quantum+Solutions',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1200&h=800&fit=crop',
    location: 'Zurich, Suisse',
    stats: [
      { label: 'Clients', value: '250+' },
      { label: 'R&D', value: '15%' }
    ]
  }
];
 