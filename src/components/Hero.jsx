import React, { useState, useRef, useEffect } from 'react';

const Hero = ({ searchTerm, onSearchChange, universities, onSelectUniversity, selectedState, onStateChange, uniqueStates }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [stateQuery, setStateQuery] = useState('');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredStates = uniqueStates.filter(state => 
    state.toLowerCase().includes(stateQuery.toLowerCase())
  );

  return (
    <header className="relative overflow-hidden m-0 rounded-none p-10 pb-20 bg-cover bg-center bg-no-repeat sm:m-5 sm:rounded-[30px] sm:p-[60px_8%_80px_8%] shadow-premium" id="heroSec" style={{ backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.7), rgba(30, 58, 138, 0.8)), url('https://images.unsplash.com/photo-1541339907198-e08759df9a13?auto=format&fit=crop&q=80&w=2000')" }}>
      <div className="relative z-10 flex flex-col items-center justify-center gap-8 max-w-[900px] mx-auto text-center">
        <div className="w-full">
          <h1 className="text-4xl sm:text-5xl md:text-[4.2rem] font-black mb-6 text-white drop-shadow-2xl tracking-tight">University Hub</h1>
          <p className="text-lg sm:text-xl text-white/90 font-medium max-w-[600px] mx-auto leading-relaxed">India ki Universities ke Syllabus aur Notes yahan milenge.</p>

          <div className="flex flex-col gap-5 mt-10 w-full sm:flex-row sm:flex-wrap">
            <div className="relative flex-1 min-w-[250px]" ref={dropdownRef}>
              <label className="block text-white/80 text-sm font-semibold mb-2 text-left ml-2">Choose State:</label>
              <div className="relative">
                <div 
                  className="flex items-center justify-between px-6 py-3.5 bg-white/15 backdrop-blur-xl border border-white/20 rounded-3xl text-white cursor-pointer transition-all hover:bg-white/25 shadow-sm" 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span className="font-medium">{selectedState}</span>
                  <i className={`fa-solid fa-chevron-${isDropdownOpen ? 'up' : 'down'} text-xs opacity-70`}></i>
                </div>
                {isDropdownOpen && (
                  <div className="absolute top-[calc(100%+10px)] left-0 w-full bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-[1100] animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="flex items-center gap-3 px-5 py-3 border-b border-gray-50 bg-gray-50/50">
                      <i className="fa-solid fa-search text-gray-400 text-sm"></i>
                      <input 
                        type="text" 
                        placeholder="Search state..." 
                        className="w-full bg-transparent border-none outline-none text-slate-700 text-sm font-medium placeholder:text-gray-400" 
                        value={stateQuery}
                        onChange={(e) => setStateQuery(e.target.value)}
                        autoFocus
                      />
                    </div>
                    <ul className="max-h-[250px] overflow-y-auto py-2 scrollbar-thin scrollbar-thumb-gray-200">
                      {filteredStates.map(state => (
                        <li 
                          key={state} 
                          onClick={() => {
                            onStateChange(state);
                            setIsDropdownOpen(false);
                            setStateQuery('');
                          }}
                          className={`px-5 py-2.5 text-sm font-medium cursor-pointer transition-colors ${selectedState === state ? 'bg-primary/10 text-primary' : 'text-slate-600 hover:bg-gray-50'}`}
                        >
                          {state}
                        </li>
                      ))}
                      {filteredStates.length === 0 && (
                        <li className="px-5 py-4 text-sm text-gray-400 italic text-center">No state found</li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="relative flex-[2] min-w-[300px]">
              <label className="block text-white/80 text-sm font-semibold mb-2 text-left ml-2">Search University:</label>
              <div className="relative group">
                <i className="fa-solid fa-university absolute left-6 top-1/2 -translate-y-1/2 text-white/60 text-lg group-focus-within:text-white transition-colors"></i>
                <input
                  type="text"
                  placeholder="Apni University Search karein (AKU, DU, PPU...)"
                  className="w-full pl-14 pr-6 py-3.5 bg-white/15 backdrop-blur-xl border border-white/20 rounded-3xl text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/25 transition-all shadow-sm font-medium"
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                />
                {searchTerm && universities.length > 0 && (
                  <ul className="absolute top-[calc(100%+10px)] left-0 w-full bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[1100] animate-in fade-in slide-in-from-top-4 duration-300">
                    {universities.map((u) => (
                      <li 
                        key={u.id} 
                        onClick={() => onSelectUniversity(u)}
                        className="px-6 py-4 flex items-center gap-4 cursor-pointer hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0"
                      >
                        <i className="fa-solid fa-graduation-cap text-primary/60 text-lg"></i>
                        <div className="flex flex-col">
                          <span className="font-bold text-slate-800 tracking-tight">{u.name}</span>
                          <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">{u.state}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
                {searchTerm && universities.length === 0 && (
                  <ul className="absolute top-[calc(100%+10px)] left-0 w-full bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-[1100]">
                    <li className="px-6 py-6 text-slate-400 italic text-center font-medium">University not found. Try a different name.</li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;

