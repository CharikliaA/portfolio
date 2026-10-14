import type { Project } from "../../data/projects";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="project-card">
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
          loading="lazy"
        />
      ) : (
        <div className="project-image">Bild</div>
      )}
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul className="project-tags">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div className="project-links">
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank">
            Repo
          </a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank">
            Live
          </a>
        )}
      </div>
    </article>
  );
};
export default ProjectCard;
