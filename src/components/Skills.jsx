import React from 'react';
import './Skills.css';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaGitAlt, 
  FaFigma, 
  FaCloudUploadAlt 
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiExpress, 
  SiMongodb, 
  SiPostman
} from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";
import { TbApi } from 'react-icons/tb';

const skillsData = [
  {
    category: 'Frontend Development',
    icon: '💻',
    skills: [
      { name: 'HTML5', level: 95, Icon: FaHtml5, color: '#E34F26' },
      { name: 'CSS3', level: 90, Icon: FaCss3Alt, color: '#1572B6' },
      { name: 'JavaScript', level: 85, Icon: FaJs, color: '#F7DF1E' },
      { name: 'React.js', level: 80, Icon: FaReact, color: '#61DAFB' },
      { name: 'Tailwind CSS', level: 85, Icon: SiTailwindcss, color: '#06B6D4' }
    ]
  },
  {
    category: 'Backend Development',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 75, Icon: FaNodeJs, color: '#339933' },
      { name: 'Express.js', level: 70, Icon: SiExpress, color: '#000000' },
      { name: 'MongoDB', level: 80, Icon: SiMongodb, color: '#47A248' },
      { name: 'Python', level: 60, Icon: FaPython, color: '#3776AB' },
      { name: 'API Design', level: 75, Icon: TbApi, color: '#E34F26' }
    ]
  },
  {
    category: 'Tools & Others',
    icon: '🛠️',
    skills: [
      { name: 'Git & GitHub', level: 90, Icon: FaGitAlt, color: '#F05032' },
      { name: 'Figma', level: 85, Icon: FaFigma, color: '#F24E1E' },
      { name: 'VS Code', level: 95, Icon: VscVscode, color: '#007ACC' },
      { name: 'Postman', level: 80, Icon: SiPostman, color: '#FF6C37' },
      { name: 'Deployment', level: 70, Icon: FaCloudUploadAlt, color: '#4285F4' }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Professional Skills</h2>
        
        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <div key={index} className="skills-card">
              <div className="skills-header">
                <span className="skills-icon">{category.icon}</span>
                <h3>{category.category}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <div className="skill-info">
                      <div className="skill-name-wrapper">
                        <skill.Icon 
                          className="skill-logo" 
                          style={{ color: skill.color }} 
                        />
                        <span>{skill.name}</span>
                      </div>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="progress-bar-bg">
                      <div 
                        className="progress-bar-fill" 
                        style={{ width: `${skill.level}%`, backgroundColor: skill.color }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
