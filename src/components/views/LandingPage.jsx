import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, TrendingUp, Gamepad2, Trophy, Award } from 'lucide-react';

export default function LandingPage() {
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.reveal');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ backgroundColor: '#F3F4F6', color: 'var(--text-dark)', minHeight: '100vh', paddingBottom: '0' }}>
      
      {/* 1. HERO SECTION WITH BACKGROUND */}
      <div 
        style={{ 
          paddingTop: '10rem', 
          paddingBottom: '12rem', 
          backgroundImage: 'linear-gradient(to right, rgba(11, 15, 25, 0.9) 0%, rgba(11, 15, 25, 0.3) 100%), url(/src/assets/homepage_background.png)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat',
          position: 'relative'
        }}
      >
        {/* Feathering Gradient at the bottom to blend with #F3F4F6 */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '150px', background: 'linear-gradient(to bottom, transparent, #F3F4F6)' }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem' }}>
          
          {/* Hero Left: Text and Buttons */}
          <div style={{ flex: '1 1 500px', color: 'white' }} className="reveal">
            <h1 style={{ fontSize: '4.5rem', fontWeight: 'bold', marginBottom: '1.5rem', lineHeight: '1.1' }}>
              Learn. Quiz.<br />
              Grow. <span style={{ color: 'var(--primary-cyan)' }}>Together.</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#E5E7EB', marginBottom: '2.5rem', lineHeight: '1.6', maxWidth: '80%' }}>
              Mimora turns studying into an exciting adventure with interactive quizzes, achievements, and friends.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link to="/login" className="btn-primary" style={{ textDecoration: 'none', fontSize: '1.1rem', padding: '1rem 2rem' }}>
                Start Learning
              </Link>
              <Link to="/explore" style={{ textDecoration: 'none', fontSize: '1.1rem', padding: '1rem 2rem', backgroundColor: 'white', color: 'var(--primary-blue)', borderRadius: '20px', fontWeight: '600' }}>
                Explore Quizzes
              </Link>
            </div>
          </div>
          
          {/* Hero Right: Mascot Image */}
          <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', position: 'relative' }} className="reveal reveal-delay-2">
            <img
              src="/src/assets/Miru - Absorbing Knowledge.png"
              alt="Miru Main"
              style={{ maxWidth: '100%', maxHeight: '450px', zIndex: 1, filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.3))' }}
              className="animate-float"
            />
          </div>
        </div>
      </div>

      {/* 2. OVERLAPPING FEATURE BAR */}
      <div className="container reveal reveal-delay-1" style={{ position: 'relative', top: '-4rem', zIndex: 10 }}>
        <div style={{ backgroundColor: 'white', borderRadius: '24px', padding: '2rem 1rem', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '130px' }}>
            <div style={{ width: '50px', height: '50px', marginBottom: '0.5rem', color: 'var(--primary-blue)' }}><BookOpen size={40} /></div>
            <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-dark)' }}>Quiz Based<br/>Learning</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '130px' }}>
            <div style={{ width: '50px', height: '50px', marginBottom: '0.5rem', color: 'var(--primary-cyan)' }}><Users size={40} /></div>
            <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-dark)' }}>Community<br/>Study Groups</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '130px' }}>
            <div style={{ width: '50px', height: '50px', marginBottom: '0.5rem', color: '#1E40AF' }}><TrendingUp size={40} /></div>
            <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-dark)' }}>Track Your<br/>Progress</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '130px' }}>
            <div style={{ width: '50px', height: '50px', marginBottom: '0.5rem', color: 'var(--accent-gold)' }}><Trophy size={40} /></div>
            <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-dark)' }}>Gamified<br/>Experience</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '130px' }}>
            <div style={{ width: '50px', height: '50px', marginBottom: '0.5rem', color: '#10B981' }}><Award size={40} /></div>
            <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-dark)' }}>Climb<br/>Leaderboards</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '130px' }}>
            <div style={{ width: '50px', height: '50px', marginBottom: '0.5rem', color: '#F59E0B' }}><Gamepad2 size={40} /></div>
            <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-dark)' }}>Earn<br/>Achievements</span>
          </div>

        </div>
      </div>

      {/* 3. WIDGETS SECTION */}
      <div className="container" style={{ marginTop: '-1rem', paddingBottom: '4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          
          <div className="reveal reveal-delay-1" style={{ backgroundColor: 'white', borderRadius: '24px', padding: '1.5rem', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
            <h3 style={{ fontSize: '1rem', color: 'var(--text-dark)', marginBottom: '1.5rem', fontWeight: '600' }}>Sample Quiz</h3>
            <p style={{ fontWeight: '500', marginBottom: '1rem', fontSize: '0.95rem' }}>Which planet is known as the Red Planet?</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ padding: '0.75rem', border: '1px solid #E5E7EB', borderRadius: '12px', fontSize: '0.9rem', color: '#4B5563' }}>A. Earth</div>
              <div style={{ padding: '0.75rem', border: '2px solid var(--primary-blue)', backgroundColor: '#EFF6FF', borderRadius: '12px', fontSize: '0.9rem', color: 'var(--primary-blue)', fontWeight: '600' }}>B. Mars</div>
              <div style={{ padding: '0.75rem', border: '1px solid #E5E7EB', borderRadius: '12px', fontSize: '0.9rem', color: '#4B5563' }}>C. Jupiter</div>
              <div style={{ padding: '0.75rem', border: '1px solid #E5E7EB', borderRadius: '12px', fontSize: '0.9rem', color: '#4B5563' }}>D. Venus</div>
            </div>
          </div>

          <div className="reveal reveal-delay-2" style={{ backgroundColor: 'white', borderRadius: '24px', padding: '1.5rem', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
            <h3 style={{ fontSize: '1rem', color: 'var(--text-dark)', marginBottom: '1.5rem', fontWeight: '600' }}>Student Progress</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <img src="/src/assets/Miru - Evolution.png" alt="Scholar Slime" style={{ height: '60px', width: '60px', borderRadius: '50%', backgroundColor: '#EFF6FF', padding: '0.5rem' }} />
              <div>
                <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>Level 24</div>
                <div style={{ color: '#6B7280', fontSize: '0.9rem' }}>Scholar Slime</div>
              </div>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#6B7280', marginBottom: '0.5rem' }}>
                <span>XP 2,450 / 3,000</span>
                <span>80%</span>
              </div>
              <div style={{ height: '8px', backgroundColor: '#E5E7EB', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: '80%', backgroundColor: 'var(--primary-cyan)' }}></div>
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem' }}>Weekly Goal</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ height: '8px', width: '80%', backgroundColor: '#E5E7EB', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: '60%', backgroundColor: 'var(--primary-blue)' }}></div>
                </div>
                <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>60%</span>
              </div>
            </div>
          </div>

          <div className="reveal reveal-delay-3" style={{ backgroundColor: 'white', borderRadius: '24px', padding: '1.5rem', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3 style={{ fontSize: '1rem', color: 'var(--text-dark)', marginBottom: '1.5rem', fontWeight: '600', alignSelf: 'flex-start' }}>Top Achiever</h3>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
               <div style={{ backgroundColor: '#FEF3C7', padding: '0.5rem', borderRadius: '16px' }}>
                 <div style={{ fontSize: '2rem' }}>🛡️</div>
               </div>
               <div>
                 <div style={{ fontWeight: '700' }}>Rhea M.</div>
                 <div style={{ fontSize: '0.85rem', color: '#6B7280' }}>12,450 XP</div>
               </div>
            </div>

            <div style={{ fontSize: '4rem', filter: 'drop-shadow(0 10px 10px rgba(0,0,0,0.1))' }}>
              🥇
            </div>
          </div>

          <div className="reveal reveal-delay-4" style={{ backgroundColor: 'white', borderRadius: '24px', padding: '1.5rem', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
            <h3 style={{ fontSize: '1rem', color: 'var(--text-dark)', marginBottom: '1.5rem', fontWeight: '600' }}>Active Community</h3>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
               <img src="/src/assets/Miru - Main.png" alt="Miru" style={{ height: '60px' }} />
               <div>
                 <div style={{ fontWeight: '700', fontSize: '1.25rem' }}>2,458</div>
                 <div style={{ fontSize: '0.85rem', color: '#6B7280' }}>Students Online</div>
               </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--primary-blue)', border: '2px solid white', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontWeight: 'bold', fontSize: '0.8rem', zIndex: 4 }}>A</div>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--primary-cyan)', border: '2px solid white', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontWeight: 'bold', fontSize: '0.8rem', marginLeft: '-15px', zIndex: 3 }}>B</div>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)', border: '2px solid white', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontWeight: 'bold', fontSize: '0.8rem', marginLeft: '-15px', zIndex: 2 }}>C</div>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#9CA3AF', border: '2px solid white', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontWeight: 'bold', fontSize: '0.8rem', marginLeft: '-15px', zIndex: 1 }}>+99</div>
            </div>
          </div>

        </div>
      </div>

      {/* 4. CALL TO ACTION BAR */}
      <div className="container reveal" style={{ paddingBottom: '4rem' }}>
        <div style={{ background: 'linear-gradient(135deg, var(--primary-blue), var(--primary-cyan))', borderRadius: '24px', padding: '3rem 4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white', boxShadow: '0 20px 40px rgba(0,194,255,0.2)', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Ready to begin your adventure?</h2>
            <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>Join thousands of students learning and growing together!</p>
          </div>
          <Link to="/login" style={{ background: 'white', color: 'var(--primary-blue)', padding: '1rem 2.5rem', borderRadius: '20px', fontWeight: 'bold', textDecoration: 'none', fontSize: '1.1rem', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
            Create Free Account
          </Link>
        </div>
      </div>
      
    </div>
  );
}
