import React from 'react';
import './Projects.css';
import { projects } from '../data/portfolio';

export const Projects: React.FC = () => {
  return (
    <section id="projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <h3>{project.title}</h3>
              <a href="#" className="project-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
            <p className="project-description">{project.description}</p>

            <div style={{ marginTop: 'auto' }}>
              <div style={{ marginBottom: '1rem' }}>
                {project.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    style={{
                      color: 'var(--color-text-secondary)',
                      fontSize: '0.9rem',
                      marginBottom: '0.5rem',
                      paddingLeft: '1.5rem',
                      position: 'relative',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        color: 'var(--color-accent-primary)',
                      }}
                    >
                      ▹
                    </span>
                    {highlight}
                  </div>
                ))}
              </div>

              <div className="project-technologies">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-impact">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                  <polyline points="13 2 13 9 20 9"></polyline>
                </svg>
                {project.impact}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
