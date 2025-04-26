import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import CookiePolicy from './pages/Cookie';
import Terms from './pages/Terms'; 
import Privacy from './pages/Privacy';
import { DarkModeProvider } from './components/layout/DarkModeContext';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Initialize dark mode from localStorage or system preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setDarkMode(savedMode === 'true');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    // Apply dark mode class and save preference
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
    
    // Update page title
    document.title = 'Lovali | Secure Crypto Validation Services';
  }, []);

  return (
    <Router>
    <DarkModeProvider>
      <div className="min-h-screen bg-gray-950 text-white">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/cookie" element={<CookiePolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer />
      </div>
    </DarkModeProvider>
    </Router>
  );
}

export default App;