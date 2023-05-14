import { useLocation, useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import { Product } from '../../../../core/domain/models/Product';
import formatPrice from '../../../../core/utils/formatPrice';
import { Button } from '../../components/Button';

function ProductDetailsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, description, price, quantity } = location.state as Product;

  function goBackToHome() {
    navigate('/home')
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{formatPrice(price ?? 0)}</p>
        <p className={styles.quantity}>{quantity} Em estoque</p>
        <Button type="button" color="primary" onClick={goBackToHome}>Voltar</Button>
      </div>
    </div>
  );
}

export { ProductDetailsPage };
