import type { Project } from "../data/projects";

type ProjectCardProps = {
    project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <article>
            <div>Bild</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
                {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                ))}
            </ul>
            {project.repoUrl && <a href={project.repoUrl} target="_blank">Repo</a>}
            {project.liveUrl && <a href={project.liveUrl} target="_blank">Live</a>}
        </article>
    )
}
export default ProjectCard