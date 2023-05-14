import { collection, getDocs } from 'firebase/firestore';
import { db } from '..';
import { Product } from '../../../core/domain/models/Product';
import ProductAdapter from '../../../core/interfaces/adapters/ProductAdapter';

class ProductFirebaseRepository extends ProductAdapter {
  async fetch(): Promise<Product[]> {
    const products: Product[] = []
    const querySnapshot = await getDocs(collection(db, 'products'));
    querySnapshot.forEach(doc => products.push(Product.fromJSON(doc.data())));
    return products;
  }
}

export default ProductFirebaseRepository;
