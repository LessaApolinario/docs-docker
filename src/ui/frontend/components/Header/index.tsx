import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface Props {
  text: string;
  renderButtons(): ReactNode;
}

function Header({ text, renderButtons }: Props) {
  return (
    <header className={styles.container}>
      <hgroup>
        <h1>{text}</h1>
      </hgroup>
      {renderButtons()}
    </header>
  );
}

export { Header };
