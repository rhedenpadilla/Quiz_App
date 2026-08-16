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
    <nav className="glass-panel" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', margin: '1rem', borderRadius: '50px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.5rem', color: 'var(--slime-base)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img src="/src/assets/Miru - Main.png" alt="Miru" style={{ height: '40px', width: '40px', objectFit: 'contain' }} className="animate-float" />
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Mimora</Link>
        </div>
        {!user && (
          <Link to="/login" className="btn-primary" style={{ textDecoration: 'none', padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Login / Sign Up Now</Link>
        )}
      </div>
      <div>
        {user && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ color: 'var(--text-muted)' }}>Welcome, <strong style={{ color: 'var(--text-light)' }}>{user.name}</strong></span>
            <Link to="/dashboard" style={{ textDecoration: 'none', color: 'var(--text-light)', fontWeight: 'bold' }}>Dashboard</Link>
            <button onClick={handleLogout} className="btn-secondary" style={{ padding: '0.5rem 1.5rem' }}>Logout</button>
          </div>
        )}
      </div>
    </nav>
  );
}
