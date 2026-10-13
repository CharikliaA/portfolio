import ProjectCard from "./ProjectCard"
import { projects } from "../data/projects"

const Projects = () => {
  return (
    <section id="projekt">
        <h2>Projekt</h2>
        {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
        ))}
    </section>
  )
}

export default Projects