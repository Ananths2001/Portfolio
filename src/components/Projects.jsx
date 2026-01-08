import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import std from '../assets/std.png';
import projectImg from '../assets/portfolio.png';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'Student Enrollment App',
    category: 'Full Stack',
    image: std,
    description: 'A full-stack Student Enrollment Management Application built with the MERN stack. Features include student registration, data filtering, and admin management.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    links: { demo: '#', github: '#' }
  },
  {
    id: 2,
    title: 'Personal Portfolio',
    category: 'Frontend',
    image: projectImg,
    description: 'Modern, responsive portfolio website featuring 3D elements, smooth animations, and email contact integration.',
    tags: ['React', 'Framer Motion', 'EmailJS', 'CSS'],
    links: { demo: '#', github: '#' }
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="filter-buttons">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="projects-grid">
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="project-card"
              >
                <div className="card-image">
                  <img src={project.image} alt={project.title} />
                  <div className="card-overlay">
                    <a href={project.links.demo} className="icon-btn" title="Live Demo">
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.links.github} className="icon-btn" title="GitHub Code">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                
                <div className="card-content">
                  <span className="category-tag">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="tech-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
