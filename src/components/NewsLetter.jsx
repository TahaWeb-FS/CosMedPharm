import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Healthy With Our Tips</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Subscribe to our newsletter and get 10% off your first order plus weekly health tips</p>
        <div className="flex flex-col sm:flex-row justify-center max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="px-4 py-3 rounded-l-lg text-gray-800 flex-grow sm:rounded-r-none sm:rounded-l-lg"
          />
          <button className="bg-white text-blue-600 px-6 py-3 rounded-r-lg font-semibold hover:bg-gray-100 transition sm:rounded-l-none sm:rounded-r-lg">
            Subscribe
          </button>
        </div>
        <p className="text-sm mt-4 opacity-80">We respect your privacy. Unsubscribe at any time.</p>
      </div>
    </section>
  );
};

export default Newsletter;