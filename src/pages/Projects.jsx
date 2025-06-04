import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'RGM GYM',
    description: 'App FullStack con React + Vite.',
    repoUrl: 'https://github.com/rodrigo-a-flores/RGM-GYM'
  },
  {
    title: 'RGM GYM API',
    description: 'API con Node, Express y PostgreSQL.',
    repoUrl: 'https://github.com/rodrigo-a-flores/RGM-GYM-API'
  },
  {
    title: 'Reposteria',
    description: 'App FullStack con React + Vite.',
    repoUrl: 'https://github.com/rodrigo-a-flores/Reposteria'
  },
  {
    title: 'Reposteria API',
    description: 'API con Node, Express y PostgreSQL.',
    repoUrl: 'https://github.com/rodrigo-a-flores/Reposteria_API'
  },
  {
    title: 'FBY System',
    description: 'App FullStack para el uso de jwt y páginas protegidas.',
    repoUrl: 'https://github.com/rodrigo-a-flores/fbi-system'
  },
  {
    title: 'Banco Solar',
    description: 'Construccion de una API RESTful utilizando PostgreSQL para la persistencia de datos.',
    repoUrl: 'https://github.com/rodrigo-a-flores/Banco-Solar'
  },
  {
    title: 'Roommates',
    description: 'App FullStack para el control de gastos por compañero.',
    repoUrl: 'https://github.com/rodrigo-a-flores/Roommates'
  },
  {
    title: 'Canchas Backend',
    description: 'Backend inicial para el proyecto de recaudación de canchas deportivas.',
    repoUrl: 'https://github.com/rodrigo-a-flores/canchas_backend'
  }
];

function Projects() {
  return (
    <section className="projects">
      <h2>Mis Proyectos</h2>
      {projects.map((p, idx) => (
        <ProjectCard key={idx} {...p} />
      ))}
    </section>
  );
}

export default Projects;
