import { Product } from '../../domain/models/Product';

abstract class ProductUseCase {
  abstract fetch(): Promise<Product[]>;
}

export default ProductUseCase;
