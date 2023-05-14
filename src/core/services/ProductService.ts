import { Product } from '../domain/models/Product';
import ProductAdapter from '../interfaces/adapters/ProductAdapter';
import ProductUseCase from '../interfaces/usecases/ProductUseCase';

class ProductService extends ProductUseCase {
  constructor(private readonly adapter: ProductAdapter) {
    super();
  }

  fetch(): Promise<Product[]> {
    return this.adapter.fetch();
  }
}

export default ProductService;
