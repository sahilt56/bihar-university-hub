import React from 'react';
import CourseCard from './CourseCard';
import { courseMaster } from '../data/courses';

const UniversityPortal = ({ university, onBack, onSelectCourse }) => {
  return (
    <section id="univPortal">
      <button className="back-btn" onClick={onBack}>
        <i className="fa-solid fa-arrow-left"></i> Change University
      </button>
      <div className="portal-header">
        <h1>{university.name}</h1>
        <p>Location: {university.state}</p>
      </div>
      <h2 className="section-title">Available Courses</h2>
      <div className="grid">
        {university.courses.map((courseId) => {
          const course = courseMaster[courseId];
          return course ? (
            <CourseCard
              key={courseId}
              course={course}
              onClick={() => onSelectCourse(courseId)}
            />
          ) : null;
        })}
      </div>
    </section>
  );
};

export default UniversityPortal;
