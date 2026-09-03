import { useEffect, useState } from 'react';
import { CheckCircle, AlertCircle, X } from 'lucide-react';
import styles from './Toast.module.css';

export default function Toast({ message, type = 'success', onClose }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => { setVisible(false); setTimeout(onClose, 300); }, 3500);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <div className={`${styles.toast} ${styles[type]} ${visible ? styles.in : styles.out}`} role="alert">
      {type === 'success' ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
      <span>{message}</span>
      <button onClick={() => { setVisible(false); setTimeout(onClose, 300); }} aria-label="Fechar"><X size={14} /></button>
    </div>
  );
}
