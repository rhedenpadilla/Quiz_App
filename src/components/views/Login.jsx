import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthService from '../../services/AuthService.js';

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState('Alex O.');
  const [password, setPassword] = useState('password123');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp) {
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
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#F3F4F6' }}>
      
      {/* Left Side: Graphic / Branding */}
      <div style={{ flex: 1, backgroundColor: 'var(--bg-dark)', color: 'white', display: 'flex', flexDirection: 'column', padding: '4rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(91,134,229,0.2) 0%, transparent 60%)', borderRadius: '50%' }}></div>
        
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '4rem' }}>
            <img src="/src/assets/Miru - Main.png" alt="Miru" style={{ height: '40px', width: '40px' }} />
            <span style={{ fontSize: '1.75rem', fontWeight: 'bold', letterSpacing: '1px' }}>MIMORA</span>
          </div>

          <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', lineHeight: '1.1', marginBottom: '1.5rem' }}>
            Your adventure<br/>starts here!
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '400px' }}>
            Learn, challenge yourself, and grow with friends.
          </p>

          <img 
            src="/src/assets/Miru - Evolution.png" 
            alt="Miru Happy" 
            style={{ maxWidth: '350px', display: 'block', margin: '0 auto', filter: 'drop-shadow(0 20px 30px rgba(0,194,255,0.2))' }} 
            className="animate-float"
          />
        </div>
      </div>

      {/* Right Side: Form */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
        <div style={{ width: '100%', maxWidth: '450px', backgroundColor: 'white', borderRadius: '24px', padding: '3rem', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}>
          
          <div style={{ display: 'flex', backgroundColor: '#F3F4F6', borderRadius: '16px', padding: '0.35rem', marginBottom: '2.5rem' }}>
            <button 
              type="button"
              onClick={() => setIsSignUp(false)} 
              style={{ flex: 1, padding: '0.75rem', borderRadius: '12px', border: 'none', background: !isSignUp ? 'white' : 'transparent', color: !isSignUp ? 'var(--primary-blue)' : '#6B7280', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s', boxShadow: !isSignUp ? '0 2px 8px rgba(0,0,0,0.05)' : 'none' }}
            >
              Login
            </button>
            <button 
              type="button"
              onClick={() => setIsSignUp(true)} 
              style={{ flex: 1, padding: '0.75rem', borderRadius: '12px', border: 'none', background: isSignUp ? 'white' : 'transparent', color: isSignUp ? 'var(--primary-blue)' : '#6B7280', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s', boxShadow: isSignUp ? '0 2px 8px rgba(0,0,0,0.05)' : 'none' }}
            >
              Register
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#4B5563', fontWeight: '500', fontSize: '0.9rem' }}>Email or Username</label>
              <input 
                type="text" 
                placeholder="you@example.com"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid #E5E7EB', outline: 'none', transition: 'border-color 0.3s' }}
              />
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#4B5563', fontWeight: '500', fontSize: '0.9rem' }}>Password</label>
              <input 
                type="password" 
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid #E5E7EB', outline: 'none', transition: 'border-color 0.3s' }}
              />
            </div>

            {!isSignUp && (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', fontSize: '0.85rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4B5563', cursor: 'pointer' }}>
                  <input type="checkbox" /> Remember me
                </label>
                <a href="#" style={{ color: 'var(--primary-blue)', textDecoration: 'none', fontWeight: '500' }}>Forgot password?</a>
              </div>
            )}
            
            <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1rem', borderRadius: '12px', marginBottom: '2rem' }}>
              {isSignUp ? 'Create Account' : 'Login'}
            </button>

            <div style={{ textAlign: 'center', color: '#9CA3AF', fontSize: '0.85rem', marginBottom: '1.5rem', position: 'relative' }}>
              <span style={{ backgroundColor: 'white', padding: '0 10px', position: 'relative', zIndex: 1 }}>or continue with</span>
              <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', backgroundColor: '#E5E7EB', zIndex: 0 }}></div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button type="button" style={{ flex: 1, padding: '0.75rem', backgroundColor: 'white', border: '1px solid #E5E7EB', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontWeight: '500', color: '#4B5563' }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" style={{ width: '20px' }} /> Google
              </button>
              <button type="button" style={{ flex: 1, padding: '0.75rem', backgroundColor: 'white', border: '1px solid #E5E7EB', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontWeight: '500', color: '#4B5563' }}>
                 <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png" alt="Discord" style={{ width: '24px' }} /> Discord
              </button>
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '2.5rem', fontSize: '0.9rem', color: '#6B7280' }}>
               {isSignUp ? 'Already have an account?' : "Don't have an account?"} <span onClick={() => setIsSignUp(!isSignUp)} style={{ color: 'var(--primary-blue)', fontWeight: '600', cursor: 'pointer' }}>{isSignUp ? 'Login' : 'Sign up'}</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
