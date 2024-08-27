import { EIconsSet } from '@/enums';

export const ROUTES = {
  dashboard: '/',
  signIn: '/sign-in',
  signUp: '/sign-up',
  password: '/password-recovery',
  settings: '/profile',
  calendar: '/calendar',
  employees: '/employees',
  projects: '/projects',
};

export type RoutesType = typeof ROUTES;
export type RouteKeysType = keyof RoutesType;

export const navRoutes = [
  {
    title: 'Dashboard',
    path: ROUTES.dashboard,
    icon: EIconsSet.Dashboard,
  },
  {
    title: 'Projects',
    path: ROUTES.projects,
    icon: EIconsSet.Projects,
  },
  {
    title: 'Calendar',
    path: ROUTES.calendar,
    icon: EIconsSet.Calendar,
  },
  {
    title: 'Employees',
    path: ROUTES.employees,
    icon: EIconsSet.Persons,
  },
];
