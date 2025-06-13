import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';

// Import all your components
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
  {
    path: '/',
    element: <FullLayout />,
    children: [
      // Root redirect to dashboard instead of login
      { path: '/', element: <Navigate to="/dashboard" replace /> },
      { path: '/dashboard', element: <Dashboard /> },
      
      // All other protected routes
      { path: '/ui/typography', element: <TypographyPage /> },
      { path: '/ui/shadow', element: <Shadow /> },
      { path: '/Userdetails', element: <Userdetails /> },
      { path: '/Home-image', element: <Homedp /> },
      { path: '/Game-result', element: <Gameresult /> },
      { path: '/Approve-payouts', element: <Approvepayouts /> },
      { path: '/Bet-history', element: <Bethistory /> },
      { path: '/galidesawer', element: <Galidesawer /> },
      { path: '/galidesawerresult', element: <Galidesaweresult /> },
      { path: '/galidesawerwinners', element: <Galidesawerwinners /> },
      { path: '/starlineadd', element: <Starlineadd /> },
      { path: '/starlineallbet', element: <Starlineallbet /> },
      { path: '/starlineresult', element: <Starlineresult /> },
    ],
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '/auth/login', element: <Login /> },
      { path: '/auth/register', element: <Register /> },
      { path: '/auth/404', element: <Error /> },
      { path: '*', element: <Navigate to="/auth/404" replace /> },
    ],
  },
  // Catch all other routes
  {
    path: '*',
    element: <Navigate to="/auth/login" replace />
  }
];

export default Router;