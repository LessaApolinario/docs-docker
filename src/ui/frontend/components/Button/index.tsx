import { PropsWithChildren } from 'react';
import styles from './styles.module.scss';

interface Props {
  type: 'button' | 'submit' | 'reset' | undefined;
  color: 'primary' | 'secondary';
  onClick?(): void;
}

function Button({ type, color, onClick, children }: PropsWithChildren<Props>) {
  const className = `${styles.container} ${styles[color]}`;
  const buttonType = type || 'button';
  return (
    <button className={className} type={buttonType} onClick={onClick}>
      {children}
    </button>
  );
}

export { Button };
