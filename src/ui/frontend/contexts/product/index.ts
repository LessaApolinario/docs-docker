import { createContext } from 'use-context-selector';
import { Product } from '../../../../core/domain/models/Product';

interface ProductProps {
  products?: Product[];
  fetch(): void;
}

export const ProductCTX = createContext({} as ProductProps);
