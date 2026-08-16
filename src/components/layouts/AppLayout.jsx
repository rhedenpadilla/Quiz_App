import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import AuthService from '../../services/AuthService.js';
import { LayoutDashboard, Compass, BookOpen, Users, Trophy, Award, MessageSquare, Settings, LogOut } from 'lucide-react';

export default function AppLayout() {
  const user = AuthService.getCurrentUser() || { name: 'Alex O.', title: 'Scholar Slime', level: 24 };
  const navigate = useNavigate();

  const handleLogout = () => {
    AuthService.logout();
    navigate('/');
  };

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Quizzes', path: '/explore', icon: Compass },
    { name: 'Classes', path: '/classes', icon: BookOpen },
    { name: 'Study Groups', path: '/community', icon: Users },
    { name: 'Leaderboard', path: '/leaderboard', icon: Trophy },
    { name: 'Achievements', path: '/achievements', icon: Award },
    { name: 'Messages', path: '#', icon: MessageSquare }, // Placeholder
    { name: 'Settings', path: '/profile', icon: Settings },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--bg-dark)' }}>
      {/* Sidebar */}
      <aside style={{ width: '250px', backgroundColor: 'var(--navy-blue)', borderRight: '1px solid var(--glass-border)', display: 'flex', flexDirection: 'column', padding: '1.5rem 1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '3rem', paddingLeft: '0.5rem' }}>
          <img src="/src/assets/Miru - Main.png" alt="Miru" style={{ height: '35px', width: '35px', objectFit: 'contain' }} />
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-light)', letterSpacing: '1px' }}>MIMORA</span>
        </div>

        <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {navItems.map(item => {
            const Icon = item.icon;
            return (
              <NavLink 
                key={item.name}
                to={item.path} 
                style={({ isActive }) => ({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  color: isActive ? 'var(--text-light)' : 'var(--text-muted)',
                  backgroundColor: isActive ? 'rgba(0, 194, 255, 0.15)' : 'transparent',
                  fontWeight: isActive ? '600' : '400',
                  transition: 'all 0.2s ease',
                  borderLeft: isActive ? '4px solid var(--primary-cyan)' : '4px solid transparent'
                })}
              >
                <Icon size={20} style={{ color: 'inherit' }} />
                {item.name}
              </NavLink>
            );
          })}
        </nav>

        {/* User Profile Mini */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', marginTop: 'auto', backgroundColor: 'var(--glass-bg)', borderRadius: '16px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--primary-blue)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>
            {user.name.charAt(0)}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>{user.name}</div>
            <div style={{ color: 'var(--primary-cyan)', fontSize: '0.8rem' }}>Lv {user.level}</div>
          </div>
          <button onClick={handleLogout} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
            <LogOut size={18} />
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100vh', overflowY: 'auto' }}>
        {/* Top Header */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 3rem', borderBottom: '1px solid var(--glass-border)' }}>
          <div style={{ flex: 1 }}>
            <input type="text" placeholder="Search..." className="input-field" style={{ width: '300px', marginBottom: 0, padding: '0.5rem 1rem', borderRadius: '20px' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span style={{ fontWeight: '600' }}>{user.name}</span>
            <div style={{ width: '35px', height: '35px', borderRadius: '50%', backgroundColor: 'var(--primary-cyan)' }}></div>
          </div>
        </header>
        
        <div style={{ padding: '2rem 3rem', flex: 1 }}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
