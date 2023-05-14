import { createBrowserRouter } from 'react-router-dom';
import { App } from '../app/App';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <LoginPage />,
      },
      {
        path: '/home',
        element: <HomePage />,
      },
    ],
  },
]);
