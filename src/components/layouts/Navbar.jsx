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
    <nav className="glass-panel" style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem', margin: '1rem', borderRadius: '50px' }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.25rem', color: 'var(--lime-green)' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>QuizMaster</Link>
      </div>
      <div>
        {user ? (
          <>
            <span style={{ marginRight: '1rem' }}>Welcome, {user.name}</span>
            <Link to="/dashboard" style={{ marginRight: '1rem', textDecoration: 'none', color: 'var(--text-light)' }}>Dashboard</Link>
            <button onClick={handleLogout} className="btn-secondary" style={{ padding: '0.5rem 1rem' }}>Logout</button>
          </>
        ) : (
          <Link to="/login" className="btn-primary" style={{ textDecoration: 'none' }}>Login / Join</Link>
        )}
      </div>
    </nav>
  );
}
