import React from 'react';
import Hero from '../components/Hero';
import CourseCard from '../components/CourseCard';
import { courseMaster } from '../data/courses';

const Home = ({ 
  searchTerm, 
  onSearchChange, 
  universities, 
  onSelectUniversity, 
  selectedState, 
  onStateChange, 
  uniqueStates 
}) => {
  return (
    <div className="bg-bg-main min-h-screen">
      <Hero
        searchTerm={searchTerm}
        onSearchChange={onSearchChange}
        universities={universities}
        onSelectUniversity={onSelectUniversity}
        selectedState={selectedState}
        onStateChange={onStateChange}
        uniqueStates={uniqueStates}
      />
      
      <section className="py-16 px-6 md:px-[8%]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-black text-secondary tracking-tight mb-2">Our Top Courses</h2>
            <p className="text-slate-500 font-medium text-sm sm:text-base">Elite study materials for professional career growth.</p>
          </div>
          <div className="hidden sm:flex p-4 bg-primary/5 rounded-2xl text-primary text-2xl shadow-inner border border-primary/5">
            <i className="fa-solid fa-graduation-cap"></i>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {['BCA', 'BTECH', 'NURSING'].map((id) => (
            <CourseCard
              key={id}
              course={courseMaster[id]}
              onClick={() => {
                document.getElementById('heroSec').scrollIntoView({ behavior: 'smooth' });
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

