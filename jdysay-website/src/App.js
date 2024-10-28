import logo from './logo.svg';
import {  BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header'
import './App.css';
import MainPage from './pages/MainPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectPage from './pages/ProjectPage';

function App() {
  const location = useLocation();
  let title;

  switch(location.pathname) {
    case '/':
      title = "Jaycie Say";
      break;
    case '/experience':
      title = "Experience";
      break;
    case '/project':
      title = "Projects";
      break;
    default:
      title= "Jaycie Say";
  }
  return (
    <>
      <Header title={title} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/project" element={<ProjectPage />} />
      </Routes>
    </>
  );
}

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
)
export default AppWithRouter;
