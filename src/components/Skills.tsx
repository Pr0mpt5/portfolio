import React from 'react';
import './Skills.css';
import { skills, additionalSkills } from '../data/portfolio';

export const Skills: React.FC = () => {
  return (
    <section id="skills">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skillGroup) => (
          <div key={skillGroup.category} className="skill-category">
            <h3>{skillGroup.category}</h3>
            <div className="skill-list">
              {skillGroup.items.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.proficiency}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="additional-skills">
        <h3>Tools & Platforms</h3>
        <div className="tags">
          {additionalSkills.map((skill) => (
            <span key={skill} className="tag">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
