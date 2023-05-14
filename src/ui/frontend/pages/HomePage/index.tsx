import { useEffect } from 'react';
import styles from './styles.module.scss';
import { Header } from '../../components/Header';
import { GenericList } from '../../components/GenericList';
import { Product } from '../../../../core/domain/models/Product';
import { ProductCard } from '../../components/productCard';
import { useFetchProducts, useProducts } from '../../contexts/product/hooks';
import { Button } from '../../components/Button';
import { useLogout } from '../../contexts/auth/hooks';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const products = useProducts();
  const fetchProducts = useFetchProducts();
  const logout = useLogout();
  const navigate = useNavigate();

  useEffect(() => {
    if (!products) {
      fetchProducts();
    }
    // eslint-disable-next-line
  }, [products]);

  function renderProduct(product: Product) {
    return <ProductCard key={product.id} data={product} />;
  }

  function renderLogoutButton() {
    return (
      <Button type="button" color="primary" onClick={logoutAndGoToLogin}>
        Sair
      </Button>
    );
  }

  async function logoutAndGoToLogin() {
    const loggedOut = await logout();

    if (loggedOut) {
      navigate('/');
    }
  }

  return (
    <div className={styles.container}>
      <Header text="Página de produtos" renderButtons={renderLogoutButton} />

      <main>
        <GenericList<Product>
          className={styles.products}
          data={products}
          renderItem={renderProduct}
        />
      </main>
    </div>
  );
}

export { HomePage };
