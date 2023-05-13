import styles from './styles.module.scss';

interface Props {
  text?: string;
}

function Loading({ text }: Props) {
  return <div className={styles.container}>{text ?? 'Carregando...'}</div>;
}

export { Loading };
