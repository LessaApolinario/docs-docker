import AuthUseCase from '../../../../core/interfaces/usecases/AuthUseCase';
import ProductUseCase from '../../../../core/interfaces/usecases/ProductUseCase';
import AuthService from '../../../../core/services/AuthService';
import ProductService from '../../../../core/services/ProductService';
import AuthFirebaseRepository from '../../../../infra/firebase/auth/AuthFirebaseRepository';
import ProductFirebaseRepository from '../../../../infra/firebase/product';

class WebDIContainer {
  static getProductService(): ProductUseCase {
    return new ProductService(new ProductFirebaseRepository());
  }

  static getAuthService(): AuthUseCase {
    return new AuthService(new AuthFirebaseRepository());
  }
}

export default WebDIContainer;
