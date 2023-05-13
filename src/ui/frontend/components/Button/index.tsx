import { PropsWithChildren } from 'react';
import styles from './styles.module.scss';

interface Props {
  type: 'button' | 'submit' | 'reset' | undefined;
  color: 'primary' | 'secondary';
}

function Button({ type, color, children }: PropsWithChildren<Props>) {
  const className = `${styles.container} ${styles[color]}`;
  const buttonType = type || 'button';
  return (
    <button className={className} type={buttonType}>
      {children}
    </button>
  );
}

export { Button };
