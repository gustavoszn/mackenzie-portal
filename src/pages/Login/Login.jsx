import { useState } from 'react';
import { ArrowRight, Info, ShieldCheck } from 'lucide-react';
import styles from './Login.module.css';

export default function Login({ onLogin }) {
  const [loading, setLoading] = useState(false);

  function enterDemo() {
    setLoading(true);
    window.setTimeout(() => onLogin(), 650);
  }

  return (
    <main className={styles.page}>
      <div className={styles.backdrop} />
      <section className={styles.shell} aria-label="Acesso ao Portal do Aluno">
        <div className={styles.brand}>
          <div className={styles.mark}>M</div>
          <div><strong>Mackenzie</strong><span>Portal do Aluno</span></div>
        </div>

        <div className={styles.card}>
          <div className={styles.conceptNotice}>
            <Info size={18} />
            <div><strong>Projeto conceitual independente</strong><span>Não oficial e sem vínculo com a Universidade Presbiteriana Mackenzie.</span></div>
          </div>
          <div className={styles.heading}>
            <span>Estudo de UX/UI</span>
            <h1>Proposta para o Portal do Aluno</h1>
            <p>Explore uma demonstração fictícia da experiência acadêmica.</p>
          </div>

          <div className={styles.safety}><ShieldCheck size={17} /><p>Esta demonstração não solicita usuário, RA ou senha. Todos os dados são fictícios.</p></div>
          <button className={styles.submit} type="button" onClick={enterDemo} disabled={loading}>{loading ? <span className={styles.spinner} /> : <>Entrar na demonstração <ArrowRight size={17} /></>}</button>
        </div>
        <p className={styles.legal}>Concepção, UX/UI e desenvolvimento por Gustavo Brito Rodrigues de Sousa.</p>
      </section>
    </main>
  );
}
