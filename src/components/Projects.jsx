import React from 'react';

const Projects = () => {
  return (
    <div id="projects" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
      <div className="term-panel" style={{ margin: 0 }}>
        <h2 className="term-header">RECENT_DEPLOYMENTS</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <h3 style={{ color: 'var(--term-green)', fontFamily: 'var(--term-font)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>TaskFlow Pro</h3>
            <p className="term-text" style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>Production grade task management with real-time bidirectional sync.</p>
            <button className="term-btn-blue term-btn" style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem' }}>DEPLOY_LOG</button>
          </div>

          <div>
            <h3 style={{ color: 'var(--term-green)', fontFamily: 'var(--term-font)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>DevConnect</h3>
            <p className="term-text" style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>Social network engineered for developer activities and materials.</p>
            <button className="term-btn-blue term-btn" style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem' }}>DEPLOY_LOG</button>
          </div>
        </div>
      </div>

      <div className="term-panel term-panel-blue" style={{ margin: 0 }}>
        <h2 className="term-header">ACTIVE_API_PREVIEW</h2>
        <div style={{ background: '#000', padding: '1rem', borderRadius: '4px', border: '1px solid #1e293b', flex: 1 }}>
          <pre style={{ color: 'var(--term-text)', fontSize: '0.85rem', overflowX: 'auto' }}>
            <code style={{ color: '#c678dd' }}>app</code><code style={{ color: '#56b6c2' }}>.get</code>(<code style={{ color: '#98c379' }}>'/api/users/:id'</code>, <code style={{ color: '#c678dd' }}>async</code> (req, res) =&gt; {'{\n'}
            {'  '}<code style={{ color: '#c678dd' }}>const</code> user = <code style={{ color: '#c678dd' }}>await</code> User.<code style={{ color: '#61afef' }}>findById</code>(req.params.id);{'\n'}
            {'  '}res.<code style={{ color: '#61afef' }}>json</code>(user);{'\n'}
            {'}'});
          </pre>
        </div>
      </div>
    </div>
  );
};
export default Projects;
