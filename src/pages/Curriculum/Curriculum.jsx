import { BookOpen } from 'lucide-react';
import { useCourse } from '../../hooks/useCourse';
import Accordion from '../../components/ui/Accordion';
import StatusBadge from '../../components/ui/StatusBadge';
import ProgressBar from '../../components/ui/ProgressBar';
import styles from './Curriculum.module.css';

const STAGES = 8;
const STAGE_COMPLEMENTS = [
  ['Introdução aos Sistemas de Informação', 'Algoritmos e Programação I', 'Fundamentos de Administração', 'Projeto Integrador I'],
  ['Algoritmos e Programação II', 'Modelagem de Processos de Negócio', 'Matemática Discreta', 'Projeto Integrador II'],
  ['Estruturas de Dados', 'Banco de Dados I', 'Engenharia de Requisitos', 'Sistemas Empresariais'],
  ['Programação Orientada a Objetos', 'Banco de Dados II', 'Redes de Computadores', 'Projeto Integrador III'],
  ['Engenharia de Software', 'Gestão de Serviços de TI', 'Interação Humano-Computador', 'Análise de Sistemas'],
  ['Arquitetura de Sistemas', 'Segurança da Informação', 'Computação em Nuvem', 'Inteligência de Negócios'],
  ['Desenvolvimento de Sistemas Móveis', 'Análise de Dados para Negócios', 'Governança de TI', 'Auditoria de Sistemas'],
  ['Empreendedorismo Digital', 'Ética e Legislação em TI', 'Trabalho de Conclusão de Curso', 'Gestão Estratégica de SI'],
];

function SubjectRow({ subject }) {
  return (
    <div className={styles.subjectRow}>
      <div className={styles.subjectMain}>
        <span className={styles.subjectCode}>{subject.code}</span>
        <span className={styles.subjectName}>{subject.name}</span>
      </div>
      <div className={styles.subjectDetails}>
        <StatusBadge status={subject.status} />
        <span className={styles.detail}><strong>{subject.credits}</strong> créditos</span>
        <span className={styles.detail}><strong>{subject.hours}h</strong></span>
      </div>
    </div>
  );
}

export default function Curriculum() {
  const { course } = useCourse();
  const stagesMap = Object.fromEntries(Array.from({ length: STAGES }, (_, index) => {
    const stage = index + 1;
    const original = course.subjects[index];
    const generated = STAGE_COMPLEMENTS[index].map((name, itemIndex) => ({
      id: `fictional-${stage}-${itemIndex}`,
      code: `SI${stage}${String(itemIndex + 1).padStart(2, '0')}`,
      name,
      credits: itemIndex === 3 ? 2 : 4,
      hours: itemIndex === 3 ? 38 : 76,
      status: stage === 1 ? 'em-andamento' : 'pendente',
    }));
    return [stage, original ? [original, ...generated] : generated];
  }));
  const subjects = Object.values(stagesMap).flat();

  const concluded = subjects.filter(s => s.status === 'concluido').length;
  const inProgress = subjects.filter(s => s.status === 'em-andamento').length;
  const pending = subjects.filter(s => s.status === 'pendente').length;
  const totalHours = subjects.reduce((a, s) => a + s.hours, 0);
  const concludedHours = subjects.filter(s => s.status === 'concluido').reduce((a, s) => a + s.hours, 0);

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <h1 className={styles.title}>Grade Curricular</h1>
        <div className={styles.meta}>
          <span>Habilitação Padrão</span>
          <span>·</span>
          <span>{course.label}</span>
          <span>·</span>
          <span>{course.period}</span>
        </div>
      </div>

      <div className={styles.summary}>
        <div className={styles.summaryCard}>
          <span className={styles.summaryLabel}>Progresso do curso</span>
          <ProgressBar value={concludedHours} max={totalHours} />
          <span className={styles.summaryHours}>{concludedHours}h de {totalHours}h concluídas</span>
        </div>
        <div className={styles.summaryStats}>
          <div className={styles.stat}><strong>{subjects.length}</strong><span>Total</span></div>
          <div className={styles.stat}><strong className={styles.inProgress}>{inProgress}</strong><span>Em andamento</span></div>
          <div className={styles.stat}><strong className={styles.concluded}>{concluded}</strong><span>Concluídas</span></div>
          <div className={styles.stat}><strong className={styles.pending}>{pending}</strong><span>Pendentes</span></div>
        </div>
      </div>

      <div className={styles.stages}>
        {Object.entries(stagesMap).map(([stage, subs]) => (
          <Accordion
            key={stage}
            title={`Etapa ${String(stage).padStart(2, '0')}`}
            defaultOpen={stage === '1'}
            badge={subs.length}
          >
            <div className={styles.subjectList}>
              {subs.map(s => <SubjectRow key={s.id} subject={s} />)}
            </div>
          </Accordion>
        ))}
      </div>

      {subjects.length === 0 && (
        <div style={{ textAlign: 'center', padding: '48px', color: 'var(--text-muted)' }}>
          <BookOpen size={40} strokeWidth={1.5} />
          <p>Nenhuma disciplina encontrada.</p>
        </div>
      )}
    </div>
  );
}
