import { PropsWithChildren, useCallback, useState } from 'react';
import { Product } from '../../../../core/domain/models/Product';
import WebDIContainer from '../../dicontainer/web/WebDIContainer';
import { ProductCTX } from '.';

export function ProductProvider({ children }: PropsWithChildren) {
  const [products, setProducts] = useState<Product[]>();

  const fetch = useCallback(async () => {
    const service = WebDIContainer.getProductService();
    const data = await service.fetch();
    setProducts(data);
  }, []);

  return (
    <ProductCTX.Provider value={{ products, fetch }}>
      {children}
    </ProductCTX.Provider>
  );
}
