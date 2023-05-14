import { createContext } from 'use-context-selector';
import User from '../../../../core/domain/models/User';
import { AuthCredentials } from '../../../../core/domain/types/AuthCredentials';

interface AuthProps {
  user?: User;
  login(credentials: AuthCredentials): Promise<boolean>;
  logout(): Promise<boolean>;
}

export const AuthCTX = createContext({} as AuthProps);
