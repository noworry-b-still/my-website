import React from 'react';
import { Code, GitBranch, Database, Layout, Hammer } from 'lucide-react';
import './TechnicalArsenal.css';

const TechnicalArsenal = () => {
  const skills = {
    languages: {
      favorite: ['Python', 'Rust', 'Elixir', 'JavaScript', 'TypeScript', 'Go', 'Java', 'SQL'],
      other: [],
    },
    paradigms: ['Object-Oriented Programming', 'Functional Programming'],
    frameworks: ['Django', 'React', 'Phoenix'],
    databases: ['MongoDB', 'Redis', 'PostgreSQL'],
    additional: ['System Design'],
    tools: ['Linux', 'Postman', 'Prometheus', 'Docker', 'Git']
  };

  return (
    <div className="arsenal-container">
      <div className="arsenal-header">
        <Code size={24} className="arsenal-header-icon" />
        <h2 className="arsenal-title">Technical Arsenal</h2>
      </div>

      <div className="arsenal-grid">
        <div className="arsenal-category">
          <div className="category-header">
            <GitBranch size={20} className="category-icon" />
            <h3 className="category-title">Languages & Runtime</h3>
          </div>
          <div className="skills-list">
            {skills.languages.favorite.map(skill => (
              <span
                key={skill}
                className="skill-tag favorite"
              >
                {skill}
              </span>
            ))}
            {skills.languages.other.map(skill => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>

        <div className="arsenal-category">
          <div className="category-header">
            <Layout size={20} className="category-icon" />
            <h3 className="category-title">Paradigms & Frameworks</h3>
          </div>
          <div className="skills-list">
            {skills.paradigms.map(skill => (
              <span key={skill} className="skill-tag paradigm">{skill}</span>
            ))}
            {skills.frameworks.map(skill => (
              <span key={skill} className="skill-tag framework">{skill}</span>
            ))}
          </div>
        </div>

        <div className="arsenal-category">
          <div className="category-header">
            <Database size={20} className="category-icon" />
            <h3 className="category-title">Databases & Infrastructure</h3>
          </div>
          <div className="skills-list">
            {skills.databases.map(skill => (
              <span key={skill} className="skill-tag database">{skill}</span>
            ))}
            {skills.additional.map(skill => (
              <span key={skill} className="skill-tag additional">{skill}</span>
            ))}
          </div>
        </div>

        <div className="arsenal-category">
          <div className="category-header">
            <Hammer size={20} className="category-icon" />
            <h3 className="category-title">Developer Tools</h3>
          </div>
          <div className="skills-list">
            {skills.tools.map(skill => (
              <span key={skill} className="skill-tag tool">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalArsenal;