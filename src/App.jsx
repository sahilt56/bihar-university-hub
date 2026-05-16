import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseCard from './components/CourseCard';
import UniversityPortal from './components/UniversityPortal';
import DetailView from './components/DetailView';
import Footer from './components/Footer';
import SocialFloat from './components/SocialFloat';
import UploadModal from './components/UploadModal';
import Home from './pages/Home';
import Blog from './pages/Blog';
import { univs } from './data/universities';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUniv, setSelectedUniv] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedState, setSelectedState] = useState('All');
  const [view, setView] = useState('home'); // 'home' | 'blog'

  const uniqueStates = [
    'All',
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
    'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Delhi'
  ];

  // Handle Dark Mode
  useEffect(() => {
    const savedTheme = localStorage.getItem('techerax-theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    if (newDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('techerax-theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('techerax-theme', 'light');
    }
  };

  // Handle Scroll Progress
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const resetToHome = () => {
    setView('home');
    setSelectedUniv(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredUnivs = univs.filter((u) => {
    const matchesSearch = u.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesState = selectedState === 'All' || u.state === selectedState;
    return matchesSearch && matchesState;
  });

  const handleSelectUniversity = (u) => {
    setSelectedUniv(u);
    setSearchTerm('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      </div>

      <Navbar
        onOpenUpload={() => setIsUploadOpen(true)}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        view={view}
        setView={setView}
        onReset={resetToHome}
      />

      <main className="container" style={{ paddingTop: view === 'blog' ? '40px' : '0' }}>
        {selectedUniv ? (
          <DetailView
            university={selectedUniv}
            onBack={() => setSelectedUniv(null)}
          />
        ) : view === 'home' ? (
          <Home 
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            universities={filteredUnivs}
            onSelectUniversity={handleSelectUniversity}
            selectedState={selectedState}
            onStateChange={setSelectedState}
            uniqueStates={uniqueStates}
          />
        ) : (
          <Blog />
        )}
      </main>

      <Footer />

      <SocialFloat />
      <UploadModal isOpen={isUploadOpen} onClose={() => setIsUploadOpen(false)} />
    </div>
  );
}

export default App;
