import React from 'react';

const tips = [
  {
    title: 'Managing Seasonal Allergies',
    excerpt: 'Learn how to prepare for allergy season with these simple tips.',
    category: 'Wellness',
    image: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
    readTime: '4 min read'
  },
  {
    title: 'The Importance of Vitamin D',
    excerpt: 'Why this sunshine vitamin is crucial for your immune system and bone health.',
    category: 'Nutrition',
    image: 'https://images.unsplash.com/photo-1544033527-b192daee1f5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
    readTime: '6 min read'
  },
  {
    title: 'Home Blood Pressure Monitoring',
    excerpt: 'How to get accurate readings and track your cardiovascular health at home.',
    category: 'Health Devices',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
    readTime: '5 min read'
  },
];

const HealthTips = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
            Health Resources
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Wellness Tips & Articles</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert advice to help you and your family stay healthy
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={tip.image} 
                  alt={tip.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                <span className="absolute top-4 right-4 px-3 py-1 text-xs font-medium text-white bg-blue-600 rounded-full">
                  {tip.category}
                </span>
              </div>
              
              <div className="p-6 bg-white">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  {tip.readTime}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {tip.title}
                </h3>
                <p className="text-gray-600 mb-5">{tip.excerpt}</p>
                
                <button className="flex items-center font-medium text-blue-600 hover:text-blue-800 transition-colors">
                  Read article
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
            View all health tips
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HealthTips;