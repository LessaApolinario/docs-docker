import { Product } from '../../domain/models/Product';

abstract class ProductAdapter {
  abstract fetch(): Promise<Product[]>;
}

export default ProductAdapter;
