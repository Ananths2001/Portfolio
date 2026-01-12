import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import avatar from '../assets/Ananthprofile.jpeg';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="greeting">Hi, I'm Ananth <span className="wave">👋</span></h2>
            <h1 className="title">Fullstack <span className="highlight">Developer</span></h1>
            <p className="description">
              I build exceptional digital experiences that differenatiate your brand from the competition.
              Passionate about creating scalable and user-friendly web applications.
            </p>
            
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View Projects <ArrowRight size={20} />
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me <Mail size={20} />
              </a>
              <a href="/resume.pdf" download className="btn btn-outline">
                Resume <Download size={20} />
              </a>
            </div>

            <div className="social-links">
              <a href="https://github.com/Ananths2001" className="social-icon"><Github size={24} /></a>
              <a href="https://www.linkedin.com/in/ananth-pat?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="social-icon"><Linkedin size={24} /></a>
              <a href="mailto:ananthananth1863@gmail.com" className="social-icon"><Mail size={24} /></a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="image-wrapper animate-float">
            <img src={avatar} alt="Ananth" />
            
            <div className="badge badge-left">
              <span>🚀</span>
              <div>
                <p>Available for</p>
                <p>Freelance Projects</p>
              </div>
            </div>

            <div className="badge badge-right">
              <span>💻</span>
              <div>
                <p>Fullstack</p>
                <p>Expert</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
