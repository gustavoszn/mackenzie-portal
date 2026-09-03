import { useState } from 'react';
import { Menu, Bell, ChevronDown, LogOut } from 'lucide-react';
import { useCourse } from '../../hooks/useCourse';
import CourseSelector from '../navigation/CourseSelector';
import styles from './Header.module.css';

export default function Header({ onMenuToggle, onLogout }) {
  const { course } = useCourse();
  const [selectorOpen, setSelectorOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <button className={styles.menuBtn} onClick={onMenuToggle} aria-label="Abrir menu">
            <Menu size={20} />
          </button>
          <div className={styles.brand}>
            <div className={styles.logo} aria-label="Mackenzie">M</div>
            <div className={styles.brandCopy}>
              <strong>Mackenzie</strong>
              <span>Portal do Aluno</span>
            </div>
          </div>
        </div>

        <div className={styles.center}>
          <span className={styles.courseName}>{course.label}</span>
          <span className={styles.conceptBadge}>Projeto não oficial</span>
          <button className={styles.changeBtn} onClick={() => setSelectorOpen(true)}>
            Alterar curso <ChevronDown size={14} />
          </button>
        </div>

        <div className={styles.right}>
          <button className={styles.iconBtn} aria-label="Notificações">
            <Bell size={18} />
          </button>
          <button className={styles.iconBtn} onClick={onLogout} aria-label="Sair do portal" title="Sair">
            <LogOut size={18} />
          </button>
          <div className={styles.user}>
            <div className={styles.avatar} aria-label="Avatar do aluno">GB</div>
            <div className={styles.userInfo}>
              <span className={styles.userName}>Gustavo Brito</span>
              <span className={styles.userRa}>RA: 00000000</span>
            </div>
            <ChevronDown size={14} className={styles.userChevron} />
          </div>
        </div>
      </header>

      <CourseSelector open={selectorOpen} onClose={() => setSelectorOpen(false)} />
    </>
  );
}
