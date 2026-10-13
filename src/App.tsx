import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Contact from "./components/Contact"
import ProjectCard from "./components/ProjectCard"
import { projects } from "./data/projects"

function App () {
  return  (
    <div>
      <Navbar />
      <Hero />
      <About />
      <ProjectCard project={projects[5]}/>
      <Contact />
    </div>
  )
}
export default App