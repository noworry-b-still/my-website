import { Code } from "lucide-react";
import "./ProjectCard.css";

const ProjectCard = ({ name, description, technologies, image, link }) => {
  return (
    <div className="project-card">
      <img src={image} alt={name} className="project-card-image" />
      <div className="project-card-content">
        <h2 className="project-card-name">{name}</h2>
        <p className="project-card-description">{description}</p>

        <ul className="project-card-technologies">
          {technologies.map((tech, index) => (
            <li key={index}><Code size={16} /> {tech}</li>
          ))}
        </ul>

        <div className="project-card-actions">
          <a href={link} className="project-card-link" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
