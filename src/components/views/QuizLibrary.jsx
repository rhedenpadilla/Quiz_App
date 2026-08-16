import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import QuizService from '../../services/QuizService.js';

export default function QuizLibrary() {
  const [quizzes, setQuizzes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    QuizService.getQuizzes().then(setQuizzes).catch(console.error);
  }, []);

  const filteredQuizzes = quizzes.filter(q => 
    q.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    q.subject_id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container" style={{ marginTop: '2rem' }}>
      <h2 style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>Quiz Library</h2>
      
      <div style={{ marginBottom: '2rem' }}>
        <input 
          type="text" 
          className="input-field" 
          placeholder="Search quizzes by title or subject..." 
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {filteredQuizzes.map(quiz => (
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
              View Quiz Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
