import React from 'react';
import './Skills2.css'; // Optional CSS file for styling

const skillsData = [
  { name: 'JavaScript', level: 90 }, // Level out of 100
  { name: 'React', level: 80 },
  { name: 'Python', level: 85 },
  { name: 'Java', level: 90 },
  { name: 'C++', level: 70 },
  { name: 'C', level: 70 },
  { name: 'HTML & CSS', level: 95 },
  { name: 'Node.js', level: 70 },
  { name: 'Machine Learning', level: 80 },
  { name: 'Deep Learning', level: 80 },
  { name: 'Image Processing', level: 85 },
  { name: 'SQL', level: 90 },
  { name: 'MongoDB', level: 90 },
  { name: 'GraphQL', level: 60 },
  { name: 'Cloud Computing', level: 80 },
  { name: 'Parallel Computing', level: 75 }
];

const Skills2 = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <h3 className="skill-name">{skill.name}</h3>
            <div className="progress-bar">
              <div
                className="progress-bar-fill"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <p className="skill-level">{skill.level}%</p>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default Skills2;