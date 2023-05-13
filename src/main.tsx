import ReactDOM from 'react-dom/client';
import './ui/frontend/styles/globlals.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from './ui/frontend/routes/router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
);
