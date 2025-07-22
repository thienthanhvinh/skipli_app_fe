import SignIn from '../pages/Auth/SignIn';
import SignUp from '../pages/Auth/SignUp';
import Verify from '../pages/Auth/Verify';
import Dashboard from '../pages/Dashboard/Dashboard';
import Home from '../pages/Home/Home';

export const publicRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: 'sign-up',
    element: <SignUp />,
  },
  {
    path: 'sign-in',
    element: <SignIn />,
  },
  {
    path: 'verify',
    element: <Verify />,
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
  },
];
