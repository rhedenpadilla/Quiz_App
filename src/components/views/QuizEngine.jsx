import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function QuizEngine() {
  const navigate = useNavigate();
  const [isFinished, setIsFinished] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(7); // 0-indexed, so 8th question
  const totalQuestions = 15;

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  if (isFinished) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
        <div style={{ backgroundColor: 'white', borderRadius: '24px', padding: '3rem', width: '100%', maxWidth: '600px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--text-dark)', marginBottom: '1rem' }}>Great job, Alex! ✨</h2>
          <p style={{ color: '#6B7280', marginBottom: '2rem' }}>You scored:</p>
          
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', marginBottom: '3rem' }}>
            {/* Score Circle */}
            <div style={{ position: 'relative', width: '150px', height: '150px', borderRadius: '50%', background: `conic-gradient(#10B981 85%, #E5E7EB 0)`, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ width: '130px', height: '130px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <span style={{ fontSize: '3rem', fontWeight: 'bold', color: '#10B981', lineHeight: '1' }}>85%</span>
                <span style={{ fontSize: '1rem', color: '#6B7280', fontWeight: '600' }}>(17 / 20)</span>
              </div>
            </div>
            
            <img src="/src/assets/Miru - Evolution.png" alt="Happy Miru" style={{ height: '120px' }} className="animate-float" />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '3rem' }}>
             <div style={{ textAlign: 'center' }}>
               <div style={{ color: '#10B981', fontSize: '1.5rem', fontWeight: 'bold' }}>17</div>
               <div style={{ color: '#6B7280', fontSize: '0.85rem', textTransform: 'uppercase' }}>Correct</div>
             </div>
             <div style={{ textAlign: 'center' }}>
               <div style={{ color: '#EF4444', fontSize: '1.5rem', fontWeight: 'bold' }}>3</div>
               <div style={{ color: '#6B7280', fontSize: '0.85rem', textTransform: 'uppercase' }}>Incorrect</div>
             </div>
             <div style={{ textAlign: 'center' }}>
               <div style={{ color: 'var(--primary-blue)', fontSize: '1.5rem', fontWeight: 'bold' }}>08:42</div>
               <div style={{ color: '#6B7280', fontSize: '0.85rem', textTransform: 'uppercase' }}>Time Taken</div>
             </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button className="btn-secondary" style={{ padding: '0.75rem 2rem' }}>Review Answers</button>
            <button className="btn-primary" onClick={() => navigate('/explore')} style={{ padding: '0.75rem 2rem' }}>Back to Quizzes</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      
      {/* Quiz Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6B7280' }}>
          <span style={{ fontSize: '1.2rem' }}>⚛️</span>
          <span style={{ fontWeight: '500' }}>Physics: Motion and Forces</span>
        </div>
        <div style={{ fontWeight: '600', color: 'var(--text-dark)' }}>
          Question {currentQuestion + 1} of {totalQuestions}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600', color: '#EF4444' }}>
          ⏱️ 04:32
        </div>
      </div>

      <div style={{ display: 'flex', gap: '3rem' }}>
        {/* Main Content Area */}
        <div style={{ flex: '1' }}>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-dark)', marginBottom: '2rem', lineHeight: '1.5' }}>
            A car accelerates from rest at a constant rate. Which equation represents the relationship between its final velocity (v), acceleration (a), and time (t)?
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
            {/* Options */}
            <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem', border: '2px solid var(--primary-cyan)', borderRadius: '16px', backgroundColor: '#F0F9FF', cursor: 'pointer' }}>
              <input type="radio" name="answer" checked readOnly style={{ width: '20px', height: '20px', accentColor: 'var(--primary-blue)' }} />
              <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>A. v = at</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem', border: '1px solid #E5E7EB', borderRadius: '16px', cursor: 'pointer' }}>
              <input type="radio" name="answer" style={{ width: '20px', height: '20px', accentColor: 'var(--primary-blue)' }} />
              <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>B. v = at²</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem', border: '1px solid #E5E7EB', borderRadius: '16px', cursor: 'pointer' }}>
              <input type="radio" name="answer" style={{ width: '20px', height: '20px', accentColor: 'var(--primary-blue)' }} />
              <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>C. v = ½at</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem', border: '1px solid #E5E7EB', borderRadius: '16px', cursor: 'pointer' }}>
              <input type="radio" name="answer" style={{ width: '20px', height: '20px', accentColor: 'var(--primary-blue)' }} />
              <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>D. v = a/t</span>
            </label>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button style={{ background: 'none', border: 'none', color: '#6B7280', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontWeight: '500' }}>
              🚩 Flag
            </button>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button className="btn-secondary" onClick={handlePrev} disabled={currentQuestion === 0} style={{ opacity: currentQuestion === 0 ? 0.5 : 1 }}>Previous</button>
              <button className="btn-primary" onClick={handleNext}>{currentQuestion === totalQuestions - 1 ? 'Submit' : 'Next'}</button>
            </div>
          </div>
        </div>

        {/* Sidebar Navigator */}
        <div style={{ width: '280px' }}>
          <div style={{ backgroundColor: 'white', borderRadius: '24px', padding: '1.5rem', border: '1px solid #E5E7EB', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
            <h3 style={{ fontSize: '1rem', color: 'var(--text-dark)', marginBottom: '1.5rem' }}>Question Navigator</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.5rem', marginBottom: '2rem' }}>
              {[...Array(totalQuestions)].map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setCurrentQuestion(i)}
                  style={{ 
                    width: '35px', 
                    height: '35px', 
                    borderRadius: '8px', 
                    border: 'none',
                    fontWeight: '600',
                    cursor: 'pointer',
                    backgroundColor: i === currentQuestion ? 'var(--primary-cyan)' : i < currentQuestion ? 'var(--primary-blue)' : '#F3F4F6',
                    color: i === currentQuestion || i < currentQuestion ? 'white' : '#4B5563',
                    boxShadow: i === currentQuestion ? '0 0 0 3px rgba(0,194,255,0.3)' : 'none'
                  }}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: '#6B7280' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ display: 'inline-block', width: '12px', height: '12px', backgroundColor: 'var(--primary-blue)', borderRadius: '3px' }}></span> Answered</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ display: 'inline-block', width: '12px', height: '12px', backgroundColor: 'var(--primary-cyan)', borderRadius: '3px' }}></span> Current</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ display: 'inline-block', width: '12px', height: '12px', backgroundColor: '#F3F4F6', borderRadius: '3px' }}></span> Unanswered</div>
            </div>
            
            <img src="/src/assets/Miru - thinking.png" alt="Miru Thinking" style={{ width: '80px', display: 'block', margin: '2rem auto 0', opacity: 0.8 }} />
          </div>
        </div>
      </div>
    </div>
  );
}
