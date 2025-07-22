import SignIn from '../pages/Auth/SignIn';
import SignUp from '../pages/Auth/SignUp';
import Verify from '../pages/Auth/Verify';

export const publicRoutes = [
  {
    index: true,
    element: <SignUp />,
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
];
