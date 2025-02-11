import ProjectCard from "../ui/comp/project-card/ProjectCard"; // Import the ProjectCard component
import projectsData from "../data/projects"; // Import the dummy projects data
import "./projects.css";
import { Rocket } from "lucide-react";

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">
        <Rocket size={32} /> Featured Work
      </h1>
      <p className="projects-subtitle">
        A showcase of selected projects in software development & game design.
      </p>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  )
};

export default Projects;
