import { useNavigate } from 'react-router-dom';
import { Product } from '../../../../core/domain/models/Product';
import formatPrice from '../../../../core/utils/formatPrice';
import { Button } from '../Button';
import styles from './styles.module.scss';

interface Props {
  data?: Product;
}

function ProductCard({ data }: Props) {
  const navigate = useNavigate();

  function redirectToProductDetails() {
    navigate(`/product/${data?.id}`, { state: data });
  }

  return (
    <div className={styles.container}>
      <h2>{data?.name}</h2>
      <p>{data?.description}</p>
      <p>{formatPrice(data?.price || 0)}</p>
      <Button type="button" color="primary" onClick={redirectToProductDetails}>
        Ver detalhes
      </Button>
    </div>
  );
}

export { ProductCard };
