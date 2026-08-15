import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="container" style={{ textAlign: 'center', marginTop: '4rem' }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>
        Learn. Practice. <span style={{ color: 'var(--lime-green)' }}>Improve.</span>
      </h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
        Test your knowledge, discover what you need to improve, and make learning more engaging through interactive quizzes.
      </p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '4rem' }}>
        <Link to="/login" className="btn-primary" style={{ textDecoration: 'none', fontSize: '1.2rem', padding: '1rem 2rem' }}>
          Join Now
        </Link>
        <button className="btn-secondary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
          Explore Platform
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <h3 style={{ color: 'var(--orange)', marginBottom: '1rem' }}>Interactive Quizzes</h3>
          <p>Engage with high-quality questions across various subjects.</p>
        </div>
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <h3 style={{ color: 'var(--crimson-red)', marginBottom: '1rem' }}>Progress Tracking</h3>
          <p>Monitor your performance and see your improvement over time.</p>
        </div>
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <h3 style={{ color: 'var(--lime-green)', marginBottom: '1rem' }}>Practice & Review</h3>
          <p>Review your answers and read explanations to learn from mistakes.</p>
        </div>
      </div>
    </div>
  );
}
