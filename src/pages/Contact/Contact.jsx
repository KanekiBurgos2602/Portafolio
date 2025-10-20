import NavBar from '../../components/Navbar/Navbar.jsx';
import './Contact.css';
import '../../index.css';
import logo from '../../assets/Logo.png';

const Contact = () => {
  return (
    <div className="contact-page">
      <NavBar />
      <div className="contact-content fade-in">
        <h1 className="contact-title">Contacto</h1>
        <p className="contact-description">
          ¿Tienes alguna pregunta o propuesta? Completa el formulario y te responderé lo antes posible.
        </p>
        <form className="contact-form">
          <div className="form-logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input id="name" type="text" placeholder="Tu nombre" required autoComplete="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input id="email" type="email" placeholder="Tu correo electrónico" required autoComplete="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" placeholder="Escribe tu mensaje aquí..." rows="5" required></textarea>
          </div>
          <button type="submit" className="contact-btn">Enviar</button>
        </form>
        <div className="contact-social">
          <a href="https://facebook.com/tuusuario" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" className="social-icon github">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
