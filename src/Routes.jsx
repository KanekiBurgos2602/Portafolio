import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeLoader from './components/Home_Loader/HomeLoader.jsx';
import Projects from './pages/Projects/Projects.jsx';
import About from './pages/About/About.jsx';
import Contact from './pages/Contact/Contact.jsx';

export default function RouterWrapper() {
  return (
    <BrowserRouter basename="/Portafolio">
      <Routes>
        <Route path="/" element={<HomeLoader />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
