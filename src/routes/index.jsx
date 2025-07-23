import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { publicRoutes } from './publicRoutes';
import { adminRoutes } from './adminRoutes';
import AdminLayout from '../layouts/AdminLayout';
import Unauthorized from '../pages/Unauthorized';
import ProtectedRoutes from '../components/ProtectedRoutes';

const router = createBrowserRouter([
  ...publicRoutes,

  {
    path: '/admin',
    element: <ProtectedRoutes allowedRoles={['admin', 'owner']} />,
    children: adminRoutes,
  },

  {
    path: '/unauthorized',
    element: <Unauthorized />,
  },
  {
    path: '*',
    element: <div className="text-center p-10 text-red-600">404 - Page Not Found</div>,
  },
]);

export default router;
