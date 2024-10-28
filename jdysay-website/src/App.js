import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import './App.css';
import MainPage from './pages/MainPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectPage from './pages/ProjectPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/project" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
}

export default App;
