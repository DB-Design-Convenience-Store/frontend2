import { dashboard, tables, profile } from './icons';

export const navList = [
  {
    header: true,
    name: '편의점 관리',
  },
  {
    header: false,
    link: '/dashboard',
    icon: dashboard,
    name: '대시보드',
  },
  {
    header: false,
    link: '/tables',
    icon: tables,
    name: '재고 관리',
  },
  {
    header: true,
    name: '직원 관리',
  },
  {
    header: false,
    link: '/tables_workers',
    icon: profile,
    name: '직원 관리',
  },
];
