import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled glass-panel' : ''}`} style={{ background: scrolled ? 'rgba(5,5,5,0.9)' : 'transparent', borderBottom: scrolled ? '1px solid var(--term-green)' : 'none' }}>
      <div className="container nav-content">
        <a href="#" className="logo" style={{ color: 'var(--term-green)', fontFamily: 'var(--term-font)', textShadow: 'var(--term-glow-green)' }}>{'> SYS_MENU'}</a>
        
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu" style={{ color: 'var(--term-green)' }}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`nav-links ${isOpen ? 'active' : ''}`} style={{ fontFamily: 'var(--term-font)' }}>
          <a href="#hero" onClick={() => setIsOpen(false)} style={{ color: 'var(--term-green)' }}>[// INITIALIZE]</a>
          <a href="#tech-stack" onClick={() => setIsOpen(false)} style={{ color: 'var(--term-green)' }}>[// STACK_INFO]</a>
          <a href="#projects" onClick={() => setIsOpen(false)} style={{ color: 'var(--term-green)' }}>[// DEPLOYMENTS]</a>
          <a href="#contact" onClick={() => setIsOpen(false)} style={{ color: 'var(--term-green)' }}>[// CONNECT]</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
