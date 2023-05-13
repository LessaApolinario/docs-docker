import { ReactNode } from 'react';

interface Props<T> {
  className?: string;
  data?: T[];
  renderItem: (item: T) => ReactNode;
}

function GenericList<T>({ className, data, renderItem }: Props<T>) {
  return <div className={className}>{data?.map(renderItem)}</div>;
}
export { GenericList };
