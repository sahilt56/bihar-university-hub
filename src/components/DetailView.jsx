import React, { useState } from 'react';
import { semesterData } from '../data/semesters';

const DetailView = ({ university, onBack }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const renderOverview = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        <div className="bg-white p-8 rounded-3xl shadow-soft border border-gray-100">
          <h3 className="text-xl font-bold text-secondary mb-5 flex items-center gap-3">
            <i className="fa-solid fa-circle-info text-primary-light"></i> About University
          </h3>
          <p className="text-slate-600 leading-relaxed font-medium">
            {university.about || "Information currently being updated for this university."}
          </p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-soft border border-gray-100">
          <h3 className="text-xl font-bold text-secondary mb-5 flex items-center gap-3">
            <i className="fa-solid fa-indian-rupee-sign text-primary-light"></i> Fee Structure
          </h3>
          <p className="text-slate-600 leading-relaxed font-medium">
            {university.feeStructure || "Please contact the university admission office for detailed fee structure."}
          </p>
        </div>
      </div>
      <div className="lg:col-span-1">
        <div className="bg-white p-8 rounded-3xl shadow-soft border border-gray-100 sticky top-28">
          <h3 className="text-xl font-bold text-secondary mb-6 flex items-center gap-3">
            <i className="fa-solid fa-address-book text-primary-light"></i> Contact Details
          </h3>
          <div className="space-y-4">
            {[
              { icon: 'fa-phone', label: university.contactInfo?.phone },
              { icon: 'fa-envelope', label: university.contactInfo?.email },
              { icon: 'fa-globe', label: university.contactInfo?.website },
              { icon: 'fa-location-dot', label: university.contactInfo?.address },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 text-slate-700">
                <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center text-primary shrink-0">
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
                <span className="text-sm font-semibold truncate">{item.label || "N/A"}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderColleges = () => (
    <div className="bg-white p-8 rounded-3xl shadow-soft border border-gray-100">
      <h3 className="text-xl font-bold text-secondary mb-8 flex items-center gap-3 border-b border-gray-50 pb-5">
        <i className="fa-solid fa-building-columns text-primary-light"></i> Affiliated Colleges
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {(university.affiliatedColleges || []).map((col, idx) => (
          <div key={idx} className="group bg-bg-main rounded-2xl overflow-hidden border border-gray-100 transition-all hover:shadow-premium hover:-translate-y-1">
            <img src={col.image} alt={col.name} className="w-full h-40 object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500" />
            <h4 className="p-4 text-sm font-bold text-secondary text-center leading-tight group-hover:text-primary transition-colors">{col.name}</h4>
          </div>
        ))}
        {(!university.affiliatedColleges || university.affiliatedColleges.length === 0) && (
            <p className="col-span-full py-12 text-center text-slate-400 font-medium italic bg-bg-main rounded-2xl border-2 border-dashed border-gray-200">
              Affiliated colleges database is being updated.
            </p>
        )}
      </div>
    </div>
  );

  const renderAcademics = () => {
    if (!selectedCourse) {
      return (
        <div className="bg-white p-10 rounded-3xl shadow-soft border border-gray-100">
          <div className="text-center max-w-md mx-auto mb-10">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary text-2xl mx-auto mb-4">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <h3 className="text-2xl font-black text-secondary mb-2">Academic Portal</h3>
            <p className="text-slate-500 font-medium">Select your course to access semesters, syllabus, and study notes.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {university.courses.map(course => (
              <button 
                key={course} 
                className="p-5 bg-bg-main border border-gray-100 rounded-2xl font-bold text-secondary transition-all hover:bg-primary hover:text-white hover:shadow-premium active:scale-95"
                onClick={() => setSelectedCourse(course)}
              >
                {course}
              </button>
            ))}
          </div>
        </div>
      );
    }

    const data = semesterData[`${university.id}_${selectedCourse}`] || semesterData[`COMMON_${selectedCourse}`] || [];

    return (
      <div className="space-y-8 animate-in fade-in duration-500">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <button 
            className="flex items-center gap-2 px-5 py-2.5 bg-secondary text-white rounded-xl font-bold text-xs tracking-widest uppercase hover:bg-slate-800 transition-colors shadow-soft" 
            onClick={() => setSelectedCourse(null)}
          >
            <i className="fa-solid fa-arrow-left text-[10px]"></i> All Courses
          </button>
          <h2 className="text-2xl font-black text-secondary tracking-tight">{selectedCourse} <span className="text-primary-light font-bold">Resources</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.length > 0 ? (
            data.map((item, index) => (
              <div key={index} className="bg-white p-7 rounded-3xl shadow-soft border-l-[6px] border-accent border-y border-r border-gray-100">
                <h3 className="text-xl font-black text-primary-light mb-4 tracking-tight">{item.sem}</h3>
                <div className="mb-8">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Main Subjects</p>
                  <p className="text-slate-700 font-bold text-sm leading-relaxed">{item.sub}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <a href={item.link} className="flex items-center justify-center gap-2 p-3 bg-bg-main border border-gray-100 rounded-xl font-bold text-[10px] tracking-widest uppercase text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all">
                    <i className="fa-solid fa-file-pdf"></i> Syllabus
                  </a>
                  <a href={item.link} className="flex items-center justify-center gap-2 p-3 bg-emerald-50 border border-emerald-100 rounded-xl font-bold text-[10px] tracking-widest uppercase text-emerald-700 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all">
                    <i className="fa-solid fa-book"></i> Get Notes
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-16 text-center bg-white rounded-3xl border border-gray-100 shadow-soft">
              <i className="fa-solid fa-hourglass-half text-4xl text-slate-200 mb-4 block"></i>
              <h3 className="text-lg font-bold text-slate-400">Database being updated for this course.</h3>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <button 
        className="flex items-center gap-2 px-5 py-2.5 bg-primary/10 text-primary rounded-xl font-bold text-xs tracking-widest uppercase hover:bg-primary hover:text-white transition-all mb-8 shadow-sm" 
        onClick={onBack}
      >
        <i className="fa-solid fa-arrow-left text-[10px]"></i> Back to Dashboard
      </button>

      <div className="relative h-[250px] sm:h-[350px] rounded-[40px] overflow-hidden mb-12 shadow-2xl group">
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${university.image || 'https://images.unsplash.com/photo-1541339907198-e08759df9a13?auto=format&fit=crop&q=80&w=1200' })` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        
        <div className="absolute bottom-10 left-10 right-10 flex flex-col items-start gap-4">
          <div className="px-4 py-1.5 bg-accent text-white text-[10px] font-black rounded-full shadow-lg uppercase tracking-widest flex items-center gap-2">
            <i className="fa-solid fa-university"></i> {university.state} University
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white drop-shadow-2xl tracking-tighter leading-tight">{university.name}</h1>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-10 overflow-x-auto pb-4 scrollbar-hide justify-start lg:justify-center">
        {[
          { id: 'overview', label: 'University Overview' },
          { id: 'academic', label: 'Syllabus & Notes' },
          { id: 'colleges', label: 'Affiliated Colleges' },
        ].map(tab => (
          <button 
            key={tab.id}
            className={`
              px-6 py-3 rounded-2xl font-bold text-sm tracking-tight transition-all duration-300 min-w-[max-content]
              ${activeTab === tab.id 
                ? 'bg-primary text-white shadow-premium -translate-y-1' 
                : 'bg-white text-slate-500 hover:text-primary hover:bg-primary/5 active:scale-95 border border-gray-100 shadow-soft'}
            `}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-8 transition-all">
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'academic' && renderAcademics()}
        {activeTab === 'colleges' && renderColleges()}
      </div>
    </div>
  );
};

export default DetailView;

