export const COURSES = [
  { id: 'administracao', label: 'Administração' },
  { id: 'ciencias-contabeis', label: 'Ciências Contábeis' },
  { id: 'direito', label: 'Direito' },
  { id: 'medicina', label: 'Medicina' },
  { id: 'sistemas-informacao', label: 'Sistemas de Informação' },
];

export const COURSE_DATA = {
  'administracao': {
    label: 'Administração',
    period: 'Noturno',
    nextClass: { subject: 'Gestão Estratégica', time: '19:20 – 21:00', room: 'Sala C301', professor: 'Prof. Carlos Mendes' },
    nextExam: { subject: 'Finanças Empresariais', date: '28/09' },
    nextDue: '15/09/2026',
    attendance: 91,
    todayClasses: 2,
    subjects: [
      { id: 1, code: 'ADM101', name: 'Fundamentos de Administração', credits: 4, hours: 76, status: 'em-andamento', grade: null, absences: 1, absenceLimit: 18 },
      { id: 2, code: 'ADM102', name: 'Gestão Estratégica', credits: 4, hours: 76, status: 'em-andamento', grade: null, absences: 0, absenceLimit: 18 },
      { id: 3, code: 'ADM103', name: 'Economia Aplicada', credits: 2, hours: 38, status: 'em-andamento', grade: null, absences: 2, absenceLimit: 9 },
      { id: 4, code: 'ADM104', name: 'Gestão de Pessoas', credits: 4, hours: 76, status: 'em-andamento', grade: null, absences: 0, absenceLimit: 18 },
      { id: 5, code: 'ADM201', name: 'Marketing e Mercado', credits: 4, hours: 76, status: 'pendente', grade: null, absences: 0, absenceLimit: 18 },
      { id: 6, code: 'ADM202', name: 'Finanças Empresariais', credits: 4, hours: 76, status: 'pendente', grade: null, absences: 0, absenceLimit: 18 },
      { id: 7, code: 'ADM301', name: 'Empreendedorismo', credits: 2, hours: 38, status: 'pendente', grade: null, absences: 0, absenceLimit: 9 },
      { id: 8, code: 'ADM401', name: 'Projeto de Negócios', credits: 4, hours: 76, status: 'pendente', grade: null, absences: 0, absenceLimit: 18 },
    ],
    schedule: {
      segunda: [
        { subject: 'Fundamentos de Administração', start: '19:20', end: '21:00', room: 'Sala C301', professor: 'Prof. Carlos Mendes', mode: 'Presencial' },
        { subject: 'Gestão de Pessoas', start: '21:10', end: '22:50', room: 'Sala C302', professor: 'Profa. Ana Lima', mode: 'Presencial' },
      ],
      terca: [
        { subject: 'Economia Aplicada', start: '19:20', end: '21:00', room: 'Sala C201', professor: 'Prof. Roberto Faria', mode: 'Presencial' },
      ],
      quarta: [
        { subject: 'Gestão Estratégica', start: '19:20', end: '21:00', room: 'Sala C301', professor: 'Prof. Carlos Mendes', mode: 'Presencial' },
        { subject: 'Fundamentos de Administração', start: '21:10', end: '22:50', room: 'Sala C301', professor: 'Prof. Carlos Mendes', mode: 'Presencial' },
      ],
      quinta: [
        { subject: 'Gestão de Pessoas', start: '19:20', end: '21:00', room: 'Sala C302', professor: 'Profa. Ana Lima', mode: 'Presencial' },
      ],
      sexta: [
        { subject: 'Economia Aplicada', start: '19:20', end: '20:10', room: 'Sala C201', professor: 'Prof. Roberto Faria', mode: 'Presencial' },
        { subject: 'Gestão Estratégica', start: '20:10', end: '22:50', room: 'Sala C301', professor: 'Prof. Carlos Mendes', mode: 'Presencial' },
      ],
    },
  },
  'ciencia-computacao': {
    label: 'Ciência da Computação',
    period: 'Noturno',
    nextClass: { subject: 'Estruturas de Dados', time: '19:20 – 21:00', room: 'Sala A101', professor: 'Prof. Paulo Souza' },
    nextExam: { subject: 'Banco de Dados', date: '26/09' },
    nextDue: '15/09/2026',
    attendance: 93,
    todayClasses: 3,
    subjects: [
      { id: 1, code: 'CC101', name: 'Fundamentos de Computação', credits: 4, hours: 76, status: 'em-andamento', grade: null, absences: 0, absenceLimit: 18 },
      { id: 2, code: 'CC102', name: 'Algoritmos e Programação', credits: 4, hours: 76, status: 'em-andamento', grade: null, absences: 1, absenceLimit: 18 },
      { id: 3, code: 'CC103', name: 'Estruturas de Dados', credits: 4, hours: 76, status: 'em-andamento', grade: null, absences: 0, absenceLimit: 18 },
      { id: 4, code: 'CC104', name: 'Arquitetura de Computadores', credits: 4, hours: 76, status: 'em-andamento', grade: null, absences: 2, absenceLimit: 18 },
      { id: 5, code: 'CC201', name: 'Banco de Dados', credits: 4, hours: 76, status: 'pendente', grade: null, absences: 0, absenceLimit: 18 },
      { id: 6, code: 'CC202', name: 'Engenharia de Software', credits: 4, hours: 76, status: 'pendente', grade: null, absences: 0, absenceLimit: 18 },
      { id: 7, code: 'CC301', name: 'Redes de Computadores', credits: 4, hours: 76, status: 'pendente', grade: null, absences: 0, absenceLimit: 18 },
      { id: 8, code: 'CC401', name: 'Projeto Computacional', credits: 4, hours: 76, status: 'pendente', grade: null, absences: 0, absenceLimit: 18 },
    ],
    schedule: {
      segunda: [
        { subject: 'Fundamentos de Computação', start: '19:20', end: '21:00', room: 'Sala A101', professor: 'Prof. Paulo Souza', mode: 'Presencial' },
        { subject: 'Algoritmos e Programação', start: '21:10', end: '22:50', room: 'Sala A102', professor: 'Profa. Fernanda Costa', mode: 'Presencial' },
      ],
      terca: [
        { subject: 'Estruturas de Dados', start: '19:20', end: '21:00', room: 'Sala A101', professor: 'Prof. Paulo Souza', mode: 'Presencial' },
        { subject: 'Arquitetura de Computadores', start: '21:10', end: '22:50', room: 'Sala A103', professor: 'Prof. Marcos Vieira', mode: 'Presencial' },
      ],
      quarta: [
        { subject: 'Algoritmos e Programação', start: '19:20', end: '21:00', room: 'Sala A102', professor: 'Profa. Fernanda Costa', mode: 'Presencial' },
      ],
      quinta: [
        { subject: 'Fundamentos de Computação', start: '19:20', end: '21:00', room: 'Sala A101', professor: 'Prof. Paulo Souza', mode: 'Presencial' },
        { subject: 'Estruturas de Dados', start: '21:10', end: '22:50', room: 'Sala A101', professor: 'Prof. Paulo Souza', mode: 'Presencial' },
      ],
      sexta: [
        { subject: 'Arquitetura de Computadores', start: '19:20', end: '21:00', room: 'Sala A103', professor: 'Prof. Marcos Vieira', mode: 'Presencial' },
      ],
    },
  },
  'ciencias-contabeis': {
    label: 'Ciências Contábeis',
    period: 'Noturno',
    nextClass: { subject: 'Contabilidade Empresarial', time: '19:20 – 21:00', room: 'Sala B201', professor: 'Profa. Sandra Rocha' },
    nextExam: { subject: 'Análise de Demonstrações', date: '27/09' },
    nextDue: '15/09/2026',
    attendance: 89,
    todayClasses: 2,
    subjects: [
      { id: 1, code: 'CONT101', name: 'Fundamentos de Contabilidade', credits: 4, hours: 76, status: 'em-andamento', grade: null, absences: 2, absenceLimit: 18 },
      { id: 2, code: 'CONT102', name: 'Contabilidade Empresarial', credits: 4, hours: 76, status: 'em-andamento', grade: null, absences: 0, absenceLimit: 18 },
      { id: 3, code: 'CONT103', name: 'Análise de Demonstrações', credits: 4, hours: 76, status: 'em-andamento', grade: null, absences: 1, absenceLimit: 18 },
      { id: 4, code: 'CONT104', name: 'Gestão Financeira', credits: 4, hours: 76, status: 'em-andamento', grade: null, absences: 0, absenceLimit: 18 },
      { id: 5, code: 'CONT201', name: 'Auditoria e Controladoria', credits: 4, hours: 76, status: 'pendente', grade: null, absences: 0, absenceLimit: 18 },
      { id: 6, code: 'CONT202', name: 'Contabilidade de Custos', credits: 4, hours: 76, status: 'pendente', grade: null, absences: 0, absenceLimit: 18 },
      { id: 7, code: 'CONT301', name: 'Legislação Empresarial', credits: 2, hours: 38, status: 'pendente', grade: null, absences: 0, absenceLimit: 9 },
      { id: 8, code: 'CONT401', name: 'Projeto Contábil', credits: 4, hours: 76, status: 'pendente', grade: null, absences: 0, absenceLimit: 18 },
    ],
    schedule: {
      segunda: [
        { subject: 'Fundamentos de Contabilidade', start: '19:20', end: '21:00', room: 'Sala B201', professor: 'Profa. Sandra Rocha', mode: 'Presencial' },
      ],
      terca: [
        { subject: 'Contabilidade Empresarial', start: '19:20', end: '21:00', room: 'Sala B201', professor: 'Profa. Sandra Rocha', mode: 'Presencial' },
        { subject: 'Gestão Financeira', start: '21:10', end: '22:50', room: 'Sala B202', professor: 'Prof. Eduardo Pinto', mode: 'Presencial' },
      ],
      quarta: [
        { subject: 'Análise de Demonstrações', start: '19:20', end: '21:00', room: 'Sala B203', professor: 'Prof. Ricardo Alves', mode: 'Presencial' },
      ],
      quinta: [
        { subject: 'Fundamentos de Contabilidade', start: '19:20', end: '21:00', room: 'Sala B201', professor: 'Profa. Sandra Rocha', mode: 'Presencial' },
        { subject: 'Análise de Demonstrações', start: '21:10', end: '22:50', room: 'Sala B203', professor: 'Prof. Ricardo Alves', mode: 'Presencial' },
      ],
      sexta: [
        { subject: 'Gestão Financeira', start: '19:20', end: '21:00', room: 'Sala B202', professor: 'Prof. Eduardo Pinto', mode: 'Presencial' },
      ],
    },
  },
  'direito': {
    label: 'Direito',
    period: 'Noturno',
    nextClass: { subject: 'Direito Constitucional', time: '19:20 – 21:00', room: 'Sala D401', professor: 'Prof. Henrique Leal' },
    nextExam: { subject: 'Direito Civil', date: '30/09' },
    nextDue: '15/09/2026',
    attendance: 87,
    todayClasses: 2,
    subjects: [
      { id: 1, code: 'DIR101', name: 'Introdução ao Direito', credits: 4, hours: 76, status: 'em-andamento', grade: null, absences: 3, absenceLimit: 18 },
      { id: 2, code: 'DIR102', name: 'Direito Constitucional', credits: 4, hours: 76, status: 'em-andamento', grade: null, absences: 1, absenceLimit: 18 },
      { id: 3, code: 'DIR103', name: 'Direito Civil', credits: 4, hours: 76, status: 'em-andamento', grade: null, absences: 0, absenceLimit: 18 },
      { id: 4, code: 'DIR104', name: 'Ética e Sociedade', credits: 2, hours: 38, status: 'em-andamento', grade: null, absences: 0, absenceLimit: 9 },
      { id: 5, code: 'DIR201', name: 'Direito Empresarial', credits: 4, hours: 76, status: 'pendente', grade: null, absences: 0, absenceLimit: 18 },
      { id: 6, code: 'DIR202', name: 'Direito Penal', credits: 4, hours: 76, status: 'pendente', grade: null, absences: 0, absenceLimit: 18 },
      { id: 7, code: 'DIR301', name: 'Direitos Fundamentais', credits: 4, hours: 76, status: 'pendente', grade: null, absences: 0, absenceLimit: 18 },
      { id: 8, code: 'DIR401', name: 'Prática Jurídica', credits: 4, hours: 76, status: 'pendente', grade: null, absences: 0, absenceLimit: 18 },
    ],
    schedule: {
      segunda: [
        { subject: 'Introdução ao Direito', start: '19:20', end: '21:00', room: 'Sala D401', professor: 'Prof. Henrique Leal', mode: 'Presencial' },
        { subject: 'Ética e Sociedade', start: '21:10', end: '22:50', room: 'Sala D402', professor: 'Profa. Beatriz Nunes', mode: 'Presencial' },
      ],
      terca: [
        { subject: 'Direito Constitucional', start: '19:20', end: '21:00', room: 'Sala D401', professor: 'Prof. Henrique Leal', mode: 'Presencial' },
      ],
      quarta: [
        { subject: 'Direito Civil', start: '19:20', end: '21:00', room: 'Sala D403', professor: 'Profa. Carla Monteiro', mode: 'Presencial' },
        { subject: 'Introdução ao Direito', start: '21:10', end: '22:50', room: 'Sala D401', professor: 'Prof. Henrique Leal', mode: 'Presencial' },
      ],
      quinta: [
        { subject: 'Direito Constitucional', start: '19:20', end: '21:00', room: 'Sala D401', professor: 'Prof. Henrique Leal', mode: 'Presencial' },
        { subject: 'Direito Civil', start: '21:10', end: '22:50', room: 'Sala D403', professor: 'Profa. Carla Monteiro', mode: 'Presencial' },
      ],
      sexta: [
        { subject: 'Ética e Sociedade', start: '19:20', end: '20:10', room: 'Sala D402', professor: 'Profa. Beatriz Nunes', mode: 'Presencial' },
      ],
    },
  },
  'medicina': {
    label: 'Medicina',
    period: 'Integral',
    nextClass: { subject: 'Fisiologia Aplicada', time: '08:00 – 10:00', room: 'Lab. M1', professor: 'Profa. Juliana Ferreira' },
    nextExam: { subject: 'Anatomia Humana', date: '24/09' },
    nextDue: '15/09/2026',
    attendance: 96,
    todayClasses: 4,
    subjects: [
      { id: 1, code: 'MED101', name: 'Fundamentos das Ciências da Saúde', credits: 6, hours: 114, status: 'em-andamento', grade: null, absences: 0, absenceLimit: 27 },
      { id: 2, code: 'MED102', name: 'Anatomia Humana', credits: 6, hours: 114, status: 'em-andamento', grade: null, absences: 1, absenceLimit: 27 },
      { id: 3, code: 'MED103', name: 'Fisiologia Aplicada', credits: 6, hours: 114, status: 'em-andamento', grade: null, absences: 0, absenceLimit: 27 },
      { id: 4, code: 'MED104', name: 'Bases Biológicas da Medicina', credits: 4, hours: 76, status: 'em-andamento', grade: null, absences: 0, absenceLimit: 18 },
      { id: 5, code: 'MED201', name: 'Saúde Coletiva', credits: 4, hours: 76, status: 'pendente', grade: null, absences: 0, absenceLimit: 18 },
      { id: 6, code: 'MED202', name: 'Introdução à Prática Médica', credits: 4, hours: 76, status: 'pendente', grade: null, absences: 0, absenceLimit: 18 },
      { id: 7, code: 'MED301', name: 'Clínica Integrada', credits: 6, hours: 114, status: 'pendente', grade: null, absences: 0, absenceLimit: 27 },
      { id: 8, code: 'MED401', name: 'Ética e Humanização em Saúde', credits: 2, hours: 38, status: 'pendente', grade: null, absences: 0, absenceLimit: 9 },
    ],
    schedule: {
      segunda: [
        { subject: 'Fundamentos das Ciências da Saúde', start: '08:00', end: '10:00', room: 'Lab. M1', professor: 'Prof. Rodrigo Campos', mode: 'Presencial' },
        { subject: 'Anatomia Humana', start: '10:10', end: '12:00', room: 'Lab. M2', professor: 'Profa. Juliana Ferreira', mode: 'Presencial' },
      ],
      terca: [
        { subject: 'Fisiologia Aplicada', start: '08:00', end: '10:00', room: 'Lab. M1', professor: 'Profa. Juliana Ferreira', mode: 'Presencial' },
        { subject: 'Bases Biológicas da Medicina', start: '10:10', end: '12:00', room: 'Sala M301', professor: 'Prof. André Nascimento', mode: 'Presencial' },
      ],
      quarta: [
        { subject: 'Anatomia Humana', start: '08:00', end: '10:00', room: 'Lab. M2', professor: 'Profa. Juliana Ferreira', mode: 'Presencial' },
        { subject: 'Fisiologia Aplicada', start: '10:10', end: '12:00', room: 'Lab. M1', professor: 'Profa. Juliana Ferreira', mode: 'Presencial' },
      ],
      quinta: [
        { subject: 'Fundamentos das Ciências da Saúde', start: '08:00', end: '10:00', room: 'Lab. M1', professor: 'Prof. Rodrigo Campos', mode: 'Presencial' },
        { subject: 'Bases Biológicas da Medicina', start: '10:10', end: '12:00', room: 'Sala M301', professor: 'Prof. André Nascimento', mode: 'Presencial' },
      ],
      sexta: [
        { subject: 'Anatomia Humana', start: '08:00', end: '10:00', room: 'Lab. M2', professor: 'Profa. Juliana Ferreira', mode: 'Presencial' },
        { subject: 'Fisiologia Aplicada', start: '10:10', end: '12:00', room: 'Lab. M1', professor: 'Profa. Juliana Ferreira', mode: 'Presencial' },
      ],
    },
  },
  'sistemas-informacao': {
    label: 'Sistemas de Informação',
    period: 'Noturno',
    nextClass: { subject: 'Desenvolvimento Web', time: '19:20 – 21:00', room: 'Sala A204', professor: 'Prof. Renato Martins' },
    nextExam: { subject: 'Engenharia de Software', date: '25/09' },
    nextDue: '15/09/2026',
    attendance: 94,
    todayClasses: 3,
    subjects: [
      { id: 1, code: 'SI101', name: 'Fundamentos de Programação', credits: 4, hours: 76, status: 'em-andamento', grade: null, absences: 0, absenceLimit: 18 },
      { id: 2, code: 'SI102', name: 'Desenvolvimento de Sistemas', credits: 4, hours: 76, status: 'em-andamento', grade: null, absences: 2, absenceLimit: 18 },
      { id: 3, code: 'SI103', name: 'Banco de Dados Aplicado', credits: 4, hours: 76, status: 'em-andamento', grade: null, absences: 0, absenceLimit: 18 },
      { id: 4, code: 'SI104', name: 'Engenharia de Software', credits: 4, hours: 76, status: 'em-andamento', grade: null, absences: 1, absenceLimit: 18 },
      { id: 5, code: 'SI201', name: 'Arquitetura de Sistemas', credits: 4, hours: 76, status: 'pendente', grade: null, absences: 0, absenceLimit: 18 },
      { id: 6, code: 'SI202', name: 'Sistemas Corporativos', credits: 4, hours: 76, status: 'pendente', grade: null, absences: 0, absenceLimit: 18 },
      { id: 7, code: 'SI301', name: 'Desenvolvimento Web', credits: 4, hours: 76, status: 'em-andamento', grade: null, absences: 0, absenceLimit: 18 },
      { id: 8, code: 'SI401', name: 'Projeto Integrador', credits: 4, hours: 76, status: 'pendente', grade: null, absences: 0, absenceLimit: 18 },
    ],
    schedule: {
      segunda: [
        { subject: 'Fundamentos de Programação', start: '19:20', end: '21:00', room: 'Sala A204', professor: 'Prof. Renato Martins', mode: 'Presencial' },
        { subject: 'Banco de Dados Aplicado', start: '21:10', end: '22:50', room: 'Sala B102', professor: 'Profa. Marina Lopes', mode: 'Presencial' },
      ],
      terca: [
        { subject: 'Desenvolvimento de Sistemas', start: '19:20', end: '21:00', room: 'Sala A205', professor: 'Prof. Thiago Ramos', mode: 'Presencial' },
        { subject: 'Engenharia de Software', start: '21:10', end: '22:50', room: 'Sala A206', professor: 'Profa. Camila Dias', mode: 'Presencial' },
      ],
      quarta: [
        { subject: 'Desenvolvimento Web', start: '19:20', end: '21:00', room: 'Sala A204', professor: 'Prof. Renato Martins', mode: 'Presencial' },
        { subject: 'Fundamentos de Programação', start: '21:10', end: '22:50', room: 'Sala A204', professor: 'Prof. Renato Martins', mode: 'Presencial' },
      ],
      quinta: [
        { subject: 'Banco de Dados Aplicado', start: '19:20', end: '21:00', room: 'Sala B102', professor: 'Profa. Marina Lopes', mode: 'Presencial' },
        { subject: 'Engenharia de Software', start: '21:10', end: '22:50', room: 'Sala A206', professor: 'Profa. Camila Dias', mode: 'Presencial' },
      ],
      sexta: [
        { subject: 'Desenvolvimento de Sistemas', start: '19:20', end: '21:00', room: 'Sala A205', professor: 'Prof. Thiago Ramos', mode: 'Presencial' },
        { subject: 'Desenvolvimento Web', start: '21:10', end: '22:50', room: 'Sala A204', professor: 'Prof. Renato Martins', mode: 'Presencial' },
      ],
    },
  },
};
