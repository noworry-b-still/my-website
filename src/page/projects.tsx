import ProjectCard from "../ui/comp/project-card/ProjectCard"; // Import the ProjectCard component
import projectsData from "../data/projects"; // Import the dummy projects data
import "./projects.css";

function Projects() {
  return (
    <div className="projects-container">
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
  );
}

export default Projects;
