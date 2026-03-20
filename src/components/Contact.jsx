import React from 'react';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <div id="contact" className="term-panel" style={{ marginTop: '0' }}>
      <h2 className="term-header">CONNECTION_PROTOCOL</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <div>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <a href="#" style={{ padding: '1rem', border: '1px solid var(--term-green)', color: 'var(--term-green)', textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '100px', transition: 'all 0.2s' }} className="term-btn">
              <Github size={32} />
              <div style={{ fontSize: '0.7rem', marginTop: '0.5rem', textAlign: 'center' }}>GITHUB</div>
            </a>
            <a href="#" style={{ padding: '1rem', border: '1px solid var(--term-green)', color: 'var(--term-green)', textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '100px', transition: 'all 0.2s' }} className="term-btn">
              <Linkedin size={32} />
              <div style={{ fontSize: '0.7rem', marginTop: '0.5rem', textAlign: 'center' }}>LINKEDIN</div>
            </a>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
             <span className="term-text">{'> TARGET: abdulmoid648@gmail.com'}</span>
             <span className="term-text">{'> LOCATION: Lahore, Pak'}</span>
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
