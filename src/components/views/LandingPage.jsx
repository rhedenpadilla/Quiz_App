import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="container" style={{ marginTop: '4rem', paddingBottom: '4rem' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem', marginBottom: '6rem' }}>
        <div style={{ flex: '1 1 400px' }}>
          <h1 style={{ fontSize: '4rem', marginBottom: '1rem', lineHeight: '1.1' }}>
            Welcome to <span style={{ color: 'var(--slime-base)', textShadow: '0 0 15px rgba(0,212,255,0.4)' }}>Mimora</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
            The ultimate learning system guided by your personal slime companion, Miru. Dive into interactive quizzes, level up your knowledge, and track your evolution in a vibrant, engaging environment.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/login" className="btn-primary" style={{ textDecoration: 'none', fontSize: '1.1rem', padding: '1rem 2rem' }}>
              Start Your Evolution
            </Link>
          </div>
        </div>
        <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
          <img 
            src="/src/assets/Miru - Absorbing Knowledge.png" 
            alt="Miru absorbing knowledge" 
            style={{ maxWidth: '100%', maxHeight: '400px', filter: 'drop-shadow(0 0 30px rgba(0,212,255,0.3))' }} 
            className="animate-float"
          />
        </div>
      </div>

      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: 'var(--slime-glow)' }}>About The System</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <div className="glass-panel" style={{ padding: '2.5rem', textAlign: 'center' }}>
          <img src="/src/assets/Miru - thinking.png" alt="Miru Thinking" style={{ height: '80px', marginBottom: '1rem' }} />
          <h3 style={{ color: 'var(--slime-glow)', marginBottom: '1rem', fontSize: '1.5rem' }}>Analyze & Absorb</h3>
          <p style={{ color: 'var(--text-muted)' }}>Take interactive quizzes and absorb new knowledge just like a slime devouring its prey. Every question is a chance to grow.</p>
        </div>
        <div className="glass-panel" style={{ padding: '2.5rem', textAlign: 'center' }}>
          <img src="/src/assets/Miru - Evolution.png" alt="Miru Evolution" style={{ height: '80px', marginBottom: '1rem' }} />
          <h3 style={{ color: 'var(--accent-gold)', marginBottom: '1rem', fontSize: '1.5rem' }}>Evolve Your Skills</h3>
          <p style={{ color: 'var(--text-muted)' }}>Monitor your performance and see your stats improve. The more you learn, the more you evolve your capabilities.</p>
        </div>
      </div>
    </div>
  );
}
