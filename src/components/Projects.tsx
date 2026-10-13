import ProjectCard from "./ProjectCard"
import { projects } from "../data/projects"
import { useState } from "react"

const tags = ["Alla", "HTML", "CSS", "SCSS", "JavaScript", "TypeScript", "React", "Vite", "MongoDB", "Node.js"]

const Projects = () => {
    const [selectedTag, setSelectedTag] = useState("Alla")

        const filteredProjects =
    selectedTag === "Alla"
    ? projects
    : projects.filter((project) => project.tags.includes(selectedTag))
  return (
    <section id="projekt">
        <h2>Projekt</h2>
        <div>
            {tags.map((tag) => (
                <button key={tag} onClick={() => setSelectedTag(tag)}>
                    {tag}
                    </button>
            ))}
        </div>
                {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
        ))}
    </section>
  )
}

export default Projects