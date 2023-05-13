import styles from './styles.module.scss';

interface Props {
  text: string;
}

function Header({ text }: Props) {
  return (
    <header className={styles.container}>
      <hgroup>
        <h1>{text}</h1>
      </hgroup>
    </header>
  );
}

export { Header };
