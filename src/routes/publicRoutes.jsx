import SignIn from '../pages/Auth/SignIn';
import Home from '../pages/Home/Home';

export const publicRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: 'signin',
    element: <SignIn />,
  },
];
