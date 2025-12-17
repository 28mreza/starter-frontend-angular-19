import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'Dashboard',
    icon: 'fa-duotone fa-solid fa-gauge',
    link: '/'
  },
  {
    id: 2,
    label: 'Tasklist Approval',
    icon: 'fa-duotone fa-solid fa-users',
    isCollapsed: true,
    subItems: [
      {
        id: 2.1,
        label: 'New Registration',
        link: '/tasklist-approval/new-registration/list',
        parentId: 2
      },
      {
        id: 2.2,
        label: 'Update Data Vendor',
        link: '/pages/starter',
        parentId: 2
      },
    ]
  },
  {
    id: 1,
    label: 'MENUITEMS.PAGES.TEXT',
    icon: 'fa-duotone fa-solid fa-newspaper',
    isCollapsed: true,
    subItems: [
      {
        id: 1.1,
        label: 'MENUITEMS.PAGES.LIST.STARTER',
        link: '/pages/starter',
        parentId: 1
      },
    ]
  },
]