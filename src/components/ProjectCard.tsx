import type { Project } from "../data/projects";

type ProjectCardProps = {
    project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <article>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
        </article>
    )
}
export default ProjectCard