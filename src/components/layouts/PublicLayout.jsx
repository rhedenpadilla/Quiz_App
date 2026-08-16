import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';

export default function PublicLayout() {
  return (
    <div className="min-h-screen" style={{ display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Outlet />
      </main>
      {/* DETAILED FOOTER */}
      <footer style={{ backgroundColor: '#0B0F19', color: 'white', padding: '4rem 2rem', position: 'relative', overflow: 'hidden', marginTop: 'auto' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', position: 'relative', zIndex: 2 }}>
          
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <img src="/src/assets/Mimora-Logo.png" alt="Mimora" style={{ height: '40px' }} />
            </div>
            <p style={{ color: '#9CA3AF', fontSize: '0.9rem', lineHeight: '1.6', maxWidth: '250px' }}>
              A gamified learning platform for curious minds.
            </p>
          </div>

          {/* Links Cols */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Platform</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a href="/explore" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.9rem' }}>Quizzes</a>
              <a href="/classes" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.9rem' }}>Classes</a>
              <a href="/leaderboard" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.9rem' }}>Leaderboard</a>
              <a href="/achievements" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.9rem' }}>Achievements</a>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Company</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a href="#" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.9rem' }}>About Us</a>
              <a href="#" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.9rem' }}>Blog</a>
              <a href="#" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.9rem' }}>Careers</a>
              <a href="#" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.9rem' }}>Contact</a>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Support</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a href="#" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.9rem' }}>Help Center</a>
              <a href="#" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.9rem' }}>Privacy Policy</a>
              <a href="#" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.9rem' }}>Terms of Service</a>
            </div>
          </div>

          {/* Social Col */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Follow Us</h4>
            <div style={{ display: 'flex', gap: '1rem' }}>
               <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--primary-blue)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', textDecoration: 'none', transition: 'transform 0.2s', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
               </a>
               <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--primary-blue)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', textDecoration: 'none', transition: 'transform 0.2s', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
               </a>
               <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--primary-blue)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', textDecoration: 'none', transition: 'transform 0.2s', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
               </a>
            </div>
          </div>
        </div>

        {/* Mascot Peeking from Corner */}
        <div style={{ position: 'absolute', bottom: '-20px', right: '20px', zIndex: 1 }}>
          <img src="/src/assets/Miru - thinking.png" alt="Miru" style={{ height: '120px', filter: 'drop-shadow(0 0 20px rgba(0,194,255,0.4))' }} className="animate-float" />
        </div>

        {/* Copyright */}
        <div className="container" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '3rem', paddingTop: '1.5rem', color: '#9CA3AF', fontSize: '0.85rem', position: 'relative', zIndex: 2 }}>
           &copy; 2026 MIMORA. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
