import styles from './EmptyState.module.css';

export default function EmptyState({ icon: Icon, title, description }) {
  return (
    <div className={styles.empty}>
      {Icon && <Icon size={40} strokeWidth={1.5} className={styles.icon} />}
      <p className={styles.title}>{title}</p>
      {description && <p className={styles.desc}>{description}</p>}
    </div>
  );
}
