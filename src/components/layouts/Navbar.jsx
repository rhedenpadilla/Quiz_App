import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../../services/AuthService.js';

export default function Navbar() {
  const navigate = useNavigate();
  const user = AuthService.getCurrentUser();

  const handleLogout = () => {
    AuthService.logout();
    navigate('/');
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 4rem', position: 'absolute', top: 0, left: 0, right: 0, zIndex: 100 }}>
      {/* Logo */}
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/src/assets/Mimora-Logo.png" alt="Mimora Logo" style={{ height: '45px', filter: 'drop-shadow(0 2px 10px rgba(255,255,255,0.8))' }} />
      </Link>

      {/* Center Links */}
      <div style={{ display: 'flex', gap: '3rem', fontWeight: '500', fontSize: '1rem' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.5)', transition: 'color 0.3s' }}>Features</Link>
        <Link to="/explore" style={{ textDecoration: 'none', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.5)', transition: 'color 0.3s' }}>Quizzes</Link>
        <Link to="/classes" style={{ textDecoration: 'none', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.5)', transition: 'color 0.3s' }}>Classes</Link>
        <Link to="/community" style={{ textDecoration: 'none', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.5)', transition: 'color 0.3s' }}>Community</Link>
        <Link to="/pricing" style={{ textDecoration: 'none', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.5)', transition: 'color 0.3s' }}>Pricing</Link>
      </div>

      {/* Right Actions */}
      <div>
        {user ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span style={{ color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Welcome, <strong>{user.name}</strong></span>
            <Link to="/dashboard" style={{ textDecoration: 'none', padding: '0.6rem 1.5rem', borderRadius: '20px', backgroundColor: 'white', color: 'var(--primary-blue)', fontWeight: '700', transition: 'all 0.3s', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>Dashboard</Link>
            <button onClick={handleLogout} style={{ textDecoration: 'none', padding: '0.6rem 1.5rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.4)', backgroundColor: 'transparent', color: 'white', fontWeight: '600', transition: 'all 0.3s', cursor: 'pointer' }}>Logout</button>
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link to="/login" style={{ textDecoration: 'none', padding: '0.6rem 1.5rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.6)', color: 'white', fontWeight: '600', transition: 'all 0.3s', backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255,255,255,0.1)' }}>Login</Link>
            <Link to="/login?mode=register" style={{ textDecoration: 'none', padding: '0.6rem 1.5rem', borderRadius: '20px', backgroundColor: 'white', color: 'var(--primary-blue)', fontWeight: '700', transition: 'all 0.3s', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>Sign Up</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
