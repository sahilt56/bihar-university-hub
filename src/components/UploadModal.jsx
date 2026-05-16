import React from 'react';

const UploadModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[2000] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-md bg-white rounded-[32px] p-10 shadow-2xl animate-in zoom-in-95 duration-300 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-6 right-6 text-2xl text-slate-400 hover:text-secondary transition-colors"
          onClick={onClose}
        >
          &times;
        </button>
        
        <div className="w-20 h-20 bg-primary/5 rounded-3xl flex items-center justify-center text-primary text-4xl mx-auto mb-6">
          <i className="fa-solid fa-rocket"></i>
        </div>
        
        <h3 className="text-2xl font-black text-secondary mb-4 tracking-tight">Upload Notes</h3>
        
        <div className="mb-6">
          <p className="text-xl font-bold text-primary mb-2 italic">This feature is coming soon! ✨</p>
          <p className="text-slate-500 font-medium leading-relaxed">
            We are building a robust system for you to share your notes and earn reputation in the community. Stay tuned!
          </p>
        </div>
        
        <button 
          onClick={onClose} 
          className="w-full py-4 bg-secondary text-white font-black rounded-2xl shadow-soft hover:bg-slate-800 transition-all active:scale-95 tracking-widest uppercase text-xs"
        >
          Got It!
        </button>
      </div>
    </div>
  );
};

export default UploadModal;

