function ProjectCard({ title, description, github, demo }) {
  return (
    <div className="card">
      <h4>{title}</h4>
      <p>{description}</p>

      <div className="project-links">
        {github && (
          <a href={github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}

        {demo && (
          <a href={demo} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;