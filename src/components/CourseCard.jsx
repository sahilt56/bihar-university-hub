import React from 'react';

const CourseCard = ({ course, onClick }) => {
  return (
    <div 
      className="group bg-white rounded-3xl p-8 shadow-soft border border-gray-100 transition-all duration-300 hover:shadow-premium hover:-translate-y-1.5 cursor-pointer relative overflow-hidden"
      onClick={onClick}
    >
      <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full transition-transform group-hover:scale-110"></div>
      
      <div className="relative z-10">
        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary text-xl mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
          <i className={`fa-solid ${course.icon || 'fa-book-open'}`}></i>
        </div>
        
        <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors tracking-tight">{course.name}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
          {course.sems ? `Total: ${course.sems} Semesters Available` : 'Select University to view high-quality Study Materials'}
        </p>
        
        {course.sems && (
          <div className="flex items-center gap-2 text-primary font-bold text-xs tracking-widest uppercase">
            <span>ENTER PORTAL</span>
            <i className="fa-solid fa-arrow-right text-[10px] transition-transform group-hover:translate-x-1"></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCard;

