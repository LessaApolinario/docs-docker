import AuthAdapter from '../../../core/interfaces/adapters/AuthAdapter';
import { auth } from '..';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { AuthCredentials } from '../../../core/domain/types/AuthCredentials';
import User from '../../../core/domain/models/User';

class AuthFirebaseRepository implements AuthAdapter {
  async login({ email, password }: AuthCredentials): Promise<void> {
    await signInWithEmailAndPassword(auth, email, password);
  }

  getCurrentUser(): User {
    const currentUser = auth.currentUser;
    return User.fromJSON({
      id: currentUser?.uid,
      email: currentUser?.email,
    });
  }
}

export default AuthFirebaseRepository;
