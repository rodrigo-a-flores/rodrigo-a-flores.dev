function ProjectCard({ title, description, repoUrl }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={repoUrl} target="_blank" rel="noopener noreferrer">Ver en GitHub</a>
    </div>
  );
}

export default ProjectCard;
