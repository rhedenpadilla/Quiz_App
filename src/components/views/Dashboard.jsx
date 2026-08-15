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
      <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Welcome back, {user.name}! 👋</h2>
          <p style={{ color: 'var(--text-muted)' }}>Ready to learn something new?</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--lime-green)' }}>{user.points}</div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Total Points</div>
        </div>
      </div>

      <h3 style={{ marginBottom: '1.5rem' }}>Available Quizzes</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {recentQuizzes.map(quiz => (
          <div key={quiz.id} className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
            <h4 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1.25rem' }}>{quiz.title}</h4>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.8rem', padding: '0.25rem 0.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}>
                {quiz.subject_id}
              </span>
              <span style={{ fontSize: '0.8rem', padding: '0.25rem 0.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', color: 'var(--orange)' }}>
                {quiz.difficulty}
              </span>
              <span style={{ fontSize: '0.8rem', padding: '0.25rem 0.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}>
                ~{quiz.duration} mins
              </span>
            </div>
            <div style={{ flex: 1 }}></div>
            <Link to={`/quiz/${quiz.id}`} className="btn-primary" style={{ textAlign: 'center', textDecoration: 'none', display: 'block', width: '100%' }}>
              Take Quiz
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
