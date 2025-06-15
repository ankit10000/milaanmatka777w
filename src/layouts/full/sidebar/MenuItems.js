import {
  IconAperture, IconCopy, IconLayoutDashboard, IconLogin, IconMoodHappy, IconTypography, IconUserPlus
} from '@tabler/icons-react';
import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },
  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/admin/dashboard',
  },
  {
    navlabel: true,
    subheader: 'User Management',
  },
  {
    id: uniqueId(),
    title: 'Users',
    icon: IconCopy,
    href: '/admin/users',
  },
  {
    id: uniqueId(),
    title: 'Withdrawals',
    icon: IconTypography,
    href: '/admin/withdrawals',
  },
  {
    navlabel: true,
    subheader: 'Content',
  },
  {
    id: uniqueId(),
    title: 'Home Images',
    icon: IconCopy,
    href: '/admin/home-image',
  },
  {
    id: uniqueId(),
    title: 'QR Code',
    icon: IconCopy,
    href: '/admin/qr-code',
  },
  {
    id: uniqueId(),
    title: 'Approve Payouts',
    icon: IconCopy,
    href: '/admin/approve-payouts',
  },
  {
    navlabel: true,
    subheader: 'Galidesawer',
  },
  {
    id: uniqueId(),
    title: 'Add Galidesawer',
    icon: IconCopy,
    href: '/admin/galidesawer',
  },
  {
    id: uniqueId(),
    title: 'Galidesawer Result',
    icon: IconCopy,
    href: '/admin/galidesawer-result',
  },
  {
    id: uniqueId(),
    title: 'All Bets',
    icon: IconCopy,
    href: '/admin/galidesawer-bets',
  },
  {
    navlabel: true,
    subheader: 'Starline',
  },
  {
    id: uniqueId(),
    title: 'Add Starline',
    icon: IconCopy,
    href: '/admin/starline-add',
  },
  {
    id: uniqueId(),
    title: 'All Bets',
    icon: IconCopy,
    href: '/admin/starline-bets',
  },
  {
    id: uniqueId(),
    title: 'Result',
    icon: IconCopy,
    href: '/admin/starline-result',
  },
  {
    navlabel: true,
    subheader: 'Account',
  },
  {
    id: uniqueId(),
    title: 'Logout',
    icon: IconLogin,
    href: '/',
  },
];

export default Menuitems;