import React from 'react';
import { Code, GitBranch, Database, Layout, Hammer } from 'lucide-react';

const styles = {
  container: {
    marginTop: '1.5rem',
  },
  heading: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '1.25rem',
    color: '#374151',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#5a2d82',
  },
  grid: {
    padding: '0 2rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '2rem',
  },
  category: {
    marginBottom: '1.5rem',
  },
  categoryTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#4B5563',
    marginBottom: '0.75rem',
  },
  skillsList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  skill: {
    padding: '0.25rem 0.75rem',
    borderRadius: '1rem',
    fontSize: '0.95rem',
    backgroundColor: '#f3f4f6',
    color: '#4B5563',
  },
  favoriteSkill: {
    backgroundColor: '#5a2d82',
    color: 'white',
  }
};

const TechnicalArsenal = () => {
  const skills = {
    languages: {
      favorite: ['Python', 'Rust', 'Elixir'],
      other: ['JavaScript', 'TypeScript', 'Go', 'Java', 'SQL'],
    },
    paradigms: ['Object-Oriented Programming', 'Functional Programming'],
    frameworks: ['Django', 'React', 'Phoenix'],
    databases: ['MongoDB', 'Redis', 'PostgreSQL'],
    additional: ['System Design'],
    tools: ['Linux', 'Postman', 'Prometheus', 'Docker', 'Git']
  };

  return (
    <div style={styles.container}>
      <div style={styles.heading}>
        <Code size={24} color="#5a2d82" />
        <h2 style={styles.sectionTitle}>Technical Arsenal</h2>
      </div>

      <div style={styles.grid}>
        <div style={styles.category}>
          <div style={styles.categoryTitle}>
            <GitBranch size={20} />
            Languages & Runtime
          </div>
          <div style={styles.skillsList}>
            {skills.languages.favorite.map(skill => (
              <span
                key={skill}
                style={{ ...styles.skill, ...styles.favoriteSkill }}
              >
                {skill} ★
              </span>
            ))}
            {skills.languages.other.map(skill => (
              <span key={skill} style={styles.skill}>{skill}</span>
            ))}
          </div>
        </div>

        <div style={styles.category}>
          <div style={styles.categoryTitle}>
            <Layout size={20} />
            Paradigms & Frameworks
          </div>
          <div style={styles.skillsList}>
            {[...skills.paradigms, ...skills.frameworks].map(skill => (
              <span key={skill} style={styles.skill}>{skill}</span>
            ))}
          </div>
        </div>

        <div style={styles.category}>
          <div style={styles.categoryTitle}>
            <Database size={20} />
            Databases & Infrastructure
          </div>
          <div style={styles.skillsList}>
            {[...skills.databases, ...skills.additional].map(skill => (
              <span key={skill} style={styles.skill}>{skill}</span>
            ))}
          </div>
        </div>

        <div style={styles.category}>
          <div style={styles.categoryTitle}>
            <Hammer size={20} />
            Developer Tools
          </div>
          <div style={styles.skillsList}>
            {skills.tools.map(skill => (
              <span key={skill} style={styles.skill}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalArsenal;
