import { EIconsSet } from '@/typings';

export const ROUTES = {
  dashboard: '/',
  signIn: '/sign-in',
  signUp: '/sign-up',
  invite: '/invite',
  password: '/password-recovery',
  newPassword: '/new-password',
  settings: '/profile',
  calendar: '/calendar',
  employees: '/employees',
  employee: '/employee',
  projects: '/projects',
  project: '/project',
  events: '/events',
  editProject: '/project/edit',
  task: '/task',
  editTask: '/task/edit',
  infoPortal: '/info-portal',
  folder: '/folder',
  editFolder: '/folder/edit',
};

export type RoutesType = typeof ROUTES;
export type RouteKeysType = keyof RoutesType;

export const navRoutes = [
  {
    title: 'dashboard',
    path: ROUTES.dashboard,
    icon: EIconsSet.Dashboard,
  },
  {
    title: 'projects',
    path: ROUTES.projects,
    icon: EIconsSet.Projects,
  },
  {
    title: 'calendar',
    path: ROUTES.calendar,
    icon: EIconsSet.Calendar,
  },
  {
    title: 'employees',
    path: ROUTES.employees,
    icon: EIconsSet.Persons,
  },
  {
    title: 'infoPortal',
    path: ROUTES.infoPortal,
    icon: EIconsSet.Folder,
  },
];
