import { useState } from "react";
import ProjectCard from "../ui/comp/project-card/ProjectCard";
import projectsData from "../data/projects";
import { Rocket, Search } from "lucide-react";
import "./projects.css";

const Projects = () => {
  const [filter, setFilter] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories from projects
  const categories = ["All", ...new Set(projectsData.flatMap(project => project.technologies))];

  // Filter projects based on search and category
  const filteredProjects = projectsData.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(filter.toLowerCase()) ||
      project.description.toLowerCase().includes(filter.toLowerCase());

    const matchesCategory = selectedCategory === "All" ||
      project.technologies.includes(selectedCategory);

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="projects-container">
      {/* Header with animated particles */}
      <div className="projects-header">
        <div className="particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>

        <div className="title-wrapper">
          <h1 className="projects-title">
            <Rocket size={36} className="projects-icon" />
            Featured Work
            <div className="title-underline"></div>
          </h1>
        </div>

        <p className="projects-subtitle">
          A showcase of selected projects in software development & game design.
        </p>
      </div>

      {/* Filter and search controls */}
      <div className="projects-controls">
        <div className="search-container">
          <div className="search-input-wrapper">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search projects..."
              className="search-input"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
        </div>

        <div className="category-filters">
          {categories.slice(0, 8).map((category) => (
            <button
              key={category}
              className={`category-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
          {categories.length > 8 && (
            <div className="category-dropdown">
              <button className="category-more">More +</button>
              <div className="dropdown-content">
                {categories.slice(8).map((category) => (
                  <button
                    key={category}
                    className={`category-button ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Project grid with cards */}
      <div className="projects-grid">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
              link={project.link}
            />
          ))
        ) : (
          <div className="no-projects">
            <div className="no-projects-icon">🔍</div>
            <h3>No projects found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;