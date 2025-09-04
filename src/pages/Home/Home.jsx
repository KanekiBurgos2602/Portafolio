import './Home.css';
import logo from '../../assets/Logo.png';

export default function Home() {
  return (
    <div className="home-msr-wrapper">
      <div className="home-left-block">
        <img src={logo} alt="Logo lateral" className="home-left-logo" />
        <div className="home-left-text">
          <h1 className="home-name">ANGEL EDUARDO RODRIGUEZ BERMUDEZ</h1>
          <p className="home-role">Desarrollador Back End</p>
        </div>
      </div>
    </div>
  );
}
