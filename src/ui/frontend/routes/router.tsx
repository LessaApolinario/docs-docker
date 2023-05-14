import { createBrowserRouter } from 'react-router-dom';
import { App } from '../app/App';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { ProductDetailsPage } from '../pages/ProductDetailsPage';

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
      {
        path: '/product/:id',
        element: <ProductDetailsPage />
      }
    ],
  },
]);
