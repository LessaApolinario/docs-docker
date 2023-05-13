import { useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header';

function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/home');
  }, [navigate]);

  return (
    <div className={styles.container}>
      <Header text="Página de produtos" />
    </div>
  );
}

export { HomePage };
