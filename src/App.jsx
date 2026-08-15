import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/views/LandingPage.jsx';
import Login from './components/views/Login.jsx';
import Dashboard from './components/views/Dashboard.jsx';
import QuizLibrary from './components/views/QuizLibrary.jsx';
import QuizEngine from './components/views/QuizEngine.jsx';
import Navbar from './components/layouts/Navbar.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/library" element={<QuizLibrary />} />
          <Route path="/quiz/:id" element={<QuizEngine />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
