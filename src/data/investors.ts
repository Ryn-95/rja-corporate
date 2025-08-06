export interface FinancialHighlight {
  id: string;
  label: string;
  value: string;
  change?: string;
  trend?: 'up' | 'down' | 'stable';
}

export interface FinancialDocument {
  id: string;
  title: string;
  type: 'report' | 'presentation' | 'regulatory';
  date: string;
  fileUrl: string;
  fileSize: string;
}

export interface StockInfo {
  symbol: string;
  exchange: string;
  currency: string;
  price: string;
  change: string;
  changePercent: string;
  volume: string;
  marketCap: string;
  lastUpdate: string;
}

export const financialHighlights: FinancialHighlight[] = [
  {
    id: 'aum',
    label: 'Actifs sous gestion',
    value: '12,5 Mrd€',
    change: '+15%',
    trend: 'up'
  },
  {
    id: 'revenue',
    label: 'Chiffre d\'affaires 2023',
    value: '850 M€',
    change: '+25%',
    trend: 'up'
  },
  {
    id: 'ebitda',
    label: 'EBITDA 2023',
    value: '320 M€',
    change: '+18%',
    trend: 'up'
  },
  {
    id: 'nav',
    label: 'ANR par action',
    value: '245,50 €',
    change: '+12%',
    trend: 'up'
  }
];

export const latestDocuments: FinancialDocument[] = [
  {
    id: 'annual-report-2023',
    title: 'Rapport Annuel 2023',
    type: 'report',
    date: '2024-02-28',
    fileUrl: '/documents/rapport-annuel-2023.pdf',
    fileSize: '8.5 MB'
  },
  {
    id: 'q4-2023-results',
    title: 'Résultats du 4ème trimestre 2023',
    type: 'presentation',
    date: '2024-02-15',
    fileUrl: '/documents/resultats-q4-2023.pdf',
    fileSize: '2.8 MB'
  },
  {
    id: 'esg-report-2023',
    title: 'Rapport ESG 2023',
    type: 'report',
    date: '2024-01-30',
    fileUrl: '/documents/rapport-esg-2023.pdf',
    fileSize: '5.2 MB'
  },
  {
    id: 'agm-2024',
    title: 'Documents Assemblée Générale 2024',
    type: 'regulatory',
    date: '2024-03-01',
    fileUrl: '/documents/ag-2024-documents.pdf',
    fileSize: '3.4 MB'
  }
];

export const stockInfo: StockInfo = {
  symbol: 'RJA',
  exchange: 'Euronext Paris',
  currency: 'EUR',
  price: '245,50',
  change: '+2,80',
  changePercent: '+1,15%',
  volume: '45 280',
  marketCap: '4,9 Mrd€',
  lastUpdate: '2024-03-15 17:35'
}; 