import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { publicRoutes } from './publicRoutes';
import { adminRoutes } from './adminRoutes';
import AdminLayout from '../layouts/AdminLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: publicRoutes,
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: adminRoutes,
  },
]);

export default router;
