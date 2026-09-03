import { useCourse } from '../../hooks/useCourse';
import StatusBadge from '../../components/ui/StatusBadge';
import styles from './Grades.module.css';

const MOCK_GRADES = {
  n1: [8.5, 7.0, 9.0, 6.5, 8.0, 7.5, 9.5, 8.0],
  n2: [7.8, 8.2, 8.5, 7.0, 7.5, 8.0, 9.0, 7.8],
  proj: [9.0, 8.5, 9.5, 7.5, 8.5, 8.0, 9.0, 8.5],
};

function avg(a, b, c) {
  return ((a + b + c) / 3).toFixed(1);
}

export default function Grades() {
  const { course } = useCourse();
  const subjects = course.subjects.filter(s => s.status === 'em-andamento');

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <h1 className={styles.title}>Notas</h1>
        <span className={styles.period}>2026/2</span>
      </div>

      <div className={styles.list}>
        {subjects.map((s, i) => {
          const n1 = MOCK_GRADES.n1[i] ?? 0;
          const n2 = MOCK_GRADES.n2[i] ?? 0;
          const proj = MOCK_GRADES.proj[i] ?? 0;
          const media = parseFloat(avg(n1, n2, proj));
          const status = media >= 5 ? 'em-andamento' : 'reprovado';

          return (
            <div key={s.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <div>
                  <p className={styles.subjectName}>{s.name}</p>
                  <p className={styles.subjectCode}>{s.code}</p>
                </div>
                <StatusBadge status={status} />
              </div>
              <div className={styles.grades}>
                <div className={styles.gradeItem}>
                  <span className={styles.gradeLabel}>N1</span>
                  <span className={styles.gradeValue}>{n1.toFixed(1)}</span>
                </div>
                <div className={styles.gradeItem}>
                  <span className={styles.gradeLabel}>N2</span>
                  <span className={styles.gradeValue}>{n2.toFixed(1)}</span>
                </div>
                <div className={styles.gradeItem}>
                  <span className={styles.gradeLabel}>Projeto</span>
                  <span className={styles.gradeValue}>{proj.toFixed(1)}</span>
                </div>
                <div className={`${styles.gradeItem} ${styles.mediaItem}`}>
                  <span className={styles.gradeLabel}>Média</span>
                  <span className={`${styles.gradeValue} ${media >= 5 ? styles.pass : styles.fail}`}>{media.toFixed(1)}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
