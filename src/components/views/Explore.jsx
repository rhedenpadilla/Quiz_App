import React from 'react';

export default function Explore() {
  const quizzes = [
    { id: 1, title: 'Algebra Basics', subject: 'Mathematics', difficulty: 'Easy', rating: 4.8, reviews: '1.2k', icon: '📐', color: '#DBEAFE' },
    { id: 2, title: 'Photosynthesis', subject: 'Science', difficulty: 'Medium', rating: 4.7, reviews: '850', icon: '🌿', color: '#DCFCE7' },
    { id: 3, title: 'World War II', subject: 'History', difficulty: 'Medium', rating: 4.9, reviews: '2.1k', icon: '🌍', color: '#FEF3C7' },
    { id: 4, title: 'Python Basics', subject: 'Computer Science', difficulty: 'Hard', rating: 4.9, reviews: '3.4k', icon: '🐍', color: '#E0E7FF' },
    { id: 5, title: 'Human Anatomy', subject: 'Science', difficulty: 'Hard', rating: 4.6, reviews: '920', icon: '🦴', color: '#FCE7F3' },
    { id: 6, title: 'Philippine History', subject: 'History', difficulty: 'Medium', rating: 4.8, reviews: '1.1k', icon: '🇵🇭', color: '#FEF2F2' },
  ];

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', color: 'var(--text-dark)', marginBottom: '0.5rem' }}>Explore Quizzes</h1>
          <p style={{ color: '#6B7280', fontSize: '1rem' }}>Find quizzes by subject, topic, or difficulty.</p>
        </div>
        <div>
          <input type="text" placeholder="Search quizzes..." className="input-field" style={{ width: '350px', backgroundColor: 'white', border: '1px solid #E5E7EB', color: 'var(--text-dark)' }} />
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem' }}>
        <select style={{ padding: '0.75rem 1rem', borderRadius: '12px', border: '1px solid #E5E7EB', backgroundColor: 'white', color: 'var(--text-dark)', outline: 'none', cursor: 'pointer' }}>
          <option>All Subjects</option>
          <option>Mathematics</option>
          <option>Science</option>
          <option>History</option>
        </select>
        <select style={{ padding: '0.75rem 1rem', borderRadius: '12px', border: '1px solid #E5E7EB', backgroundColor: 'white', color: 'var(--text-dark)', outline: 'none', cursor: 'pointer' }}>
          <option>All Difficulty</option>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
        <select style={{ padding: '0.75rem 1rem', borderRadius: '12px', border: '1px solid #E5E7EB', backgroundColor: 'white', color: 'var(--text-dark)', outline: 'none', cursor: 'pointer' }}>
          <option>Most Popular</option>
          <option>Newest</option>
          <option>Highest Rated</option>
        </select>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        {quizzes.map(quiz => (
          <div key={quiz.id} style={{ backgroundColor: 'white', borderRadius: '20px', overflow: 'hidden', border: '1px solid #E5E7EB', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', transition: 'transform 0.2s', cursor: 'pointer' }}>
            <div style={{ height: '140px', backgroundColor: quiz.color, display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '4rem' }}>
              {quiz.icon}
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '0.8rem', color: '#6B7280', marginBottom: '0.5rem', fontWeight: '500', textTransform: 'uppercase' }}>{quiz.subject}</div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-dark)', marginBottom: '1rem' }}>{quiz.title}</h3>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <span style={{ 
                  fontSize: '0.8rem', 
                  padding: '0.25rem 0.75rem', 
                  backgroundColor: quiz.difficulty === 'Easy' ? '#DCFCE7' : quiz.difficulty === 'Medium' ? '#FEF3C7' : '#FEE2E2', 
                  color: quiz.difficulty === 'Easy' ? '#166534' : quiz.difficulty === 'Medium' ? '#92400E' : '#991B1B', 
                  borderRadius: '12px', 
                  fontWeight: '600' 
                }}>
                  {quiz.difficulty}
                </span>
                <span style={{ fontSize: '0.9rem', color: '#4B5563', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <span style={{ color: 'var(--accent-gold)' }}>★</span> {quiz.rating} <span style={{ color: '#9CA3AF', fontSize: '0.8rem' }}>({quiz.reviews})</span>
                </span>
              </div>
              
              <button className="btn-primary" style={{ width: '100%', padding: '0.75rem', borderRadius: '12px' }}>Start Quiz</button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
        <button style={{ padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid #E5E7EB', backgroundColor: 'white', cursor: 'pointer' }}>Previous</button>
        <button style={{ padding: '0.5rem 1rem', borderRadius: '8px', border: 'none', backgroundColor: 'var(--primary-blue)', color: 'white', fontWeight: 'bold' }}>1</button>
        <button style={{ padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid #E5E7EB', backgroundColor: 'white', cursor: 'pointer' }}>2</button>
        <button style={{ padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid #E5E7EB', backgroundColor: 'white', cursor: 'pointer' }}>3</button>
        <button style={{ padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid #E5E7EB', backgroundColor: 'white', cursor: 'pointer' }}>Next</button>
      </div>
    </div>
  );
}
