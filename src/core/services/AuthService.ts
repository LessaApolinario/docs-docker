import User from '../domain/models/User';
import { AuthCredentials } from '../domain/types/AuthCredentials';
import AuthAdapter from '../interfaces/adapters/AuthAdapter';
import AuthUseCase from '../interfaces/usecases/AuthUseCase';

class AuthService extends AuthUseCase {
  constructor(private readonly adapter: AuthAdapter) {
    super();
  }

  login(credentials: AuthCredentials): Promise<void> {
    return this.adapter.login(credentials);
  }

  getCurrentUser(): User {
    return this.adapter.getCurrentUser();
  }

  logout(): Promise<void> {
    return this.adapter.logout();
  }
}

export default AuthService;
