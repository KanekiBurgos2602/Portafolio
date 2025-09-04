import NavBar from '../../components/Navbar/Navbar.jsx';
import './About.css';
import '../../index.css';

const BarraTecnología = ({ nombre, tiempo, nivel }) => (
  <div className={`tech-bar ${nivel}`}>
    <span className="tech-label">{nombre}</span>
    <span className="tech-time">{tiempo}</span>
  </div>
);

const datos = {
  lenguajes: [
    { nombre: 'C#', tiempo: '1 año', nivel: 'exp-1' },
    { nombre: 'PHP', tiempo: '1 año', nivel: 'exp-1' },
    { nombre: 'Python', tiempo: '2 años', nivel: 'exp-2' },
    { nombre: 'HTML', tiempo: '2 años', nivel: 'exp-2' },
    { nombre: 'CSS', tiempo: '2 años', nivel: 'exp-2' },
    { nombre: 'JavaScript', tiempo: '2 años', nivel: 'exp-2' },
    { nombre: 'Flutter', tiempo: '1 año', nivel: 'exp-1' },
  ],
  basesDatos: [
    { nombre: 'MySQL', tiempo: '2 años', nivel: 'exp-2' },
    { nombre: 'SQL Server', tiempo: '1 año', nivel: 'exp-1' },
    { nombre: 'MongoDB', tiempo: '1 año', nivel: 'exp-1' },
  ],
  herramientas: [
    { nombre: 'FastAPI', tiempo: '1 año', nivel: 'exp-1' },
    { nombre: 'React', tiempo: '1 año', nivel: 'exp-1' },
    { nombre: 'Git', tiempo: '2 años', nivel: 'exp-2' },
    { nombre: 'Docker', tiempo: '1 año', nivel: 'exp-1' },
  ],
};

const About = () => (
  <div className="about-page">
    <NavBar />
    <div className="about-content fade-in">
      <h1>Sobre mí</h1>
      <section>
        <h2>Objetivo Profesional</h2>
        <p>
          Busco integrarme a un equipo de desarrollo donde pueda aplicar mis conocimientos en programación, 
          aportar soluciones útiles y seguir creciendo tanto a nivel profesional como personal.
        </p>
        <h2>Pasatiempos</h2>
        <p>
          Disfruto jugar videojuegos como NFS Hot Pursuit, Ghost Recon Break Point y Arknights, 
          entre otros. También me gusta ver anime y escuchar música en mis momentos libres, actividades que me ayudan a relajarme y mantenerme motivado.
        </p>
      </section>
      <section>
        <h2>Experiencia técnica</h2>
        <div className="tech-grid">
          {Object.entries(datos).map(([categoria, items]) => (
            <div key={categoria}>
              <strong>
                {categoria === 'lenguajes'
                  ? 'Lenguajes'
                  : categoria === 'basesDatos'
                  ? 'Bases de datos'
                  : 'Herramientas'}
              </strong>
              <div className="tech-list">
                {items.map((t, i) => (
                  <BarraTecnología key={t.nombre + i} {...t} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  </div>
);

export default About;
