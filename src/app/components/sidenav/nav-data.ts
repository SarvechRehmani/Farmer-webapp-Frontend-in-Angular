import { INavBarData } from './helper';

export const sidenavData: INavBarData[] = [
  {
    routeLink: '/dashboard/welcome',
    icon: 'fas fa-tachometer-alt',
    label: 'Dashboard',
  },
  {
    routeLink: 'roles',
    icon: 'fas fa-lock',
    label: 'Management',
    items: [
      {
        routeLink: '/dashboard/roles',
        label: 'Roles & Permissions',
      },
    ],
  },
  {
    routeLink: 'CMS',
    icon: 'fas fa-cogs',
    label: 'CMS',
    items: [
      {
        routeLink: '/dashboard/banners',
        label: 'Banner',
      },
      {
        routeLink: '/dashboard/journey',
        label: 'Journey',
      },
    ],
  },
  {
    routeLink: 'languages',
    icon: 'fas fa-language',
    label: 'Languages',
  },
  {
    routeLink: '/dashboard/warehouse',
    icon: 'fa fa-warehouse',
    label: 'Warehouse',
  },
  {
    routeLink: '/dashboard/district',
    icon: 'fa fa-city',
    label: 'Districts',
  },
  {
    routeLink: '/dashboard/alerts',
    icon: 'fal fa-home',
    label: 'Alerts',
  },
  {
    routeLink: '/dashboard/tables',
    icon: 'fal fa-home',
    label: 'Tables',
  },
  {
    routeLink: 'dashboard/inputs',
    icon: 'fal fa-home',
    label: 'Inputs',
  },
  {
    routeLink: '/dashboard/modal',
    icon: 'fal fa-home',
    label: 'Modal',
  },
];
