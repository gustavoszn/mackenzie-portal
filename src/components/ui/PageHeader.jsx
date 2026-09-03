import styles from './PageHeader.module.css';

export default function PageHeader({ title, description, eyebrow, actions, children }) {
  return (
    <header className={styles.header}>
      <div className={styles.copy}>
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
        <h1 className={styles.title}>{title}</h1>
        {description && <p className={styles.description}>{description}</p>}
      </div>
      {actions && <div className={styles.actions}>{actions}</div>}
      {children}
    </header>
  );
}
