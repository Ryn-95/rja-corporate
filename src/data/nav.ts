interface NavLink {
  id: string;
  label: string;
  href: string;
  description?: string;
  image?: string;
}

interface NavGroup {
  id: string;
  label: string;
  links: NavLink[];
}

interface NavItem {
  id: string;
  label: string;
  href?: string;
  groups?: NavGroup[];
  featured?: NavLink[];
}

export const mainNav: NavItem[] = [
  {
    id: 'notre-groupe',
    label: 'Notre Groupe',
    groups: [
      {
        id: 'presentation',
        label: 'Présentation',
        links: [
          {
            id: 'histoire',
            label: 'Histoire',
            href: '/notre-groupe/histoire',
            description: 'L\'histoire de RJA, depuis sa création jusqu\'à aujourd\'hui'
          },
          {
            id: 'mission',
            label: 'Mission',
            href: '/notre-groupe/mission',
            description: 'Notre vision et nos objectifs pour l\'avenir'
          },
          {
            id: 'gouvernance',
            label: 'Gouvernance',
            href: '/notre-groupe/gouvernance',
            description: 'Notre structure de direction et nos principes de gouvernance'
          }
        ]
      },
      {
        id: 'expertise',
        label: 'Notre Expertise',
        links: [
          {
            id: 'modele',
            label: 'Notre Modèle',
            href: '/notre-groupe/modele',
            description: 'Un modèle d\'investissement unique et performant'
          },
          {
            id: 'presence',
            label: 'Présence Internationale',
            href: '/notre-groupe/presence',
            description: 'Notre réseau mondial d\'investissement'
          }
        ]
      }
    ],
    featured: [
      {
        id: 'rapport-annuel',
        label: 'Rapport Annuel 2024',
        href: '/publications/rapport-annuel-2024',
        image: 'https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&w=800&h=600&fit=crop'
      }
    ]
  },
  {
    id: 'portefeuille',
    label: 'Portefeuille',
    groups: [
      {
        id: 'secteurs',
        label: 'Nos Secteurs',
        links: [
          {
            id: 'hotellerie',
            label: 'Hôtellerie & Loisirs',
            href: '/portefeuille/hotellerie',
            description: 'Actifs hôteliers premium et destinations de loisirs'
          },
          {
            id: 'immobilier',
            label: 'Immobilier',
            href: '/portefeuille/immobilier',
            description: 'Développement et gestion d\'actifs immobiliers'
          },
          {
            id: 'luxe',
            label: 'Luxe & Retail',
            href: '/portefeuille/luxe',
            description: 'Marques et concepts retail innovants'
          },
          {
            id: 'tech',
            label: 'Tech & Services',
            href: '/portefeuille/tech',
            description: 'Solutions technologiques et services'
          }
        ]
      }
    ],
    featured: [
      {
        id: 'derniere-acquisition',
        label: 'Dernière Acquisition',
        href: '/actualites/nouvelle-acquisition-2024',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&h=600&fit=crop'
      }
    ]
  },
  {
    id: 'investisseurs',
    label: 'Investisseurs',
    groups: [
      {
        id: 'informations',
        label: 'Informations Financières',
        links: [
          {
            id: 'resultats',
            label: 'Résultats Financiers',
            href: '/investisseurs/resultats',
            description: 'Performances et résultats trimestriels'
          },
          {
            id: 'publications',
            label: 'Publications',
            href: '/investisseurs/publications',
            description: 'Rapports et documents financiers'
          },
          {
            id: 'gouvernance',
            label: 'Gouvernance',
            href: '/investisseurs/gouvernance',
            description: 'Structure et principes de gouvernance'
          }
        ]
      },
      {
        id: 'actionnaires',
        label: 'Espace Actionnaires',
        links: [
          {
            id: 'assemblee',
            label: 'Assemblée Générale',
            href: '/investisseurs/assemblee-generale',
            description: 'Informations et documents pour les actionnaires'
          },
          {
            id: 'dividendes',
            label: 'Dividendes',
            href: '/investisseurs/dividendes',
            description: 'Politique et historique des dividendes'
          }
        ]
      }
    ]
  },
  {
    id: 'esg',
    label: 'ESG',
    groups: [
      {
        id: 'engagement',
        label: 'Notre Engagement',
        links: [
          {
            id: 'strategie',
            label: 'Stratégie ESG',
            href: '/esg/strategie',
            description: 'Notre approche pour un investissement responsable'
          },
          {
            id: 'environnement',
            label: 'Environnement',
            href: '/esg/environnement',
            description: 'Actions pour la transition écologique'
          },
          {
            id: 'social',
            label: 'Social',
            href: '/esg/social',
            description: 'Engagement pour l\'impact social'
          }
        ]
      }
    ],
    featured: [
      {
        id: 'rapport-esg',
        label: 'Rapport ESG 2024',
        href: '/publications/rapport-esg-2024',
        image: 'https://images.unsplash.com/photo-1535025183041-0991a977e25b?q=80&w=800&h=600&fit=crop'
      }
    ]
  },
  {
    id: 'actualites',
    label: 'Actualités',
    href: '/actualites'
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '/contact'
  }
]; 