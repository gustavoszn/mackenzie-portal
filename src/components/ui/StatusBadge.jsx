import styles from './StatusBadge.module.css';

const MAP = {
  'em-andamento': { label: 'Em andamento', cls: 'info' },
  'concluido': { label: 'Concluído', cls: 'success' },
  'pendente': { label: 'Pendente', cls: 'warning' },
  'reprovado': { label: 'Reprovado', cls: 'danger' },
  'pago': { label: 'Pago', cls: 'success' },
  'em-analise': { label: 'Em análise', cls: 'info' },
  'vencido': { label: 'Vencido', cls: 'danger' },
};

export default function StatusBadge({ status }) {
  const config = MAP[status] || { label: status, cls: 'info' };
  return <span className={`${styles.badge} ${styles[config.cls]}`}>{config.label}</span>;
}
