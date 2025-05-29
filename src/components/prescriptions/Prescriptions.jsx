import React from 'react';
import { 
  FaPills, 
  FaMobileAlt, 
  FaClock, 
  FaShieldAlt, 
  FaTruck, 
  FaUserMd,
  FaStar
} from 'react-icons/fa';
import { Shield, Clock, Pill } from "lucide-react";

const Prescriptions = () => {
  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Section with Green Color Scheme - Full Viewport Height */}
      <div className="relative bg-gradient-to-r from-green-600 to-teal-500 text-white min-h-screen flex items-center">
      {/* Larger, more dynamic abstract shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white opacity-10 rounded-full"></div>
        <div className="absolute top-40 right-20 w-64 h-64 bg-white opacity-10 rounded-full"></div>
        <div className="absolute bottom-16 left-1/3 w-80 h-80 bg-white opacity-10 rounded-full"></div>
        <div className="absolute bottom-40 right-1/4 w-48 h-48 bg-white opacity-10 rounded-full"></div>
        <div className="absolute top-1/3 left-20 w-32 h-32 bg-white opacity-10 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto w-full px-6 py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="bg-white/10 inline-block px-6 py-2 rounded-full text-base font-medium mb-8 backdrop-blur-sm">
              Easy prescription management
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Modern <span className="text-green-200">Prescription</span> Management
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-green-50 max-w-xl leading-relaxed">
              Simple, fast, and secure prescription transfers and refills designed with your health in mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-white text-green-600 px-10 py-4 rounded-xl font-semibold hover:bg-green-50 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
                Transfer Prescription
              </button>
              <button className="bg-green-700 bg-opacity-30 backdrop-blur-sm border-2 border-white border-opacity-30 px-10 py-4 rounded-xl font-semibold hover:bg-green-700 hover:bg-opacity-50 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
                Refill Prescription
              </button>
            </div>
            
            {/* Enhanced trust indicators */}
            <div className="mt-16 flex items-center gap-10 text-green-50">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6" />
                <span className="text-lg">HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6" />
                <span className="text-lg">24/7 Support</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-xl">
              {/* Enhanced decorative elements */}
              <div className="absolute -top-8 -left-8 w-full h-full bg-gradient-to-br from-teal-400 to-green-500 rounded-3xl rotate-6 opacity-60"></div>
              <div className="absolute -bottom-8 -right-8 w-full h-full bg-gradient-to-tr from-green-600 to-teal-400 rounded-3xl -rotate-6 opacity-60"></div>
              
              {/* Larger main image placeholder */}
              <div className="relative bg-white p-3 rounded-3xl shadow-2xl">
                <div className="bg-gray-100 rounded-2xl overflow-hidden relative z-10 aspect-[4/3] w-full">
                  <div className="w-full h-full bg-gradient-to-br from-green-100 to-teal-200 flex items-center justify-center p-12">
                    <Pill className="w-32 h-32 text-green-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* Features Section with Improved Cards */}
      <div className="py-24 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Benefits</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-800">Why Choose Our Pharmacy?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Experience the convenience and reliability of our comprehensive prescription services.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<FaMobileAlt className="text-green-500 text-3xl" />}
            title="Mobile App"
            description="Manage prescriptions from your phone with our easy-to-use app"
          />
          <FeatureCard 
            icon={<FaClock className="text-green-500 text-3xl" />}
            title="Fast Refills"
            description="Most refills ready in under 30 minutes"
          />
          <FeatureCard 
            icon={<FaShieldAlt className="text-green-500 text-3xl" />}
            title="Secure"
            description="HIPAA-compliant and encrypted data protection"
          />
          <FeatureCard 
            icon={<FaTruck className="text-green-500 text-3xl" />}
            title="Free Delivery"
            description="Free local delivery on all prescriptions"
          />
          <FeatureCard 
            icon={<FaUserMd className="text-green-500 text-3xl" />}
            title="Pharmacist Consult"
            description="Free consultations with our pharmacists"
          />
          <FeatureCard 
            icon={<FaPills className="text-green-500 text-3xl" />}
            title="Auto Refills"
            description="Never run out with our automatic refill program"
          />
        </div>
      </div>

      {/* How It Works - Improved with Connected Steps */}
      <div className="bg-gray-100 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Simple Process</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-800">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Three simple steps to get your prescriptions quickly and easily</p>
          </div>
          
          <div className="relative">
            {/* Connection line for desktop */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-teal-500 z-0"></div>
            
            <div className="flex flex-col md:flex-row gap-8 relative z-10">
              <StepCard 
                number="1"
                title="Send Us Your Prescription"
                description="Transfer from another pharmacy or have your doctor send it electronically"
              />
              <StepCard 
                number="2"
                title="We Process Your Order"
                description="Our pharmacists verify and prepare your medications"
              />
              <StepCard 
                number="3"
                title="Receive Your Medication"
                description="Pick up in-store or get free delivery to your door"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials - Enhanced Version */}
      <div className="py-24 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-800">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Don't just take our word for it - see what our satisfied customers have to say</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="The mobile app makes refilling prescriptions so easy. I never have to wait in line anymore!"
            author="Sarah J."
            location="Local Customer"
          />
          <TestimonialCard 
            quote="The free delivery service has been a lifesaver since I had surgery. Highly recommend!"
            author="Michael T."
            location="Long-time Patient"
          />
          <TestimonialCard 
            quote="The pharmacists are so knowledgeable and always take time to answer my questions."
            author="Elena R."
            location="New Customer"
          />
        </div>
      </div>

      {/* CTA Section with Green Theme */}
      <div className="bg-gradient-to-r from-green-600 to-teal-500 text-white py-24 px-4 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white opacity-10 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Simplify Your Prescriptions?</h2>
          <p className="text-xl mb-10 text-green-50 max-w-2xl mx-auto">Join thousands of happy customers who trust us with their medication needs. Get started in just minutes.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get Started Today
            </button>
            <button className="bg-green-700 bg-opacity-30 backdrop-blur-sm border-2 border-white border-opacity-30 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 hover:bg-opacity-50 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Learn More
            </button>
          </div>
          
          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">HIPAA Compliant</div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">Secure Payments</div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">24/7 Support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition group relative overflow-hidden">
      {/* Green accent in corner */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-green-400 to-teal-500 opacity-10 rounded-bl-3xl group-hover:w-full group-hover:h-full group-hover:rounded-none group-hover:opacity-5 transition-all duration-300"></div>
      
      <div className="mb-6 p-3 bg-green-50 rounded-xl inline-block">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const StepCard = ({ number, title, description }) => {
  return (
    <div className="flex-1 bg-white p-8 rounded-2xl shadow-md relative">
      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const TestimonialCard = ({ quote, author, location }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md relative">
      {/* Quote mark */}
      <div className="absolute top-4 right-6 text-5xl text-green-100">"</div>
      
      <div className="text-yellow-400 mb-4 flex">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="mr-1" />
        ))}
      </div>
      <p className="italic text-gray-700 mb-8 relative z-10">{quote}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
          {author.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-gray-800">{author}</div>
          <div className="text-sm text-gray-500">{location}</div>
        </div>
      </div>
    </div>
  );
};

export default Prescriptions;