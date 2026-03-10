import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vue.js'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'FastAPI', 'PostgreSQL', 'MongoDB'] },
  { category: 'Tools & DevOps', items: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'Linux'] }
];

const Skills = () => {
  return (
    <section id="skills" className="section container">
      <div className="section-header align-center">
        <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
        <p className="section-subtitle align-center">Technologies and tools I work with.</p>
      </div>

      <div className="skills-container">
        {skills.map((skillGroup, index) => (
          <motion.div 
            key={index} 
            className="skill-group glass-panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="skill-category">{skillGroup.category}</h3>
            <div className="skill-items">
              {skillGroup.items.map((item, i) => (
                <div key={i} className="skill-badge">{item}</div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
