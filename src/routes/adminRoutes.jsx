import Create from '../pages/Admin/Create';
import Manage from '../pages/Admin/Manage';
import Edit from '../pages/Admin/Edit';

export const adminRoutes = [
  {
    index: true,
    element: <Manage />,
  },
  {
    path: '/admin/create',
    element: <Create />,
  },
  {
    path: '/admin/edit/:id',
    element: <Edit />,
  },
];
