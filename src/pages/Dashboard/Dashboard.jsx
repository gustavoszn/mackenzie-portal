import { useState } from 'react';
import { Clock, BookOpen, AlertTriangle, Calendar, DollarSign, Grid, FileText, TrendingUp, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCourse } from '../../hooks/useCourse';
import CourseSelector from '../../components/navigation/CourseSelector';
import styles from './Dashboard.module.css';

function StatCard({ icon: Icon, label, value, sub, color, to }) {
  const inner = (
    <div className={`${styles.statCard} ${styles[color] || ''}`}>
      <div className={styles.statIcon}><Icon size={20} /></div>
      <div className={styles.statBody}>
        <span className={styles.statLabel}>{label}</span>
        <span className={styles.statValue}>{value}</span>
        {sub && <span className={styles.statSub}>{sub}</span>}
      </div>
      {to && <ChevronRight size={16} className={styles.statArrow} />}
    </div>
  );
  return to ? <Link to={to} className={styles.statLink}>{inner}</Link> : inner;
}

function Shortcut({ icon: Icon, label, to }) {
  return (
    <Link to={to} className={styles.shortcut}>
      <Icon size={22} />
      <span>{label}</span>
    </Link>
  );
}

export default function Dashboard() {
  const { course } = useCourse();
  const [selectorOpen, setSelectorOpen] = useState(false);

  const activeSubjects = course.subjects.filter(s => s.status === 'em-andamento');

  return (
    <div className={styles.page}>
      <div className={styles.welcome}>
        <div>
          <h1 className={styles.greeting}>Olá, Gustavo</h1>
          <p className={styles.sub}>Bem-vindo ao Portal do Aluno — {course.label}</p>
        </div>
        <button className={styles.courseBtn} onClick={() => setSelectorOpen(true)}>
          {course.label} <ChevronRight size={14} />
        </button>
      </div>

      <div className={styles.statsGrid}>
        <StatCard
          icon={Clock}
          label="Próxima aula"
          value={course.nextClass.subject}
          sub={`${course.nextClass.time} · ${course.nextClass.room}`}
          color="teal"
          to="/horarios"
        />
        <StatCard
          icon={BookOpen}
          label="Aulas hoje"
          value={`${course.todayClasses} aulas`}
          sub={course.period}
          to="/horarios"
        />
        <StatCard
          icon={TrendingUp}
          label="Frequência"
          value={`${course.attendance}%`}
          sub="Média geral"
          color={course.attendance < 75 ? 'danger' : course.attendance < 85 ? 'warning' : 'success'}
          to="/faltas"
        />
        <StatCard
          icon={Calendar}
          label="Próxima avaliação"
          value={course.nextExam.subject}
          sub={course.nextExam.date}
          to="/notas"
        />
        <StatCard
          icon={DollarSign}
          label="Próximo vencimento"
          value={course.nextDue}
          sub="Mensalidade demonstrativa"
          to="/financeiro"
        />
        <StatCard
          icon={AlertTriangle}
          label="Disciplinas ativas"
          value={activeSubjects.length}
          sub="Em andamento"
          to="/grade"
        />
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Acesso rápido</h2>
        <div className={styles.shortcuts}>
          <Shortcut icon={Clock} label="Horários" to="/horarios" />
          <Shortcut icon={BookOpen} label="Notas" to="/notas" />
          <Shortcut icon={AlertTriangle} label="Faltas" to="/faltas" />
          <Shortcut icon={Grid} label="Grade" to="/grade" />
          <Shortcut icon={DollarSign} label="Financeiro" to="/financeiro" />
          <Shortcut icon={FileText} label="Requerimentos" to="/requerimentos" />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Disciplinas em andamento</h2>
        <div className={styles.subjectList}>
          {activeSubjects.map(s => (
            <div key={s.id} className={styles.subjectItem}>
              <div className={styles.subjectName}>{s.name}</div>
              <div className={styles.subjectMeta}>
                <span>{s.credits} créditos</span>
                <span>{s.hours}h</span>
                <span className={s.absences >= s.absenceLimit * 0.75 ? styles.absWarn : styles.absOk}>
                  {s.absences} falta{s.absences !== 1 ? 's' : ''}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CourseSelector open={selectorOpen} onClose={() => setSelectorOpen(false)} />
    </div>
  );
}
