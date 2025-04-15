import React from "react";
import "./ProjectCard.css"; // Make sure to create this file with the styles

const ProjectCard = ({ name, description, technologies, image, link }) => {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img src={image} alt={name} className="project-image" />
        <div className="project-overlay"></div>
      </div>

      <div className="project-content">
        <h3 className="project-title">{name}</h3>

        <p className="project-description">{description}</p>

        <div className="project-tech">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;