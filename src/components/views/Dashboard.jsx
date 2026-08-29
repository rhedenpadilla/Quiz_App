import React from 'react';
import { Link } from 'react-router-dom';
import miruEvolution from '../../assets/Miru - Evolution.png';
import miruThinking from '../../assets/Miru-thinking.png';

export default function Dashboard() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', color: 'var(--text-dark)', marginBottom: '0.5rem' }}>Good morning, Alex! 👋</h1>
          <p style={{ color: '#6B7280', fontSize: '1rem' }}>Ready to continue your learning adventure?</p>
        </div>
        
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {/* Level Badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', backgroundColor: 'var(--bg-light)', padding: '0.75rem 1.5rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
            <div style={{ backgroundColor: '#F3F4F6', padding: '0.5rem', borderRadius: '50%' }}>
              <img src={miruEvolution} alt="Scholar Slime" style={{ height: '30px', width: '30px' }} />
            </div>
            <div>
              <div style={{ fontWeight: '600', color: 'var(--text-dark)', fontSize: '0.95rem' }}>Level 24</div>
              <div style={{ color: '#6B7280', fontSize: '0.8rem' }}>Scholar Slime</div>
            </div>
            <div style={{ marginLeft: '1rem', width: '100px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#6B7280', marginBottom: '0.25rem' }}>
                <span>2,450 XP</span>
                <span>3,000</span>
              </div>
              <div style={{ height: '6px', backgroundColor: '#E5E7EB', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: '80%', backgroundColor: 'var(--primary-cyan)' }}></div>
              </div>
            </div>
          </div>
          
          {/* Streak */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', backgroundColor: 'var(--bg-light)', padding: '0.75rem 1.25rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
             <div style={{ fontSize: '1.5rem' }}>🔥</div>
             <div>
               <div style={{ fontSize: '0.75rem', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Streak</div>
               <div style={{ fontWeight: '600', color: 'var(--text-dark)' }}>12 Days</div>
             </div>
          </div>

          {/* Coins */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', backgroundColor: 'var(--bg-light)', padding: '0.75rem 1.25rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
             <div style={{ fontSize: '1.5rem', color: 'var(--accent-gold)' }}>🪙</div>
             <div>
               <div style={{ fontSize: '0.75rem', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Coins</div>
               <div style={{ fontWeight: '600', color: 'var(--text-dark)' }}>1,250</div>
             </div>
          </div>
        </div>
      </div>

      <h2 style={{ fontSize: '1.25rem', color: 'var(--text-dark)', marginBottom: '1rem' }}>Continue Learning</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
        {/* Course Card 1 */}
        <div style={{ backgroundColor: 'var(--bg-light)', padding: '1.5rem', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)', display: 'flex', gap: '1rem', border: '1px solid #E5E7EB' }}>
          <div style={{ width: '60px', height: '60px', backgroundColor: '#EEF2FF', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.5rem' }}>⚛️</div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '1rem', color: 'var(--text-dark)', marginBottom: '0.25rem' }}>Physics: Motion and Forces</h3>
            <p style={{ fontSize: '0.85rem', color: '#6B7280', marginBottom: '1rem' }}>Chapter 3 - 12 Questions</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ flex: 1, height: '6px', backgroundColor: '#E5E7EB', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: '45%', backgroundColor: 'var(--primary-blue)' }}></div>
              </div>
              <span style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--primary-blue)' }}>45%</span>
            </div>
          </div>
          <div style={{ alignSelf: 'flex-end' }}>
             <button className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', borderRadius: '8px' }}>Continue</button>
          </div>
        </div>
        
        {/* Course Card 2 */}
        <div style={{ backgroundColor: 'var(--bg-light)', padding: '1.5rem', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)', display: 'flex', gap: '1rem', border: '1px solid #E5E7EB' }}>
          <div style={{ width: '60px', height: '60px', backgroundColor: '#F0FDF4', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.5rem' }}>🧬</div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '1rem', color: 'var(--text-dark)', marginBottom: '0.25rem' }}>Biology: Cell Structure</h3>
            <p style={{ fontSize: '0.85rem', color: '#6B7280', marginBottom: '1rem' }}>Chapter 2 - 20 Questions</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ flex: 1, height: '6px', backgroundColor: '#E5E7EB', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: '15%', backgroundColor: 'var(--primary-blue)' }}></div>
              </div>
              <span style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--primary-blue)' }}>15%</span>
            </div>
          </div>
          <div style={{ alignSelf: 'flex-end' }}>
             <button className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', borderRadius: '8px' }}>Continue</button>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        {/* Daily Quests */}
        <div>
          <h2 style={{ fontSize: '1.25rem', color: 'var(--text-dark)', marginBottom: '1rem' }}>Daily Quests</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            
            <div style={{ backgroundColor: 'var(--bg-light)', padding: '1.25rem', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #E5E7EB' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: '#FEF3C7', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#D97706' }}>📝</div>
                <div>
                  <h4 style={{ fontWeight: '600', color: 'var(--text-dark)' }}>Complete 3 quizzes</h4>
                  <p style={{ fontSize: '0.85rem', color: '#6B7280' }}>+ 100 XP 🪙 + 50 Coins</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '100px', height: '8px', backgroundColor: '#E5E7EB', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: '33%', backgroundColor: 'var(--primary-cyan)' }}></div>
                </div>
                <span style={{ fontSize: '0.9rem', color: '#6B7280' }}>1/3</span>
              </div>
            </div>

            <div style={{ backgroundColor: 'var(--bg-light)', padding: '1.25rem', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #E5E7EB' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: '#DBEAFE', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#2563EB' }}>⭐</div>
                <div>
                  <h4 style={{ fontWeight: '600', color: 'var(--text-dark)' }}>Earn 500 XP</h4>
                  <p style={{ fontSize: '0.85rem', color: '#6B7280' }}>+ 50 XP</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '100px', height: '8px', backgroundColor: '#E5E7EB', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: '60%', backgroundColor: 'var(--primary-cyan)' }}></div>
                </div>
                <span style={{ fontSize: '0.9rem', color: '#6B7280' }}>300/500</span>
              </div>
            </div>

            <div style={{ backgroundColor: '#F0FDF4', padding: '1.25rem', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #BBF7D0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: '#DCFCE7', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#16A34A' }}>⏱️</div>
                <div>
                  <h4 style={{ fontWeight: '600', color: '#166534' }}>Study for 30 minutes</h4>
                </div>
              </div>
              <div style={{ fontWeight: '600', color: '#16A34A', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                ✓ Completed
              </div>
            </div>

          </div>
        </div>

        {/* Weekly Progress */}
        <div>
          <h2 style={{ fontSize: '1.25rem', color: 'var(--text-dark)', marginBottom: '1rem' }}>Weekly Progress</h2>
          <div style={{ backgroundColor: 'var(--bg-light)', padding: '2rem', borderRadius: '16px', border: '1px solid #E5E7EB', textAlign: 'center', position: 'relative' }}>
             
             {/* Simple CSS Circle Chart representation */}
             <div style={{ position: 'relative', width: '150px', height: '150px', margin: '0 auto 1.5rem', borderRadius: '50%', background: `conic-gradient(var(--primary-cyan) 73%, #E5E7EB 0)`, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: '120px', height: '120px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                  <span style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--text-dark)' }}>73%</span>
                </div>
             </div>
             
             <h4 style={{ fontWeight: '600', color: 'var(--text-dark)', marginBottom: '0.5rem' }}>Great progress!</h4>
             <p style={{ color: '#6B7280', fontSize: '0.9rem', marginBottom: '1rem' }}>You're on track to meet your weekly goals.</p>
             <Link to="/explore" style={{ color: 'var(--primary-blue)', fontWeight: '600', textDecoration: 'none' }}>View Details</Link>
             
             <img src={miruThinking} alt="Miru Thinking" style={{ position: 'absolute', bottom: '10px', right: '10px', height: '60px' }} className="animate-float" />
          </div>
        </div>
      </div>
    </div>
  );
}
