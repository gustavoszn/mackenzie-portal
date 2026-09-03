import { AlertTriangle } from 'lucide-react';
import { useCourse } from '../../hooks/useCourse';
import ProgressBar from '../../components/ui/ProgressBar';
import styles from './Absences.module.css';

export default function Absences() {
  const { course } = useCourse();
  const subjects = course.subjects.filter(s => s.status === 'em-andamento');

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <h1 className={styles.title}>Faltas</h1>
        <span className={styles.period}>2026/2</span>
      </div>

      <div className={styles.list}>
        {subjects.map(s => {
          const pct = Math.round((s.absences / s.absenceLimit) * 100);
          const isWarning = pct >= 50;
          const isDanger = pct >= 75;

          return (
            <div key={s.id} className={`${styles.card} ${isDanger ? styles.danger : isWarning ? styles.warning : ''}`}>
              <div className={styles.cardHeader}>
                <div>
                  <p className={styles.subjectName}>{s.name}</p>
                  <p className={styles.subjectCode}>{s.code}</p>
                </div>
                {isDanger && (
                  <div className={styles.alert}>
                    <AlertTriangle size={16} />
                    <span>Atenção</span>
                  </div>
                )}
              </div>

              <div className={styles.stats}>
                <div className={styles.stat}>
                  <span className={styles.statValue}>{s.absences}</span>
                  <span className={styles.statLabel}>Faltas</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statValue}>{s.absenceLimit}</span>
                  <span className={styles.statLabel}>Limite</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statValue}>{s.hours}</span>
                  <span className={styles.statLabel}>Total aulas</span>
                </div>
                <div className={styles.stat}>
                  <span className={`${styles.statValue} ${isDanger ? styles.red : isWarning ? styles.orange : styles.green}`}>
                    {100 - Math.round((s.absences / s.hours) * 100)}%
                  </span>
                  <span className={styles.statLabel}>Frequência</span>
                </div>
              </div>

              <ProgressBar value={s.absences} max={s.absenceLimit} label="Faltas / Limite" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
