import ProductUseCase from '../../../../core/interfaces/usecases/ProductUseCase';
import ProductService from '../../../../core/services/ProductService';
import ProductFirebaseRepository from '../../../../infra/firebase/product';

class WebDIContainer {
  static getProductService(): ProductUseCase {
    return new ProductService(new ProductFirebaseRepository());
  }
}

export default WebDIContainer;
