import React from 'react';
import { Monitor, Code, Terminal, Send } from 'lucide-react';

const Taskbar = ({ activeWindows, openWindow, focusedWindow }) => {
  const apps = [
    { id: 'hero', title: 'SYS_INFO', icon: Monitor, color: '#22c55e' },
    { id: 'stack', title: 'STACK_INFO', icon: Code, color: '#0ea5e9' },
    { id: 'projects', title: 'DEPLOYMENTS', icon: Terminal, color: '#22c55e' },
    { id: 'contact', title: 'CONNECTION', icon: Send, color: '#22c55e' }
  ];

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  const iconSize = isMobile ? 18 : 24;

  return (
    <div className="taskbar">
      {apps.map((app) => {
        const isOpen = activeWindows.includes(app.id);
        const isFocused = focusedWindow === app.id;

        return (
          <div
            key={app.id}
            className={`taskbar-icon ${isOpen ? 'active' : ''} ${isFocused ? 'focused' : ''}`}
            onClick={() => openWindow(app.id)}
            title={app.title}
          >
            <app.icon size={iconSize} style={{ color: isOpen ? app.color : undefined }} />
          </div>
        );
      })}
      
      <div className="taskbar-status" style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
        <div className="status-badge">
          <div className="pulse-dot" />
          SYSTEM ONLINE
        </div>
      </div>
    </div>
  );
};

export default Taskbar;
