import { LockLaminated } from '@phosphor-icons/react';
import styles from './styles.module.scss';
import { Button } from '../../components/Button';
import { useId, useRef } from 'react';
import { useLogin } from '../../contexts/auth/hooks';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const emailId = useId();
  const passwordId = useId();
  const login = useLogin();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  async function handleLogin(event: React.FormEvent) {
    event.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!email || !password) {
      return;
    }

    const loggedIn = await login({ email, password });

    if (loggedIn) {
      navigate('/home');
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.iconContainer}>
          <LockLaminated size={70} color="#000000" weight="regular" />
        </div>
      </div>

      <div className={styles.rightSide}>
        <form className={styles.form} onSubmit={handleLogin}>
          <h2>Realizar login</h2>
          <p>Bem-vindo a página de login</p>
          <div className={styles.field}>
            <label htmlFor={emailId}>Email:</label>
            <input type="text" id={emailId} ref={emailRef} />
          </div>

          <div className={styles.field}>
            <label htmlFor={passwordId}>Senha:</label>
            <input type="password" id={passwordId} ref={passwordRef} />
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
