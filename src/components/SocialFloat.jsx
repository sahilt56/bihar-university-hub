import React from 'react';

const SocialFloat = () => {
  return (
    <div className="fixed right-5 bottom-8 flex flex-col gap-4 z-[999]">
      <a 
        href="https://wa.me/7367807523" 
        className="w-12 h-12 flex items-center justify-center bg-[#25D366] text-white rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95" 
        target="_blank" 
        rel="noopener noreferrer" 
        title="WhatsApp Us"
      >
        <i className="fa-brands fa-whatsapp text-xl"></i>
      </a>
      <a 
        href="https://facebook.com/your-page" 
        className="w-12 h-12 flex items-center justify-center bg-[#1877F2] text-white rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95" 
        target="_blank" 
        rel="noopener noreferrer" 
        title="Follow on Facebook"
      >
        <i className="fa-brands fa-facebook-f text-lg"></i>
      </a>
      <a 
        href="https://instagram.com/your-profile" 
        className="w-12 h-12 flex items-center justify-center bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95" 
        target="_blank" 
        rel="noopener noreferrer" 
        title="Follow on Instagram"
      >
        <i className="fa-brands fa-instagram text-xl"></i>
      </a>
    </div>
  );
};

export default SocialFloat;

