import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import { ProductProvider } from '../contexts/product/ProductProvider';
import { AuthProvider } from '../contexts/auth/AuthProvider';
import { useAuth } from '../contexts/auth/hooks';
import { useEffect } from 'react';

function App() {
  const user = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = !!user;
    const isOnLoginPage = location.pathname === '/login';

    if (!isAuthenticated && !isOnLoginPage) {
      navigate('/');
    }
    // eslint-disable-next-line
  }, [user]);

  return (
    <div className={styles.container}>
      <AuthProvider>
        <ProductProvider>
          <Outlet />
        </ProductProvider>
      </AuthProvider>
    </div>
  );
}

export { App };
