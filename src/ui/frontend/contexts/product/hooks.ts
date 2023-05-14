import { useContextSelector } from 'use-context-selector';
import { ProductCTX } from '.';

export function useProducts() {
  return useContextSelector(ProductCTX, (ctx) => ctx.products);
}

export function useFetchProducts() {
  return useContextSelector(ProductCTX, (ctx) => ctx.fetch);
}
