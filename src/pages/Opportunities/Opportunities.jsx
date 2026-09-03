import { useState } from 'react';
import { Briefcase, Users, Award, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { OPPORTUNITIES } from '../../data/opportunities';
import Toast from '../../components/ui/Toast';
import styles from './Opportunities.module.css';

const CATEGORY_ICONS = {
  'Monitoria': Users,
  'Estágio/Emprego': Briefcase,
  'Atividades Curriculares': Award,
};

const FILTERS = ['Todos', 'Monitoria', 'Estágio/Emprego', 'Atividades Curriculares'];

export default function Opportunities() {
  const [filter, setFilter] = useState('Todos');
  const [toast, setToast] = useState(null);

  const filtered = filter === 'Todos' ? OPPORTUNITIES : OPPORTUNITIES.filter(o => o.category === filter);

  return (
    <div className={styles.page}>
      {toast && <Toast message={toast} type="success" onClose={() => setToast(null)} />}

      <h1 className={styles.title}>Oportunidades</h1>

      <div className={styles.filters} role="group" aria-label="Filtrar por categoria">
        {FILTERS.map(f => (
          <button
            key={f}
            className={`${styles.filterBtn} ${filter === f ? styles.filterActive : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className={styles.list}>
        {filtered.map(o => {
          const Icon = CATEGORY_ICONS[o.category] || Briefcase;
          return (
            <div key={o.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}><Icon size={18} /></div>
                <div className={styles.cardMeta}>
                  <span className={styles.category}>{o.category}</span>
                  <span className={styles.mode}><MapPin size={12} /> {o.mode}</span>
                </div>
              </div>
              <h3 className={styles.cardTitle}>{o.title}</h3>
              <p className={styles.cardDesc}>{o.description}</p>
              <div className={styles.cardFooter}>
                <span className={styles.deadline}><Calendar size={13} /> Prazo: {o.deadline}</span>
                <button
                  className={styles.applyBtn}
                  onClick={() => setToast(`Inscrição demonstrativa em "${o.title}" registrada.`)}
                >
                  Inscrever-se <ChevronRight size={14} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
