import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with modern architecture, real-time inventory, and secure payments.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop',
    github: '#',
    live: '#'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates and an intuitive drag-and-drop interface.',
    tech: ['TypeScript', 'Next.js', 'Tailwind', 'Supabase'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    github: '#',
    live: '#'
  },
  {
    title: 'AI Image Generator',
    description: 'An AI-powered tool that generates stunning images based on text prompts using stable diffusion.',
    tech: ['Python', 'React', 'FastAPI', 'PyTorch'],
    image: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=500&h=300&fit=crop',
    github: '#',
    live: '#'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Projects = () => {
  return (
    <section id="projects" className="section container">
      <div className="section-header">
        <h2 className="section-title">Selected <span className="gradient-text">Projects</span></h2>
        <p className="section-subtitle">A showcase of some of my recent work.</p>
      </div>

      <motion.div 
        className="projects-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projects.map((project, index) => (
          <motion.div key={index} className="project-card glass-panel" variants={item}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-links">
                <a href={project.github} className="icon-link"><Github size={20} /> Code</a>
                <a href={project.live} className="icon-link"><ExternalLink size={20} /> Live Demo</a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
