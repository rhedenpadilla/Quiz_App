import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../services/AuthService.js';

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState('developer');
  const [password, setPassword] = useState('password123');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        // Mock sign up flow (just logging in for now)
        await AuthService.login(username, password);
      } else {
        await AuthService.login(username, password);
      }
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex-center" style={{ flex: 1, padding: '2rem' }}>
      <div className="glass-panel" style={{ padding: '3rem', width: '100%', maxWidth: '450px', position: 'relative', overflow: 'hidden' }}>
        
        {/* Decorative bubble */}
        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '150px', height: '150px', borderRadius: '50%', background: 'radial-gradient(circle, var(--slime-glow) 0%, transparent 70%)', opacity: 0.3 }} className="animate-float"></div>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', background: 'rgba(0,0,0,0.2)', borderRadius: '30px', padding: '0.25rem' }}>
            <button 
              type="button"
              onClick={() => setIsSignUp(false)} 
              style={{ 
                padding: '0.75rem 2rem', 
                borderRadius: '25px', 
                border: 'none', 
                background: !isSignUp ? 'var(--slime-base)' : 'transparent',
                color: !isSignUp ? 'var(--bg-dark)' : 'var(--text-light)',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            >
              Log In
            </button>
            <button 
              type="button"
              onClick={() => setIsSignUp(true)} 
              style={{ 
                padding: '0.75rem 2rem', 
                borderRadius: '25px', 
                border: 'none', 
                background: isSignUp ? 'var(--slime-base)' : 'transparent',
                color: isSignUp ? 'var(--bg-dark)' : 'var(--text-light)',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            >
              Sign Up
            </button>
          </div>
        </div>

        <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--slime-glow)' }}>
          {isSignUp ? 'Join the Evolution' : 'Welcome Back'}
        </h2>
        
        {error && (
          <div style={{ backgroundColor: 'rgba(255, 50, 50, 0.2)', border: '1px solid #ff4444', color: '#ffaaaa', padding: '0.75rem', borderRadius: '8px', marginBottom: '1rem', textAlign: 'center' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ position: 'relative', zIndex: 1 }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Username</label>
            <input 
              type="text" 
              className="input-field" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Password</label>
            <input 
              type="password" 
              className="input-field" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1rem' }}>
            {isSignUp ? 'Create Account' : 'Log In'}
          </button>
        </form>
      </div>
    </div>
  );
}
