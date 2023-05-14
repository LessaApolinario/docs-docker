import { Outlet } from 'react-router-dom';
import styles from './styles.module.scss';
import { ProductProvider } from '../contexts/product/ProductProvider';

function App() {
  return (
    <div className={styles.container}>
      <ProductProvider>
        <Outlet />
      </ProductProvider>
    </div>
  );
}

export { App };
