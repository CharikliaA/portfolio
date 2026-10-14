import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";
import { useState } from "react";

const tags = [
  "Alla",
  "HTML",
  "CSS",
  "SCSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Vite",
  "MongoDB",
  "Node.js",
];

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState("Alla");

  const filteredProjects =
    selectedTag === "Alla"
      ? projects
      : projects.filter((project) => project.tags.includes(selectedTag));

  return (
    <section id="projekt" className="projects">
      <h2>Projekt</h2>
      <div className="filter-buttons">
        {tags.map((tag) => (
          <button
            key={tag}
            className={
              selectedTag === tag ? "filter-button active" : "filter-button"
            }
            aria-pressed={selectedTag === tag}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
