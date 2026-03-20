import React from 'react';
import TechStack from './TechStack';
import { BentoGrid, BentoItem } from './BentoGrid';
import { Code2, Globe, Database, Cpu } from 'lucide-react';

const SkillsBento = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <div style={{ marginBottom: '2rem', padding: '0 1rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Core <span className="gradient-text">Skills</span></h2>
        <div className="status-badge">
          <div className="pulse-dot" />
          SYSTEM CAPABILITIES LOADED
        </div>
      </div>

      <BentoGrid>
        {/* The Orbital Tech Stack as the main feature */}
        <BentoItem spanCol={4} spanRow={3} style={{ padding: 0, overflow: 'hidden', background: 'transparent' }}>
          <div style={{ height: '550px', marginTop: '-50px' }}>
            <TechStack />
          </div>
        </BentoItem>

        <BentoItem spanCol={2} spanRow={1}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Globe color="#3b82f6" />
            <div>
              <div style={{ fontWeight: 'bold' }}>Frontend</div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>React, Next.js, TS</div>
            </div>
          </div>
        </BentoItem>

        <BentoItem spanCol={2} spanRow={1}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Database color="#10b981" />
            <div>
              <div style={{ fontWeight: 'bold' }}>Backend</div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Node.js, Mongo, SQL</div>
            </div>
          </div>
        </BentoItem>
      </BentoGrid>
    </div>
  );
};

export default SkillsBento;
