import logo from './logo.svg';
import {  BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
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
    case '/projects':
      title = "Projects";
      break;
    default:
      title= "Jaycie Say";
  }
  return (
    <>
      <Header title={title} />
      <div className="content">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
)
export default AppWithRouter;
