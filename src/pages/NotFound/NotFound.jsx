import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.logo}>M</div>
      <h1 className={styles.code}>404</h1>
      <p className={styles.message}>Página não encontrada</p>
      <p className={styles.sub}>A página que você está procurando não existe ou foi movida.</p>
      <Link to="/" className={styles.btn}>Voltar ao início</Link>
    </div>
  );
}
