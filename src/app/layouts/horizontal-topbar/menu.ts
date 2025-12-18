import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'Dashboard',
    icon: 'ri-dashboard-2-line',
    link: '/'
  },
  {
    id: 2,
    label: 'Tasklist Approval',
    icon: 'ri-team-line',
    subItems: [
      {
        id: 2.1,
        label: 'New Registration',
        icon: 'ri-user-add-line',
        link: '/tasklist-approval/new-registration/list',
        parentId: 2
      },
      {
        id: 2.2,
        label: 'Update Data',
        icon: 'ri-edit-circle-line',
        link: '/pages/starter',
        parentId: 2
      },
      {
        id: 2.3,
        label: 'Forgot User',
        icon: 'ri-key-line',
        link: '/pages/starter',
        parentId: 2
      },
      {
        id: 2.4,
        label: 'Waiting Email Confirmation',
        icon: 'ri-loader-line',
        link: '/pages/starter',
        parentId: 2
      },
    ]
  },
  {
    id: 3,
    label: 'Monitoring Interface',
    icon: 'ri-computer-line',
    link: '/'
  },
  {
    id: 4,
    label: 'Vendor',
    icon: 'ri-group-line',
    subItems: [
      {
        id: 4.1,
        label: 'Vendor List',
        icon: 'ri-user-follow-line',
        link: '/tasklist-approval/new-registration/list',
        parentId: 4
      },
      {
        id: 4.2,
        label: 'Rejected Vendors',
        icon: 'ri-user-unfollow-line',
        link: '/pages/starter',
        parentId: 4
      },
      {
        id: 4.3,
        label: 'Rejected Vendor Data Updates',
        icon: 'ri-user-received-line',
        link: '/pages/starter',
        parentId: 4
      },
      {
        id: 4.4,
        label: 'Check SAP Vendor',
        icon: 'ri-user-search-line',
        link: '/pages/starter',
        parentId: 4
      },
    ]
  },
  {
    id: 5,
    label: 'Vendor Registration State',
    icon: 'ri-registered-line',
    link: '/'
  },
]