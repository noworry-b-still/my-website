import React from "react";
import "./ProjectCard.css";

interface ProjectCardProps {
  name: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  technologies,
  image,
  link,
}) => {
  return (
    <div className="project-card">
      <img src={image} alt={name} className="project-card-image" />
      <div className="project-card_name-description-container">
      <h2 className="project-card-name text-center">{name}</h2>
      <p className="project-card-description">{description}</p>
      </div>
     
      <ul className="project-card-technologies">
        {technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      <div className="project-card_button-container">
        <a
          href={link}
          className="project-card-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
        <button className="project-card-cta">Learn More</button>
      </div>
    </div>
  );
};

export default ProjectCard;
