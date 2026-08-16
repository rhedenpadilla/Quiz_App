import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', textAlign: 'center', backgroundColor: 'var(--bg-dark)', color: 'white', padding: '2rem' }}>
      <h1 style={{ fontSize: '8rem', fontWeight: 'bold', color: 'var(--primary-cyan)', textShadow: '0 0 40px rgba(0,194,255,0.4)', lineHeight: '1', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Oops! This page got lost in the labyrinth.</h2>
      <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem' }}>
        Let Miru guide you back home!
      </p>
      
      <div style={{ position: 'relative', marginBottom: '4rem' }}>
        <img 
          src="/src/assets/Miru - thinking.png" 
          alt="Confused Miru" 
          style={{ height: '150px', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))' }} 
          className="animate-float" 
        />
        {/* Confused Question Marks */}
        <div style={{ position: 'absolute', top: '-20px', left: '-20px', fontSize: '2rem', color: 'var(--accent-gold)' }} className="animate-float">?</div>
        <div style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '1.5rem', color: 'var(--primary-cyan)' }} className="animate-float">?</div>
      </div>

      <Link to="/" className="btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem', textDecoration: 'none' }}>
        Go to Homepage
      </Link>
    </div>
  );
}
