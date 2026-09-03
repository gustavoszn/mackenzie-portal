import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import styles from './Accordion.module.css';

export default function Accordion({ title, children, defaultOpen = false, badge }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={styles.accordion}>
      <button
        className={styles.trigger}
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <span className={styles.icon}>
          {open ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        </span>
        <span className={styles.title}>{title}</span>
        {badge && <span className={styles.badge}>{badge}</span>}
      </button>
      {open && <div className={styles.content}>{children}</div>}
    </div>
  );
}
