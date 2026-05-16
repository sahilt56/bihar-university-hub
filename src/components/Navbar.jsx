import React, { useState } from 'react';

const Navbar = ({ onOpenUpload, darkMode, toggleDarkMode, view, setView, onReset }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (viewName) => {
    setView(viewName);
    setIsMenuOpen(false);
    if (viewName === 'home') onReset();
  };

  return (
    <nav className="sticky top-0 z-[1000] flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm md:px-[8%]">
      <div className="flex items-center gap-2 text-2xl font-extrabold tracking-tight cursor-pointer text-primary" onClick={onReset}>
        <i className="fa-solid fa-graduation-cap text-xl text-primary"></i>
        <span>University <span className="text-accent">Hub</span></span>
      </div>

      {/* Desktop & Mobile Menu Wrapper */}
      <div className={`
        fixed top-0 right-0 h-screen w-[280px] bg-white flex flex-col gap-8 p-12 transition-all duration-400 shadow-2xl z-[1050]
        md:static md:h-auto md:w-auto md:bg-transparent md:flex-row md:items-center md:p-0 md:shadow-none md:z-auto
        ${isMenuOpen ? 'right-0' : '-right-full md:right-0'}
      `}>
        <div className="flex flex-col gap-6 md:flex-row md:gap-7">
          <span 
            className={`cursor-pointer font-semibold text-sm transition-colors relative py-1 hover:text-primary ${view === 'home' ? 'text-primary after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:height-[2px] after:bg-primary after:rounded-sm' : 'text-slate-600'}`}
            onClick={() => handleNavClick('home')}
          >
            Home
          </span>
          <span 
            className={`cursor-pointer font-semibold text-sm transition-colors relative py-1 hover:text-primary ${view === 'blog' ? 'text-primary after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:height-[2px] after:bg-primary after:rounded-sm' : 'text-slate-600'}`}
            onClick={() => handleNavClick('blog')}
          >
            Blog
          </span>
        </div>

        <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-7">
          <button 
            className="px-6 py-2.5 bg-primary text-white font-semibold rounded-lg shadow-sm transition-all hover:bg-primary-light hover:-translate-y-0.5"
            onClick={() => { onOpenUpload(); setIsMenuOpen(false); }}
          >
            Upload Notes
          </button>

          <button className="hidden md:flex text-slate-600 hover:text-primary transition-colors text-xl" onClick={toggleDarkMode}>
            <i className={`fa-solid ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
        </div>
      </div>

      <button className="flex md:hidden text-2xl text-primary cursor-pointer z-[1100]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
      </button>
    </nav>
  );
};

export default Navbar;

