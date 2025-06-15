import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';

// Import all components
import Userdetails from '../views/utilities/Userdetails';
import Homedp from '../views/utilities/Homedp';
import Gameresult from '../views/utilities/Gameresult';
import Approvepayouts from '../views/utilities/Approvepayouts';
import Bethistory from '../views/utilities/Bethistory';
import Galidesawerwinners from '../views/utilities/Galidesawerwinners';
import Starlineadd from '../views/utilities/Starlineadd';
import Starlineallbet from '../views/utilities/Starlineallbet';
import Starlineresult from '../views/utilities/Starlineresult';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* ****Pages***** */
const Dashboard = Loadable(lazy(() => import('../views/dashboard/Dashboard')));
const TypographyPage = Loadable(lazy(() => import('../views/utilities/TypographyPage')));
const Shadow = Loadable(lazy(() => import('../views/utilities/Shadow')));
const Galidesawer = Loadable(lazy(() => import('../views/utilities/galidesawer')));
const Galidesaweresult = Loadable(lazy(() => import('../views/utilities/Galidesaweresult')));

const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const Register = Loadable(lazy(() => import('../views/authentication/Register')));
const Login = Loadable(lazy(() => import('../views/authentication/Login')));

const Router = [
  // ROOT ROUTE - LOGIN ONLY
  {
    path: '/',
    element: <BlankLayout />,
    children: [
      { path: '/', element: <Login /> },
    ],
  },
  
  // ADMIN ROUTES - All admin pages with FullLayout
  {
    path: '/admin',
    element: <FullLayout />,
    children: [
      { path: '/admin', element: <Navigate to="/admin/dashboard" replace /> },
      { path: '/admin/dashboard', element: <Dashboard /> },
      { path: '/admin/users', element: <Userdetails /> },
      { path: '/admin/home-image', element: <Homedp /> },
      { path: '/admin/qr-code', element: <Gameresult /> },
      { path: '/admin/approve-payouts', element: <Approvepayouts /> },
      { path: '/admin/withdrawals', element: <TypographyPage /> },
      { path: '/admin/bet-history', element: <Bethistory /> },
      { path: '/admin/galidesawer', element: <Galidesawer /> },
      { path: '/admin/galidesawer-result', element: <Galidesaweresult /> },
      { path: '/admin/galidesawer-bets', element: <Galidesawerwinners /> },
      { path: '/admin/starline-add', element: <Starlineadd /> },
      { path: '/admin/starline-bets', element: <Starlineallbet /> },
      { path: '/admin/starline-result', element: <Starlineresult /> },
    ],
  },
  
  // AUTH ROUTES
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '/auth/register', element: <Register /> },
      { path: '/auth/404', element: <Error /> },
    ],
  },
  
  // CATCH ALL
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
];

export default Router;