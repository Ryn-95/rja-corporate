export interface Stat {
  id: string;
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

export const stats: Stat[] = [
  {
    id: 'aum',
    value: 12,
    label: 'Milliards d\'euros d\'actifs sous gestion',
    suffix: ' Mrd€'
  },
  {
    id: 'companies',
    value: 35,
    label: 'Entreprises en portefeuille'
  },
  {
    id: 'countries',
    value: 15,
    label: 'Pays d\'implantation'
  },
  {
    id: 'years',
    value: 25,
    label: 'Années d\'expertise'
  }
]; 