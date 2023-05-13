import { useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/home');
  }, [navigate]);

  return <div className={styles.container}>Home</div>;
}

export { HomePage };
