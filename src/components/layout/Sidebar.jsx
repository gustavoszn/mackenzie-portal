import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Monitor, Grid, Clock, UserPlus, RefreshCw, BookOpen,
  Award, TrendingUp, AlertTriangle, FileText, Star, BookMarked,
  ClipboardList, Lightbulb, Users, Briefcase, DollarSign,
  HandshakeIcon, BarChart2, Link, ChevronDown, ChevronRight, X
} from 'lucide-react';
import styles from './Sidebar.module.css';

const NAV = [
  { to: '/', icon: Monitor, label: 'Mural' },
  { to: '/grade', icon: Grid, label: 'Grade Curricular' },
  { to: '/horarios', icon: Clock, label: 'Quadro de Horários' },
  { to: '/matricula', icon: UserPlus, label: 'Matrícula Itinerário' },
  { to: '/rematricula', icon: RefreshCw, label: 'Rematrícula' },
  { to: '/matricula-online', icon: BookOpen, label: 'Matrícula Online' },
  {
    label: 'Central do Aluno', icon: Star, group: true,
    children: [
      { to: '/competencias', icon: Award, label: 'Competências / Habilidades' },
      { to: '/desempenho', icon: TrendingUp, label: 'Desempenho' },
      { to: '/faltas', icon: AlertTriangle, label: 'Faltas' },
      { to: '/nota-falta', icon: FileText, label: 'Nota/Falta Unificada' },
      { to: '/notas', icon: BookMarked, label: 'Notas' },
      { to: '/ocorrencias', icon: ClipboardList, label: 'Ocorrências' },
      { to: '/plano-aula', icon: BookOpen, label: 'Plano de Aula' },
    ]
  },
  {
    label: 'Secretaria', icon: ClipboardList, group: true,
    children: [
      { to: '/requerimentos', icon: FileText, label: 'Requerimentos' },
    ]
  },
  {
    label: 'Oportunidades', icon: Lightbulb, group: true,
    children: [
      { to: '/monitoria', icon: Users, label: 'Monitoria' },
      { to: '/oportunidades', icon: Briefcase, label: 'Estágio / Emprego' },
      { to: '/atividades', icon: Award, label: 'Atividades Curriculares' },
    ]
  },
  { to: '/financeiro', icon: DollarSign, label: 'Financeiro' },
  { to: '/negociacao', icon: HandshakeIcon, label: 'Negociação Online' },
  { to: '/avaliacao', icon: BarChart2, label: 'Avaliação Institucional' },
  {
    label: 'URLs Externas', icon: Link, group: true,
    children: [
      { to: '/canvas', icon: Link, label: 'Canvas' },
      { to: '/proato', icon: Link, label: 'PROATO Inclusão' },
    ]
  },
  { to: '/sobre', icon: FileText, label: 'Sobre o Projeto' },
];

function GroupItem({ item, collapsed }) {
  const location = useLocation();
  const isActive = item.children?.some(c => location.pathname === c.to);
  const [open, setOpen] = useState(isActive);

  if (collapsed) {
    return (
      <div className={styles.groupCollapsed}>
        <div className={styles.groupDivider} title={item.label} />
      </div>
    );
  }

  return (
    <div className={styles.group}>
      <button
        className={`${styles.groupTrigger} ${isActive ? styles.groupActive : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <item.icon size={15} />
        <span>{item.label}</span>
        {open ? <ChevronDown size={13} /> : <ChevronRight size={13} />}
      </button>
      {open && (
        <ul className={styles.subList}>
          {item.children.map(child => (
            <li key={child.to}>
              <NavLink
                to={child.to}
                className={({ isActive }) => `${styles.subItem} ${isActive ? styles.active : ''}`}
              >
                <child.icon size={14} />
                <span>{child.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Sidebar({ collapsed, onClose, isMobile }) {
  return (
    <nav
      className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''} ${isMobile ? styles.mobile : ''}`}
      aria-label="Menu principal"
    >
      {isMobile && (
        <div className={styles.mobileHeader}>
          <div className={styles.mobileLogo}>
            <div className={styles.logoCircle}>M</div>
            <span>Portal do Aluno</span>
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Fechar menu">
            <X size={20} />
          </button>
        </div>
      )}

      <ul className={styles.list}>
        {NAV.map((item, i) => {
          if (item.group) {
            return <li key={i}><GroupItem item={item} collapsed={collapsed && !isMobile} /></li>;
          }
          return (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => `${styles.item} ${isActive ? styles.active : ''}`}
                title={collapsed && !isMobile ? item.label : undefined}
                onClick={isMobile ? onClose : undefined}
              >
                <item.icon size={18} />
                {(!collapsed || isMobile) && <span>{item.label}</span>}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
