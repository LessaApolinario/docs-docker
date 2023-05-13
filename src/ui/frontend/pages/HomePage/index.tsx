import { useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header';
import { ProductCard } from '../../components/productCard';
import { Product } from '../../../../core/domain/models/Product';

function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/home');
  }, [navigate]);

  return (
    <div className={styles.container}>
      <Header text="Página de produtos" />

      <main>
        <ProductCard
          data={Product.fromJSON({
            name: 'Mouse simples',
            description:
              'Mouse com fio e led vermelho, ideal para usuários comuns.',
            price: 22.9,
            quantity: 20,
          })}
        />
      </main>
    </div>
  );
}

export { HomePage };
