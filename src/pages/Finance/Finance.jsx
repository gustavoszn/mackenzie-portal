import { useState } from 'react';
import { DollarSign, Calendar, CheckCircle, Clock, QrCode, CreditCard, FileText } from 'lucide-react';
import { FINANCE_DATA } from '../../data/finance';
import StatusBadge from '../../components/ui/StatusBadge';
import Toast from '../../components/ui/Toast';
import styles from './Finance.module.css';

export default function Finance() {
  const [toast, setToast] = useState(null);

  function handlePay(method) {
    setToast(`Ação demonstrativa: ${method}. Nenhum pagamento real foi realizado.`);
  }

  return (
    <div className={styles.page}>
      {toast && <Toast message={toast} type="success" onClose={() => setToast(null)} />}

      <div className={styles.pageHeader}>
        <h1 className={styles.title}>Financeiro</h1>
        <span className={styles.period}>{FINANCE_DATA.period}</span>
      </div>

      <div className={styles.disclaimer}>
        <strong>Demonstração:</strong> Todos os valores e datas são fictícios. Nenhuma operação financeira real é realizada.
      </div>

      <div className={styles.currentCard}>
        <div className={styles.currentHeader}>
          <DollarSign size={20} />
          <span>Mensalidade — Setembro/2026</span>
        </div>
        <div className={styles.currentBody}>
          <div className={styles.valueBlock}>
            <span className={styles.valueLabel}>Valor demonstrativo</span>
            <span className={styles.value}>R$ 999,99</span>
          </div>
          <div className={styles.dueBlock}>
            <Calendar size={16} />
            <div>
              <span className={styles.dueLabel}>Vencimento</span>
              <span className={styles.dueDate}>{FINANCE_DATA.dueDate}</span>
            </div>
          </div>
        </div>
        <div className={styles.payActions}>
          <button className={`${styles.payBtn} ${styles.pix}`} onClick={() => handlePay('Pix')}>
            <QrCode size={16} /> Pix
          </button>
          <button className={`${styles.payBtn} ${styles.card}`} onClick={() => handlePay('Cartão')}>
            <CreditCard size={16} /> Cartão
          </button>
          <button className={`${styles.payBtn} ${styles.boleto}`} onClick={() => handlePay('Boleto')}>
            <FileText size={16} /> Boleto
          </button>
        </div>
        <p className={styles.demoNote}>DEMONSTRAÇÃO — NÃO REALIZAR PAGAMENTO</p>
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Histórico</h2>
        <div className={styles.historyList}>
          {FINANCE_DATA.history.map(item => (
            <div key={item.id} className={styles.historyItem}>
              <div className={styles.historyLeft}>
                {item.status === 'pago'
                  ? <CheckCircle size={18} className={styles.iconPaid} />
                  : <Clock size={18} className={styles.iconPending} />
                }
                <div>
                  <p className={styles.historyMonth}>{item.month}</p>
                  <p className={styles.historyDue}>Venc. {item.dueDate}</p>
                </div>
              </div>
              <div className={styles.historyRight}>
                <span className={styles.historyValue}>{item.value}</span>
                <StatusBadge status={item.status} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
