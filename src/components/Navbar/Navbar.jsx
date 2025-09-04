import React, { useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/Logo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const pages = ['/', '/projects', '/about', '/contact'];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleWheel = (e) => {
      const currentIndex = pages.indexOf(location.pathname);
      if (e.deltaY > 0) {
        // Scroll hacia abajo: siguiente página
        if (currentIndex < pages.length - 1) {
          navigate(pages[currentIndex + 1]);
        }
      } else if (e.deltaY < 0) {
        // Scroll hacia arriba: página anterior
        if (currentIndex > 0) {
          navigate(pages[currentIndex - 1]);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [location, navigate]);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo principal" className="navbar-img home-msr-logo" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active-link' : ''}>Home</Link>
        </li>
        <li>
          <Link to="/projects" className={location.pathname === '/projects' ? 'active-link' : ''}>Proyectos</Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === '/about' ? 'active-link' : ''}>Sobre mí</Link>
        </li>
        <li>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active-link' : ''}>Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

