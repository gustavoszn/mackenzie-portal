import { useState } from 'react';
import { Search, FileText, ChevronRight } from 'lucide-react';
import { REQUESTS_AVAILABLE, REQUESTS_SUBMITTED } from '../../data/requests';
import StatusBadge from '../../components/ui/StatusBadge';
import Toast from '../../components/ui/Toast';
import styles from './Requests.module.css';

export default function Requests() {
  const [tab, setTab] = useState('available');
  const [search, setSearch] = useState('');
  const [toast, setToast] = useState(null);

  const filtered = REQUESTS_AVAILABLE.filter(r =>
    r.type.toLowerCase().includes(search.toLowerCase()) ||
    r.group.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.page}>
      {toast && <Toast message={toast} type="success" onClose={() => setToast(null)} />}

      <h1 className={styles.title}>Requerimentos</h1>

      <div className={styles.tabs} role="tablist">
        <button
          role="tab"
          aria-selected={tab === 'available'}
          className={`${styles.tab} ${tab === 'available' ? styles.tabActive : ''}`}
          onClick={() => setTab('available')}
        >
          Disponíveis
        </button>
        <button
          role="tab"
          aria-selected={tab === 'submitted'}
          className={`${styles.tab} ${tab === 'submitted' ? styles.tabActive : ''}`}
          onClick={() => setTab('submitted')}
        >
          Solicitados
        </button>
      </div>

      {tab === 'available' && (
        <>
          <div className={styles.searchBar}>
            <Search size={16} className={styles.searchIcon} />
            <input
              type="search"
              placeholder="Buscar requerimento..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className={styles.searchInput}
              aria-label="Buscar requerimento"
            />
          </div>

          <div className={styles.list}>
            {filtered.map(r => (
              <div key={r.id} className={styles.item}>
                <div className={styles.itemLeft}>
                  <FileText size={16} className={styles.itemIcon} />
                  <div>
                    <p className={styles.itemType}>{r.type}</p>
                    <p className={styles.itemGroup}>{r.group}</p>
                  </div>
                </div>
                <div className={styles.itemRight}>
                  <span className={styles.itemValue}>{r.value}</span>
                  <button
                    className={styles.detailBtn}
                    onClick={() => setToast(`Solicitação demonstrativa de "${r.type}" registrada.`)}
                  >
                    Solicitar <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <p className={styles.empty}>Nenhum requerimento encontrado.</p>
            )}
          </div>
        </>
      )}

      {tab === 'submitted' && (
        <div className={styles.list}>
          {REQUESTS_SUBMITTED.map(r => (
            <div key={r.id} className={styles.item}>
              <div className={styles.itemLeft}>
                <FileText size={16} className={styles.itemIcon} />
                <div>
                  <p className={styles.itemType}>{r.type}</p>
                  <p className={styles.itemGroup}>Protocolo: {r.protocol} · {r.date}</p>
                </div>
              </div>
              <StatusBadge status={r.status} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
