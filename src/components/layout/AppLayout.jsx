import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import styles from './AppLayout.module.css';

export default function AppLayout({ children, onLogout }) {
  const location = useLocation();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handler = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setMobileOpen(false);
    };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  function handleMenuToggle() {
    if (isMobile) setMobileOpen(o => !o);
    else setSidebarCollapsed(o => !o);
  }

  const sidebarWidth = isMobile ? 0 : (sidebarCollapsed ? 'var(--sidebar-collapsed)' : 'var(--sidebar-width)');

  return (
    <div className={styles.layout}>
      <Header onMenuToggle={handleMenuToggle} onLogout={onLogout} />

      {isMobile && mobileOpen && (
        <div className={styles.overlay} onClick={() => setMobileOpen(false)} aria-hidden="true" />
      )}

      {isMobile ? (
        mobileOpen && (
          <Sidebar isMobile onClose={() => setMobileOpen(false)} collapsed={false} />
        )
      ) : (
        <Sidebar collapsed={sidebarCollapsed} />
      )}

      <main
        className={styles.main}
        style={{ marginLeft: sidebarWidth }}
      >
        <div className={styles.content}>
          <div className={styles.pageTransition} key={location.pathname}>
            {children}
          </div>
        </div>
        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <p className={styles.footerTitle}>Portal do Aluno Mackenzie — Redesign Conceitual</p>
            <p className={styles.footerAuthor}>Idealização, UX/UI e Desenvolvimento Front-End: <strong>Gustavo Brito Rodrigues de Sousa</strong></p>
            <p className={styles.footerDisclaimer}>
              Projeto independente e não oficial, desenvolvido para fins acadêmicos, demonstrativos e de portfólio.
              A Universidade Presbiteriana Mackenzie, sua marca e logotipos pertencem aos seus respectivos titulares.
            </p>
            <p className={styles.footerCopy}>© 2026 Gustavo Brito Rodrigues de Sousa. Todos os direitos reservados sobre esta proposta de redesign.</p>
          </div>
        </footer>
      </main>

      <div className={styles.watermark} aria-hidden="true">
        Gustavo Brito Rodrigues de Sousa — Concept Project
      </div>
    </div>
  );
}
