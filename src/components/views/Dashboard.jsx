import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthService from '../../services/AuthService.js';
import QuizService from '../../services/QuizService.js';

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [recentQuizzes, setRecentQuizzes] = useState([]);

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser) {
      navigate('/login');
    } else {
      setUser(currentUser);
      fetchRecentQuizzes();
    }
  }, [navigate]);

  const fetchRecentQuizzes = async () => {
    try {
      const quizzes = await QuizService.getQuizzes();
      setRecentQuizzes(quizzes.slice(0, 3)); // Just show 3 mock ones
    } catch (e) {
      console.error(e);
    }
  };

  if (!user) return null;

  return (
    <div className="container" style={{ marginTop: '2rem' }}>
      <div className="glass-panel" style={{ padding: '2.5rem', marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        
        {/* Background ambient glow */}
        <div style={{ position: 'absolute', top: '-100px', left: '-100px', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, var(--slime-glow) 0%, transparent 60%)', opacity: 0.15 }} className="animate-glow"></div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', zIndex: 1 }}>
          <img src="/src/assets/Miru - Main.png" alt="Miru Greeting" style={{ height: '120px', filter: 'drop-shadow(0 0 15px rgba(0,212,255,0.4))' }} className="animate-float" />
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'white' }}>
              Welcome back, <span style={{ color: 'var(--slime-base)', textShadow: '0 0 10px rgba(0,212,255,0.3)' }}>{user.name}</span>!
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>Ready to evolve your knowledge today?</p>
          </div>
        </div>
        <div style={{ textAlign: 'center', zIndex: 1, background: 'rgba(0,0,0,0.3)', padding: '1rem 2rem', borderRadius: '20px' }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent-gold)' }}>{user.points}</div>
          <div style={{ color: 'var(--text-light)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Total Stats</div>
        </div>
      </div>

      <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', color: 'var(--slime-glow)' }}>Available Classes & Quizzes</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {recentQuizzes.map(quiz => (
          <div key={quiz.id} className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
            <h4 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1.25rem' }}>{quiz.title}</h4>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.8rem', padding: '0.3rem 0.6rem', background: 'rgba(0,212,255,0.15)', borderRadius: '12px', border: '1px solid var(--slime-dark)' }}>
                {quiz.subject_id}
              </span>
              <span style={{ fontSize: '0.8rem', padding: '0.3rem 0.6rem', background: 'rgba(255,215,0,0.15)', borderRadius: '12px', color: 'var(--accent-gold)', border: '1px solid rgba(255,215,0,0.3)' }}>
                {quiz.difficulty}
              </span>
              <span style={{ fontSize: '0.8rem', padding: '0.3rem 0.6rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                ~{quiz.duration} mins
              </span>
            </div>
            <div style={{ flex: 1 }}></div>
            <Link to={`/quiz/${quiz.id}`} className="btn-primary" style={{ textAlign: 'center', textDecoration: 'none', display: 'block', width: '100%' }}>
              Enter Class
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
