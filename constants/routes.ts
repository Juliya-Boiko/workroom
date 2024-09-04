import { EIconsSet } from '@/typings';

export const ROUTES = {
  dashboard: '/',
  signIn: '/sign-in',
  signUp: '/sign-up',
  invite: '/invite',
  password: '/password-recovery',
  settings: '/profile',
  calendar: '/calendar',
  employees: '/employees',
  projects: '/projects',
  project: '/project',
  events: '/events',
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
