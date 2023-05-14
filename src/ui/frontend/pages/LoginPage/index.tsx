import { LockLaminated } from '@phosphor-icons/react';
import styles from './styles.module.scss';
import { Button } from '../../components/Button';
import { useId } from 'react';

function LoginPage() {
  const emailId = useId();
  const passwordId = useId();

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.iconContainer}>
          <LockLaminated size={70} color="#000000" weight="regular" />
        </div>
      </div>

      <div className={styles.rightSide}>
        <form className={styles.form}>
          <h2>Realizar login</h2>
          <p>Bem-vindo a página de login</p>
          <div className={styles.field}>
            <label htmlFor={emailId}>Email:</label>
            <input type="text" id={emailId} />
          </div>

          <div className={styles.field}>
            <label htmlFor={passwordId}>Senha:</label>
            <input type="password" id={passwordId} />
          </div>

          <Button type="submit" color="primary">
            Entrar
          </Button>
        </form>
      </div>
    </div>
  );
}

export { LoginPage };
