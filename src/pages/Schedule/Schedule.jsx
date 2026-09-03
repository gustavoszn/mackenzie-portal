import { useMemo, useState } from 'react';
import { CalendarDays, ChevronDown, Clock3, MapPin, Monitor, UserRound } from 'lucide-react';
import { useCourse } from '../../hooks/useCourse';
import EmptyState from '../../components/ui/EmptyState';
import PageHeader from '../../components/ui/PageHeader';
import styles from './Schedule.module.css';

const DAYS = [
  { key: 'segunda', short: 'SEG', label: 'Segunda-feira' },
  { key: 'terca', short: 'TER', label: 'Terça-feira' },
  { key: 'quarta', short: 'QUA', label: 'Quarta-feira' },
  { key: 'quinta', short: 'QUI', label: 'Quinta-feira' },
  { key: 'sexta', short: 'SEX', label: 'Sexta-feira' },
];

const TODAY_KEY = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'][new Date().getDay()];
const DEFAULT_DAY = DAYS.some(day => day.key === TODAY_KEY) ? TODAY_KEY : 'segunda';

function ClassDetails({ item, compact = false }) {
  return (
    <article className={`${styles.classCard} ${compact ? styles.classCardCompact : ''}`}>
      <div className={styles.classAccent} aria-hidden="true" />
      <div className={styles.classContent}>
        <h3>{item.subject}</h3>
        <div className={styles.primaryMeta}>
          <span><Clock3 size={14} />{item.start} – {item.end}</span>
          <span><MapPin size={14} />{item.room}</span>
        </div>
        <div className={styles.secondaryMeta}>
          <span><UserRound size={13} />{item.professor}</span>
          <span className={styles.mode}><Monitor size={12} />{item.mode}</span>
        </div>
      </div>
    </article>
  );
}

function WeeklySchedule({ schedule }) {
  const periods = useMemo(() => {
    const slots = new Map();
    DAYS.forEach(day => (schedule[day.key] || []).forEach(item => {
      const key = `${item.start}-${item.end}`;
      if (!slots.has(key)) slots.set(key, { start: item.start, end: item.end });
    }));
    return [...slots.values()].sort((a, b) => a.start.localeCompare(b.start));
  }, [schedule]);

  return (
    <section className={styles.weekPanel} aria-label="Grade semanal de aulas">
      <div className={styles.weekHeader} aria-hidden="true">
        <div className={styles.timeHeading}>Horário</div>
        {DAYS.map(day => (
          <div className={`${styles.dayHeading} ${day.key === TODAY_KEY ? styles.todayHeading : ''}`} key={day.key}>
            <span>{day.short}</span>
            <small>{day.label.replace('-feira', '')}</small>
            {day.key === TODAY_KEY && <em>Hoje</em>}
          </div>
        ))}
      </div>
      <div className={styles.weekBody}>
        {periods.map(period => (
          <div className={styles.weekRow} key={`${period.start}-${period.end}`}>
            <div className={styles.timeSlot}><strong>{period.start}</strong><span>{period.end}</span></div>
            {DAYS.map(day => {
              const item = (schedule[day.key] || []).find(entry => entry.start === period.start && entry.end === period.end);
              return <div className={styles.daySlot} key={day.key}>{item ? <ClassDetails item={item} compact /> : <span className={styles.freeSlot}>—</span>}</div>;
            })}
          </div>
        ))}
      </div>
    </section>
  );
}

function DailySchedule({ schedule, activeDay, setActiveDay }) {
  const selected = DAYS.find(day => day.key === activeDay);
  const classes = schedule[activeDay] || [];
  return (
    <section className={styles.mobileSchedule} aria-label={`Aulas de ${selected.label}`}>
      <div className={styles.mobileDate}><span>{activeDay === TODAY_KEY ? 'Hoje,' : 'Aulas de'}</span> {selected.label.toLowerCase()}</div>
      <div className={styles.daySelector} role="tablist" aria-label="Selecionar dia da semana">
        {DAYS.map(day => (
          <button key={day.key} role="tab" aria-selected={activeDay === day.key} className={`${styles.dayButton} ${activeDay === day.key ? styles.dayButtonActive : ''}`} onClick={() => setActiveDay(day.key)}>
            <span>{day.short}</span>{day.key === TODAY_KEY && <i aria-label="Hoje" />}
          </button>
        ))}
      </div>
      {classes.length ? (
        <div className={styles.timeline} role="list">
          {classes.map(item => (
            <div className={styles.timelineItem} role="listitem" key={`${item.start}-${item.subject}`}>
              <div className={styles.timelineTime} aria-hidden="true"><strong>{item.start}</strong><span>{item.end}</span></div>
              <div className={styles.timelineRail} aria-hidden="true"><i /></div>
              <ClassDetails item={item} />
            </div>
          ))}
        </div>
      ) : <div className={styles.emptyWrap}><EmptyState icon={CalendarDays} title="Nenhuma aula programada" description="Aproveite seu tempo livre." /></div>}
    </section>
  );
}

export default function Schedule() {
  const { course } = useCourse();
  const [activeDay, setActiveDay] = useState(DEFAULT_DAY);
  return (
    <div className={styles.page}>
      <PageHeader eyebrow="Vida acadêmica" title="Quadro de Horários" description="Visualize suas aulas da semana de forma rápida e organizada." actions={<><button className={styles.todayButton} onClick={() => setActiveDay(DEFAULT_DAY)}><CalendarDays size={16} /> Hoje</button><button className={styles.periodButton} aria-label="Selecionar período letivo"><span><small>Período letivo</small>2026/2</span><ChevronDown size={16} /></button></>} />
      <WeeklySchedule schedule={course.schedule} />
      <DailySchedule schedule={course.schedule} activeDay={activeDay} setActiveDay={setActiveDay} />
    </div>
  );
}
