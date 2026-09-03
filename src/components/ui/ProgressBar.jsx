import styles from './ProgressBar.module.css';

export default function ProgressBar({ value, max, label, showPercent = true }) {
  const pct = Math.min(100, Math.round((value / max) * 100));
  return (
    <div className={styles.wrapper}>
      {label && <div className={styles.label}>{label}</div>}
      <div className={styles.track} role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
        <div className={styles.fill} style={{ width: `${pct}%` }} />
      </div>
      {showPercent && <div className={styles.pct}>{pct}%</div>}
    </div>
  );
}
