import './Footer.css'; 

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>© {year} Angel Eduardo Rodriguez Bermudez. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
