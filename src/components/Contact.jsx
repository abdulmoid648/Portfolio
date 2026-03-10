import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section container">
      <div className="section-header align-center">
        <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
        <p className="section-subtitle align-center">Have a project in mind? Let's talk about it.</p>
      </div>

      <div className="contact-wrapper">
        <motion.div 
          className="contact-info glass-panel"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Contact Information</h3>
          <p>Fill out the form and I will get back to you within 24 hours.</p>
          
          <div className="info-items">
            <div className="info-item">
              <Mail className="icon" />
              <span>hello@example.com</span>
            </div>
            <div className="info-item">
              <MapPin className="icon" />
              <span>San Francisco, CA</span>
            </div>
          </div>
        </motion.div>

        <motion.form 
          className="contact-form glass-panel"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="John Doe" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="john@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="4" placeholder="How can I help you?"></textarea>
          </div>
          
          <button type="submit" className="btn btn-primary form-submit">
            <Send size={18} style={{ marginRight: '8px' }} />
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
