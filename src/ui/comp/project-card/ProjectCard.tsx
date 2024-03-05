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
      <h2 className="project-card-name">{name}</h2>
      <p className="project-card-description">{description}</p>
      <ul className="project-card-technologies">
        {technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
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
  );
};

export default ProjectCard;
