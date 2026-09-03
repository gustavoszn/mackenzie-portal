import { Check } from 'lucide-react';
import { COURSES } from '../../data/courses';
import { useCourse } from '../../hooks/useCourse';
import Modal from '../ui/Modal';
import styles from './CourseSelector.module.css';

export default function CourseSelector({ open, onClose }) {
  const { courseId, setCourseId } = useCourse();

  function select(id) {
    setCourseId(id);
    onClose();
  }

  return (
    <Modal open={open} onClose={onClose} title="Selecionar Curso">
      <ul className={styles.list} role="listbox" aria-label="Cursos disponíveis">
        {COURSES.map(c => (
          <li key={c.id}>
            <button
              className={`${styles.item} ${c.id === courseId ? styles.active : ''}`}
              onClick={() => select(c.id)}
              role="option"
              aria-selected={c.id === courseId}
            >
              <span>{c.label}</span>
              {c.id === courseId && <Check size={16} />}
            </button>
          </li>
        ))}
      </ul>
    </Modal>
  );
}
