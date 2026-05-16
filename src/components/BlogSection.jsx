import React from 'react';

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: "How to Prepare for Semester Exams in 30 Days?",
      description: "Mastering the syllabus doesn't have to be stressful. Here's a step-by-step 30-day guide for university students.",
      tag: "Study Tips",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 2,
      title: "Top 5 Internships Every Engineering Student Should Apply For",
      description: "Looking to boost your resume? These internships provide the best hands-on experience and professional networking.",
      tag: "Careers",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 3,
      title: "Life at Patliputra University: A Student's Perspective",
      description: "From the best hangout spots to the most helpful professors, here's everything you need to know about campus life.",
      tag: "Campus Life",
      image: "https://images.unsplash.com/photo-1541339907198-e08759df9a13?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section className="py-16 px-6 md:px-[8%]" id="blogs">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-3xl font-black text-secondary tracking-tight mb-2">Latest Academic Blogs</h2>
          <p className="text-slate-500 font-medium text-sm sm:text-base">Stay updated with the latest university news and study tips.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map(blog => (
          <div key={blog.id} className="group bg-white rounded-3xl overflow-hidden shadow-soft border border-gray-100 transition-all duration-300 hover:shadow-premium hover:-translate-y-1.5 focus-within:ring-2 focus-within:ring-primary/20">
            <div className="relative h-56 overflow-hidden">
              <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute top-4 left-4">
                <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md text-primary text-xs font-bold rounded-full shadow-sm">
                  {blog.tag}
                </span>
              </div>
            </div>
            
            <div className="p-7">
              <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors leading-snug">
                {blog.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium line-clamp-2">
                {blog.description}
              </p>
              <a href="#heroSec" className="inline-flex items-center gap-2 text-primary font-bold text-xs tracking-widest uppercase group/link">
                <span>Read More</span>
                <i className="fa-solid fa-arrow-right text-[10px] transition-transform group-hover/link:translate-x-1"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;

