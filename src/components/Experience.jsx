import React from 'react';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    role: 'React Developer Intern',
    company: 'Icannio Technologies',
    date: '2025(March)-2025(August)',
    description: 'Developing scalable web applications using React, Node.js, and AWS. Improved performance by 40%.'
  },
  {
    role: 'Web Developer Intern',
    company: 'Brainwave Matrix Solutions',
    date: '2024-(March) - 2025(August)',
    description: 'Collaborated with designers to translate UI/UX designs into pixel-perfect code using React and SCSS.'
  },
  {
    role: 'Salesforce Admin',
    company: 'Maayan Skill Development Center',
    date: '2023-(Janauary) - 2023-(March)',
    description: 'Salesforce Administrator experienced in CRM configuration, user management, workflow automation, reports, dashboards, and data management to support business operations.'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">My Experience</h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot">
                <Briefcase size={20} />
              </div>
              <div className="timeline-content">
                <span className="exp-date">{exp.date}</span>
                <h3>{exp.role}</h3>
                <h4 className="company">{exp.company}</h4>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
