import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';

// Custom Guru logo matching the design language
const GuruLogo = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 25c-6.075 0-11-4.925-11-11S9.925 5 16 5s11 4.925 11 11-4.925 11-11 11zm-1.5-16.5v3h3v-3h-3zm-2.5 5v7.5A2.5 2.5 0 0 0 14.5 23h3A2.5 2.5 0 0 0 20 20.5v-7.5h-8z" />
  </svg>
);

const Contact = () => {
  return (
    <div id="contact" className="term-panel" style={{ marginTop: '0' }}>
      <h2 className="term-header">CONNECTION_PROTOCOL</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <div>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <a href="https://github.com/abdulmoid648" target="_blank" rel="noreferrer" style={{ padding: '1rem', border: '1px solid var(--term-green)', color: 'var(--term-green)', textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '100px', transition: 'all 0.2s' }} className="term-btn">
              <FaGithub size={32} />
              <div style={{ fontSize: '0.7rem', marginTop: '0.5rem', textAlign: 'center' }}>GITHUB</div>
            </a>
            <a href="https://linkedin.com/in/abdul-moied" target="_blank" rel="noreferrer" style={{ padding: '1rem', border: '1px solid var(--term-green)', color: 'var(--term-green)', textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '100px', transition: 'all 0.2s' }} className="term-btn">
              <FaLinkedin size={32} />
              <div style={{ fontSize: '0.7rem', marginTop: '0.5rem', textAlign: 'center' }}>LINKEDIN</div>
            </a>
            <a href="https://www.guru.com/freelancers/abdulmoied" target="_blank" rel="noreferrer" style={{ padding: '1rem', border: '1px solid var(--term-green)', color: 'var(--term-green)', textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '100px', transition: 'all 0.2s' }} className="term-btn">
              <GuruLogo size={32} />
              <div style={{ fontSize: '0.7rem', marginTop: '0.5rem', textAlign: 'center' }}>GURU</div>
            </a>
            <a href="#" style={{ padding: '1rem', border: '1px solid var(--term-green)', color: 'var(--term-green)', textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '100px', transition: 'all 0.2s' }} className="term-btn">
              <SiFiverr size={32} />
              <div style={{ fontSize: '0.7rem', marginTop: '0.5rem', textAlign: 'center' }}>FIVERR</div>
            </a>
            <a href="#" style={{ padding: '1rem', border: '1px solid var(--term-green)', color: 'var(--term-green)', textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '100px', transition: 'all 0.2s' }} className="term-btn">
              <FaInstagram size={32} />
              <div style={{ fontSize: '0.7rem', marginTop: '0.5rem', textAlign: 'center' }}>INSTA</div>
            </a>
            <a href="#" style={{ padding: '1rem', border: '1px solid var(--term-green)', color: 'var(--term-green)', textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '100px', transition: 'all 0.2s' }} className="term-btn">
              <FaWhatsapp size={32} />
              <div style={{ fontSize: '0.7rem', marginTop: '0.5rem', textAlign: 'center' }}>WHATSAPP</div>
            </a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <span className="term-text">{'> TARGET: abdulmoid648@gmail.com'}</span>
            <span className="term-text">{'> LOCATION: Lahore, Pak'}</span>
            <span className="term-text" style={{ fontStyle: 'italic', marginTop: '0.5rem', color: 'var(--term-dim)' }}>
              {'> "Available for architectural consultation, full-stack development,'} <br />
              {'> and emergency system recovery.'} <br />
              {'> Negotiable rates for complex engineering challenges."'}
            </span>
          </div>
        </div>

        <div>
          <div style={{ border: '1px solid var(--term-dim)', padding: '1rem', height: '100%', display: 'flex', flexDirection: 'column', minHeight: '150px' }}>
            <span className="term-text" style={{ marginBottom: '0.5rem' }}>{'> ENTER_MESSAGE_CMD'}</span>
            <textarea
              style={{ flex: 1, background: 'transparent', border: 'none', color: 'var(--term-green)', fontFamily: 'var(--term-font)', outline: 'none', resize: 'none' }}
              placeholder="_"
            ></textarea>
            <button className="term-btn" style={{ alignSelf: 'flex-start', border: 'none', padding: 0, marginTop: '1rem', color: 'var(--term-blue)' }}>{'> TX_PACKET'}</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
