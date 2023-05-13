import { Suspense, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Loading } from '../../components/Loading';
import { GenericList } from '../../components/GenericList';
import { Product } from '../../../../core/domain/models/Product';
import { ProductCard } from '../../components/productCard';

function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/home');
  }, [navigate]);

  function renderProduct(product: Product) {
    return <ProductCard key={product.id} data={product} />;
  }

  return (
    <div className={styles.container}>
      <Header text="Página de produtos" />

      <main>
        <Suspense fallback={<Loading text="Carregando produtos..." />}>
          <GenericList<Product>
            className={styles.products}
            data={[
              Product.fromJSON({
                name: 'A',
                description:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, architecto, totam nisi id et aliquam, accusantium perferendis provident iure error quidem debitis praesentium. Porro recusandae a est consequuntur molestiae cumque.',
                price: 22.9,
                quantity: 20,
              }),
            ]}
            renderItem={renderProduct}
          />
        </Suspense>
      </main>
    </div>
  );
}

export { HomePage };
