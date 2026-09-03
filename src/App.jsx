import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CourseProvider } from './hooks/useCourse';
import AppLayout from './components/layout/AppLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import Schedule from './pages/Schedule/Schedule';
import Curriculum from './pages/Curriculum/Curriculum';
import Grades from './pages/Grades/Grades';
import Absences from './pages/Absences/Absences';
import Finance from './pages/Finance/Finance';
import Requests from './pages/Requests/Requests';
import Opportunities from './pages/Opportunities/Opportunities';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import Services from './pages/Services/Services';
import Login from './pages/Login/Login';

export default function App() {
  const [authenticated, setAuthenticated] = useState(() => sessionStorage.getItem('mackenzie-demo-session') === 'active');

  function handleLogin() {
    sessionStorage.setItem('mackenzie-demo-session', 'active');
    setAuthenticated(true);
  }

  function handleLogout() {
    sessionStorage.removeItem('mackenzie-demo-session');
    setAuthenticated(false);
  }

  return (
    <BrowserRouter>
      {!authenticated ? <Login onLogin={handleLogin} /> : (
        <CourseProvider>
          <div className="portal-enter">
            <AppLayout onLogout={handleLogout}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/horarios" element={<Schedule />} />
            <Route path="/grade" element={<Curriculum />} />
            <Route path="/notas" element={<Grades />} />
            <Route path="/faltas" element={<Absences />} />
            <Route path="/financeiro" element={<Finance />} />
            <Route path="/requerimentos" element={<Requests />} />
            <Route path="/oportunidades" element={<Opportunities />} />
            <Route path="/monitoria" element={<Opportunities />} />
            <Route path="/atividades" element={<Opportunities />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/matricula" element={<Services type="matricula" />} />
            <Route path="/rematricula" element={<Services type="rematricula" />} />
            <Route path="/matricula-online" element={<Services type="matricula-online" />} />
            <Route path="/competencias" element={<Services type="competencias" />} />
            <Route path="/desempenho" element={<Services type="desempenho" />} />
            <Route path="/nota-falta" element={<Services type="nota-falta" />} />
            <Route path="/ocorrencias" element={<Services type="ocorrencias" />} />
            <Route path="/plano-aula" element={<Services type="plano-aula" />} />
            <Route path="/negociacao" element={<Services type="negociacao" />} />
            <Route path="/avaliacao" element={<Services type="avaliacao" />} />
            <Route path="/canvas" element={<Services type="canvas" />} />
            <Route path="/proato" element={<Services type="proato" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
            </AppLayout>
          </div>
        </CourseProvider>
      )}
    </BrowserRouter>
  );
}
