import React from 'react';
import pharmacist from '../../assets/pharmacist.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen mt-24 md:mt-0 flex items-center overflow-hidden">
      {/* Background Image with Overlay - Adjusted to show right portion */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full relative">
          <img 
            src={pharmacist}
            alt="Smiling pharmacist"
            className="w-full h-full object-cover object-right" // Changed to object-left
            style={{ objectPosition: '50% center' }} // This shifts the image focus right
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/1920x1080?text=Pharmacist+Background";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        </div>
      </div>

      {/* Content Overlay - Left Side (unchanged) */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="block">Pharma</span>
            <span className="block text-blue-300 mt-2">Makes Your Health</span>
            <span className="block text-white mt-2">Better Will Makes</span>
          </h1>
          
          <p className="text-lg w-10/12 text-gray-200 mb-8">
            Our certified pharmacists provide personalized and customized care and premium medications for your wellness journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg">
              Get Your Prescription
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-3 rounded-lg font-bold backdrop-blur-sm transition">
              Meet Our Team
            </button>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-16 flex flex-wrap gap-6">
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <svg className="w-5 h-5 text-blue-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-white">24/7 Pharmacy Services</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <svg className="w-5 h-5 text-blue-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-white">FDA Approved Medications</span>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default HeroSection;