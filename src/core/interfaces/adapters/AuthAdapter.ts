import User from '../../domain/models/User';
import { AuthCredentials } from '../../domain/types/AuthCredentials';

abstract class AuthAdapter {
  abstract login(credentials: AuthCredentials): Promise<void>;
  abstract getCurrentUser(): User;
  abstract logout(): Promise<void>;
}

export default AuthAdapter;
