import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import PublicLayout from './components/layouts/PublicLayout.jsx';
import AppLayout from './components/layouts/AppLayout.jsx';

// Public Views
import LandingPage from './components/views/LandingPage.jsx';
import Login from './components/views/Login.jsx';
import Pricing from './components/views/Pricing.jsx';
import NotFound from './components/views/NotFound.jsx';

// App Views
import Dashboard from './components/views/Dashboard.jsx';
import Explore from './components/views/Explore.jsx';
import QuizEngine from './components/views/QuizEngine.jsx';
import QuizResults from './components/views/QuizResults.jsx';
import Classes from './components/views/Classes.jsx';
import Community from './components/views/Community.jsx';
import Leaderboard from './components/views/Leaderboard.jsx';
import Achievements from './components/views/Achievements.jsx';
import Profile from './components/views/Profile.jsx';
import InstructorDashboard from './components/views/InstructorDashboard.jsx';
import AdminDashboard from './components/views/AdminDashboard.jsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/pricing" element={<Pricing />} />
        </Route>
        
        <Route path="/login" element={<Login />} />

        {/* Authenticated/App Routes */}
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/quiz/:id" element={<QuizEngine />} />
          <Route path="/quiz/:id/results" element={<QuizResults />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/community" element={<Community />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/instructor" element={<InstructorDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
