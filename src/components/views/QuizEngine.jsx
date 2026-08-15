import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import QuizService from '../../services/QuizService.js';
import AuthService from '../../services/AuthService.js';

export default function QuizEngine() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quizDetails, setQuizDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1); // -1 means details view
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);

  useEffect(() => {
    // For MVP, if backend is empty, mock the details
    setQuizDetails({
      quiz: { id, title: 'Sample Quiz', description: 'Practice basic concepts.', duration: 10 },
      questions: [
        { id: '1', question_text: 'What is 2 + 2?', choices: [{id: 'c1', text: '3'}, {id: 'c2', text: '4', is_correct: true}, {id: 'c3', text: '5'}] },
        { id: '2', question_text: 'HTML stands for?', choices: [{id: 'c4', text: 'HyperText Markup Language', is_correct: true}, {id: 'c5', text: 'HighText Machine Language'}] }
      ]
    });
    setLoading(false);
  }, [id]);

  if (loading) return <div className="flex-center">Loading...</div>;

  const { quiz, questions } = quizDetails;

  const handleStart = () => setCurrentQuestionIndex(0);

  const handleSelectAnswer = (choiceId) => {
    setAnswers({ ...answers, [currentQuestionIndex]: choiceId });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = async () => {
    let correct = 0;
    questions.forEach((q, index) => {
      const selectedId = answers[index];
      const correctChoice = q.choices.find(c => c.is_correct);
      if (selectedId === correctChoice?.id) correct++;
    });

    const score = Math.round((correct / questions.length) * 100);
    const user = AuthService.getCurrentUser();
    
    setResults({
      score,
      correct,
      incorrect: questions.length - correct,
      total: questions.length
    });

    try {
      if (user) {
        await QuizService.submitAttempt(user.id, quiz.id, score, questions.length, correct, questions.length - correct, 5); // 5 mins mocked
      }
    } catch(e) {
      console.error(e);
    }
  };

  if (results) {
    return (
      <div className="container" style={{ marginTop: '2rem' }}>
        <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Quiz Completed! 🎉</h2>
          <div style={{ fontSize: '4rem', fontWeight: 'bold', color: results.score >= 50 ? 'var(--lime-green)' : 'var(--crimson-red)', margin: '2rem 0' }}>
            {results.score}%
          </div>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
            You got {results.correct} out of {results.total} correct.
          </p>
          <button className="btn-primary" onClick={() => navigate('/dashboard')}>Return to Dashboard</button>
        </div>
      </div>
    );
  }

  // Pre-quiz Details View
  if (currentQuestionIndex === -1) {
    return (
      <div className="container" style={{ marginTop: '2rem' }}>
        <div className="glass-panel" style={{ padding: '3rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{quiz.title}</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>{quiz.description}</p>
          <ul style={{ marginBottom: '2rem', lineHeight: '1.8' }}>
            <li><strong>Questions:</strong> {questions.length}</li>
            <li><strong>Estimated Time:</strong> {quiz.duration} minutes</li>
          </ul>
          <button className="btn-primary" style={{ fontSize: '1.2rem' }} onClick={handleStart}>Start Quiz</button>
        </div>
      </div>
    );
  }

  // Active Quiz View
  const q = questions[currentQuestionIndex];
  const progress = Math.round(((currentQuestionIndex + 1) / questions.length) * 100);

  return (
    <div className="container" style={{ marginTop: '2rem' }}>
      <div className="glass-panel" style={{ padding: '2rem' }}>
        {/* Progress Bar */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
            <span>{progress}%</span>
          </div>
          <div style={{ width: '100%', height: '10px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '5px', overflow: 'hidden' }}>
            <div style={{ width: `${progress}%`, height: '100%', backgroundColor: 'var(--lime-green)', transition: 'width 0.3s' }}></div>
          </div>
        </div>

        {/* Question Area */}
        <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>{q.question_text}</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
          {q.choices.map(choice => (
            <button
              key={choice.id}
              onClick={() => handleSelectAnswer(choice.id)}
              style={{
                padding: '1rem',
                textAlign: 'left',
                background: answers[currentQuestionIndex] === choice.id ? 'var(--orange)' : 'var(--glass-bg)',
                border: `1px solid ${answers[currentQuestionIndex] === choice.id ? 'var(--orange)' : 'var(--glass-border)'}`,
                borderRadius: '8px',
                color: 'white',
                cursor: 'pointer',
                fontSize: '1.1rem',
                transition: 'all 0.2s'
              }}
            >
              {choice.text}
            </button>
          ))}
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button className="btn-secondary" onClick={handlePrevious} disabled={currentQuestionIndex === 0} style={{ opacity: currentQuestionIndex === 0 ? 0.5 : 1 }}>
            Previous
          </button>
          {currentQuestionIndex === questions.length - 1 ? (
            <button className="btn-success" onClick={handleSubmit}>Submit Quiz</button>
          ) : (
            <button className="btn-primary" onClick={handleNext}>Next</button>
          )}
        </div>
      </div>
    </div>
  );
}
