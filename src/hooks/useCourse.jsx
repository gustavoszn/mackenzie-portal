import { createContext, useContext, useState } from 'react';
import { COURSE_DATA } from '../data/courses';

const CourseContext = createContext(null);

export function CourseProvider({ children }) {
  const [courseId, setCourseId] = useState('sistemas-informacao');
  const course = COURSE_DATA[courseId];

  return (
    <CourseContext.Provider value={{ courseId, setCourseId, course }}>
      {children}
    </CourseContext.Provider>
  );
}

export function useCourse() {
  return useContext(CourseContext);
}
