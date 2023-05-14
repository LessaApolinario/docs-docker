import { PropsWithChildren, useCallback, useState } from 'react';
import User from '../../../../core/domain/models/User';
import WebDIContainer from '../../dicontainer/web/WebDIContainer';
import { AuthCredentials } from '../../../../core/domain/types/AuthCredentials';
import { AuthCTX } from '.';

export function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User>();

  const login = useCallback(async (credentials: AuthCredentials) => {
    try {
      const service = WebDIContainer.getAuthService();
      await service.login(credentials);
      setUser(service.getCurrentUser());
      return true;
    } catch (error) {
      return false;
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      const service = WebDIContainer.getAuthService();
      await service.logout();
      return true;
    } catch (error) {
      return false;
    }
  }, []);

  return (
    <AuthCTX.Provider value={{ user, login, logout }}>{children}</AuthCTX.Provider>
  );
}
