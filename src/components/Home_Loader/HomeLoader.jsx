import { useState, useEffect, useRef } from 'react';
import Home from '../../pages/Home/Home.jsx';
import NavBar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import logo from '../../assets/Logo.png';
import './HomeLoader.css';

// Controla si el loader ya se mostró
let homeLoaderShown = false;

export default function HomeLoader() {
  // Estados para mostrar loader, progreso y animación fade
  const [loading, setLoading] = useState(!homeLoaderShown);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const timeoutRef = useRef(null);

  // Maneja la animación de progreso y fade out
  useEffect(() => {
    if (homeLoaderShown) return;
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setFadeOut(true);
          timeoutRef.current = setTimeout(() => {
            setLoading(false);
            homeLoaderShown = true;
          }, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    // Limpia intervalos y timeouts al desmontar
    return () => {
      clearInterval(interval);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Calcula cuántos rombos están activos según el progreso
  const totalRombos = 12;
  const activeRombos = Math.ceil((progress / 100) * totalRombos);
  const rombos = Array.from({ length: totalRombos }, (_, i) => i < activeRombos);

  // Renderiza el loader animado si loading es true
  if (loading) {
    return (
      <div className={`loader-wrapper ${fadeOut ? 'fade-out' : ''}`}>
        <img
          src={logo}
          alt="Logo"
          className="loader-logo"
          style={{ filter: `brightness(${0.2 + (progress / 100) * 1.0})` }}
        />
        <div className="loader-rombos-container">
          {rombos.map((active, i) => (
            <div key={i} className={`loader-rombo ${active ? 'active' : ''}`}></div>
          ))}
        </div>
        <div className="loader-percentage">{progress}%</div>
      </div>
    );
  }

  // Renderiza la página principal con animación fade-in
  return (
    <div className="fade-in">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}