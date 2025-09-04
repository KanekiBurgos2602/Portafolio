import { useState, useEffect } from 'react';
import NavBar from '../../components/Navbar/Navbar.jsx';
import './Projects.css';
import '../../index.css';

// Imágenes de ejemplo
import Lappland1 from '../../assets/Lappland_The_Decadenza_HG_2.jpg';
import Lappland2 from '../../assets/Lappland_The_Decadenza_HG.png';
import Lappland3 from '../../assets/Lappland.jpg';
import Texas from '../../assets/Texas.jpg';

// Datos de los proyectos
const projects = [
	{
		title: 'PROYECTO 1',
		image: Lappland1,
		description:
			'Proyecto de ilustración digital inspirado en Lappland. Técnica mixta y retoque avanzado.',
	},
	{
		title: 'PROYECTO 2',
		image: Lappland2,
		description:
			'Arte conceptual para personaje Lappland. Uso de texturas y composición dinámica.',
	},
	{
		title: 'PROYECTO 3',
		image: Lappland3,
		description:
			'Retrato digital de Lappland. Enfoque en expresión y detalles de cabello.',
	},
	{
		title: 'PROYECTO 4',
		image: Texas,
		description:
			'Ilustración digital de Texas. Trabajo en luces, sombras y fondo atmosférico.',
	},
];

const FADE_DURATION = 400; // ms

const Projects = () => {
	// Estados para animaciones y expansión
	const [expanded, setExpanded] = useState(null);
	const [isClosing, setIsClosing] = useState(false);
	const [showGridFade, setShowGridFade] = useState(false);

	// Fade-in al cargar la página y al cerrar el expandido
	useEffect(() => {
		setShowGridFade(true);
		const timer = setTimeout(() => setShowGridFade(false), FADE_DURATION);
		return () => clearTimeout(timer);
	}, []);

	const handleClose = () => {
		setIsClosing(true);
		setTimeout(() => {
			setExpanded(null);
			setIsClosing(false);
			setShowGridFade(true);
			setTimeout(() => setShowGridFade(false), FADE_DURATION);
		}, FADE_DURATION);
	};

	const showGrid = expanded === null && !isClosing;

	return (
		<div
			className={`projects-page${
				expanded !== null ? ' overlay-active' : ''
			}`}
		>
			{/* Navbar superior */}
			<NavBar />

			{/* Título principal */}
			<h1 className="projects-title">PROYECTOS</h1>

			{/* Grid de proyectos */}
			{showGrid && (
				<div
					className={`projects-content${
						showGridFade ? ' fade-in-grid' : ''
					}`}
				>
					{projects.map((project, i) => (
						<div
							key={i}
							className="project-slot"
							onClick={() => setExpanded(i)}
						>
							{/* Título arriba de la imagen */}
							<div className="project-title">{project.title}</div>
							<img src={project.image} alt={project.title} />
						</div>
					))}
				</div>
			)}

			{/* Proyecto expandido */}
			{expanded !== null && (
				<div className={`project-overlay${isClosing ? ' fade-out' : ''}`}>
					<div
						className={`project-slot expanded${
							isClosing ? ' fade-out' : ''
						}`}
					>
						{/* Botón para cerrar el proyecto expandido */}
						<button
							className="project-close-btn"
							onClick={handleClose}
							title="Cerrar"
							disabled={isClosing}
						>
							&times;
						</button>
						{/* Título del proyecto expandido */}
						<div className="expanded-title">
							{projects[expanded].title}
						</div>
						<div className="expanded-row">
							{/* Imagen centrada */}
							<img
								src={projects[expanded].image}
								alt={projects[expanded].title}
								className="expanded-img"
							/>
							{/* Descripción debajo de la imagen */}
							<div className="expanded-desc">
								{projects[expanded].description}
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Projects;
