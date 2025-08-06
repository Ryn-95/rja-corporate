export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
}

export const team: TeamMember[] = [
  {
    id: 'robbin-james-agoh',
    name: 'Robbin James Agoh',
    role: 'Président-Fondateur',
    bio: "Avec plus de 25 ans d'expérience dans l'investissement, Robbin James Agoh a fondé RJA en 1999. Sa vision stratégique et son expertise dans les secteurs du luxe et de l'immobilier ont permis de bâtir un groupe d'envergure internationale.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&h=1200&fit=crop',
    linkedin: 'https://linkedin.com/in/robbin-james-agoh'
  },
  {
    id: 'marie-dubois',
    name: 'Marie Dubois',
    role: 'Directrice Générale',
    bio: "Ancienne dirigeante de groupes hôteliers de luxe, Marie Dubois supervise le développement opérationnel et la stratégie d'expansion de RJA depuis 2015.",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&h=1200&fit=crop',
    linkedin: 'https://linkedin.com/in/marie-dubois'
  },
  {
    id: 'thomas-schmidt',
    name: 'Thomas Schmidt',
    role: 'Directeur des Investissements',
    bio: "Expert en fusions-acquisitions avec 15 ans d'expérience dans la banque d'affaires, Thomas pilote la stratégie d'investissement et le développement du portefeuille.",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&h=1200&fit=crop',
    linkedin: 'https://linkedin.com/in/thomas-schmidt'
  },
  {
    id: 'sophie-chen',
    name: 'Sophie Chen',
    role: 'Directrice ESG & Innovation',
    bio: "Pionnière dans l'intégration des critères ESG dans l'investissement, Sophie dirige la stratégie de développement durable et d'innovation du groupe.",
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&h=1200&fit=crop',
    linkedin: 'https://linkedin.com/in/sophie-chen'
  }
]; 