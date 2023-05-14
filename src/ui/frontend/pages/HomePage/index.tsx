import { useEffect } from 'react';
import styles from './styles.module.scss';
import { Header } from '../../components/Header';
import { GenericList } from '../../components/GenericList';
import { Product } from '../../../../core/domain/models/Product';
import { ProductCard } from '../../components/productCard';
import { useFetchProducts, useProducts } from '../../contexts/product/hooks';

function HomePage() {
  const products = useProducts();
  const fetchProducts = useFetchProducts();

  useEffect(() => {
    if (!products) {
      fetchProducts();
    }
    // eslint-disable-next-line
  }, [products]);

  function renderProduct(product: Product) {
    return <ProductCard key={product.id} data={product} />;
  }

  return (
    <div className={styles.container}>
      <Header text="Página de produtos" />

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
