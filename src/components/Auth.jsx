import React, { useState } from 'react';
import { Lock, User, Key, Server } from 'lucide-react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [token, setToken] = useState(localStorage.getItem('adminToken'));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: '> AUTHENTICATING_WITH_SERVER...' });

    try {
      const endpoint = isLogin ? '/api/users/login' : '/api/users';
      const url = `http://localhost:5000${endpoint}`;
      
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(isLogin ? { email: formData.email, password: formData.password } : formData)
      });
      
      const data = await res.json();

      if (res.ok) {
        setStatus({ type: 'success', message: `> AUTH_SUCCESS // TOKEN_ACQUIRED` });
        setToken(data.token);
        localStorage.setItem('adminToken', data.token);
        window.dispatchEvent(new Event('admin-auth-changed'));
      } else {
        setStatus({ type: 'error', message: `> ERROR: ${data.message}` });
      }
    } catch (err) {
      setStatus({ type: 'error', message: '> CONNECTION_REFUSED' });
    }
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    setToken(null);
    setStatus({ type: 'success', message: '> TERMINATED_SESSION' });
    window.dispatchEvent(new Event('admin-auth-changed'));
  };

  const inputStyle = { 
    width: '100%', 
    background: 'transparent', 
    border: '1px solid var(--term-dim)', 
    color: 'var(--term-green)', 
    fontFamily: 'var(--term-font)', 
    padding: '0.5rem',
    marginBottom: '1rem',
    outline: 'none' 
  };

  if (token) {
    return (
      <div className="term-panel" style={{ marginTop: 0 }}>
        <h2 className="term-header">ADMIN_DASHBOARD</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <Server size={32} color="var(--term-blue)" />
          <div>
            <div className="term-text" style={{ color: 'var(--term-blue)' }}>{'> STATUS: ONLINE'}</div>
            <div className="term-text">{'> ACCESS_LEVEL: ROOT'}</div>
          </div>
        </div>
        <div style={{ border: '1px solid var(--term-green)', padding: '1rem', margin: '1rem 0' }}>
           <p className="term-text">Root access granted. You are now authenticated.</p>
        </div>
        <button onClick={logout} className="term-btn" style={{ padding: '0.5rem 1rem', border: '1px solid var(--term-red)', color: 'var(--term-red)', background: 'transparent', cursor: 'pointer' }}>
          {'> END_SESSION'}
        </button>
      </div>
    );
  }

  return (
    <div className="term-panel" style={{ marginTop: 0 }}>
      <h2 className="term-header">ADMIN_ACCESS_MODULE</h2>
      
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
        <button 
          onClick={() => setIsLogin(true)}
          style={{ padding: '0.5rem 1rem', background: 'transparent', border: `1px solid ${isLogin ? 'var(--term-green)' : 'var(--term-dim)'}`, color: isLogin ? 'var(--term-green)' : 'var(--term-dim)', cursor: 'pointer', fontFamily: 'var(--term-font)' }}
        >
          [ LOGIN ]
        </button>
        <button 
          onClick={() => setIsLogin(false)}
          style={{ padding: '0.5rem 1rem', background: 'transparent', border: `1px solid ${!isLogin ? 'var(--term-green)' : 'var(--term-dim)'}`, color: !isLogin ? 'var(--term-green)' : 'var(--term-dim)', cursor: 'pointer', fontFamily: 'var(--term-font)' }}
        >
          [ INIT_ROOT ]
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div>
            <span className="term-text" style={{ display: 'block', marginBottom: '0.5rem' }}>{'> ENTER_ADMIN_NAME'}</span>
            <div style={{ position: 'relative' }}>
              <User size={16} color="var(--term-green)" style={{ position: 'absolute', right: '10px', top: '10px' }} />
              <input 
                type="text" 
                style={inputStyle}
                required
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
          </div>
        )}

        <div>
          <span className="term-text" style={{ display: 'block', marginBottom: '0.5rem' }}>{'> ENTER_EMAIL_ADDR'}</span>
          <div style={{ position: 'relative' }}>
            <Server size={16} color="var(--term-green)" style={{ position: 'absolute', right: '10px', top: '10px' }} />
            <input 
              type="email" 
              style={inputStyle}
              required
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
            />
          </div>
        </div>

        <div>
          <span className="term-text" style={{ display: 'block', marginBottom: '0.5rem' }}>{'> ENTER_SYS_PASSWORD'}</span>
          <div style={{ position: 'relative' }}>
             <Key size={16} color="var(--term-green)" style={{ position: 'absolute', right: '10px', top: '10px' }} />
             <input 
               type="password" 
               style={inputStyle}
               required
               value={formData.password}
               onChange={e => setFormData({...formData, password: e.target.value})}
             />
          </div>
        </div>

        {status.message && (
          <div style={{ color: status.type === 'error' ? 'var(--term-red)' : 'var(--term-blue)', marginBottom: '1rem', fontFamily: 'var(--term-font)', fontSize: '0.9rem' }}>
            {status.message}
          </div>
        )}

        <button type="submit" className="term-btn" style={{ padding: '0.5rem 1rem', border: '1px solid var(--term-green)', color: 'var(--term-green)', background: 'transparent', cursor: 'pointer' }}>
          {isLogin ? '> EXECUTE_LOGIN' : '> CREATE_ADMIN_RECORD'}
        </button>
      </form>
    </div>
  );
};

export default Auth;
