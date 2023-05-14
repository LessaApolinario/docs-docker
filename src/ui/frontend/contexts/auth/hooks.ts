import { useContextSelector } from 'use-context-selector';
import { AuthCTX } from '.';

export function useAuth() {
  return useContextSelector(AuthCTX, (ctx) => ctx.user);
}

export function useLogin() {
  return useContextSelector(AuthCTX, (ctx) => ctx.login);
}

export function useLogout() {
  return useContextSelector(AuthCTX, (ctx) => ctx.logout);
}
