import User from '../../domain/models/User';
import { AuthCredentials } from '../../domain/types/AuthCredentials';

abstract class AuthUseCase {
  abstract login(credentials: AuthCredentials): Promise<void>;
  abstract getCurrentUser(): User;
}

export default AuthUseCase;
