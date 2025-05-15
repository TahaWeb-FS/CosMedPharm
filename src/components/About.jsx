import React, { useEffect, useRef } from 'react';
import pharmacist3 from '../assets/pharmacist3.png';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaHeartbeat, 
  FaLightbulb, 
  FaHandHoldingHeart, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaChevronDown,
  FaAward,
  FaUsers,
  FaClock,
  FaCalendarCheck
} from 'react-icons/fa';

const About = () => {
  // Animations with InView
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Counter animation for stats
  const CounterAnimation = ({ end, suffix = '', duration = 2 }) => {
    const nodeRef = useRef(null);
    
    useEffect(() => {
      const node = nodeRef.current;
      if (!node) return;
      
      let startTimestamp = null;
      const startValue = 0;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        const currentCount = Math.floor(progress * (end - startValue) + startValue);
        node.textContent = currentCount + suffix;
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          node.textContent = end + suffix;
        }
      };
      
      window.requestAnimationFrame(step);
    }, [end, duration, suffix]);
    
    return <span ref={nodeRef}>0{suffix}</span>;
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="font-sans text-gray-900 bg-white overflow-hidden">
      {/* Hero Section with Parallax Effect */}
      <header className="relative h-screen flex items-center overflow-hidden bg-white">
        {/* Left section with content */}
        <div className="w-full lg:w-1/2 px-8 md:px-16 lg:pl-24 z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-6">
              <div className="h-1 w-12 bg-teal-500 mr-4"></div>
              <p className="text-teal-600 font-medium tracking-widest text-sm uppercase">Your Trusted Pharmacy</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Wellness <span className="text-teal-600">Delivered</span> With Care
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-md mb-10">
              Expert pharmaceutical services personalized to your health needs with safety and innovation at our core.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition duration-300 font-medium flex items-center">
                <span>View Services</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
              
              <button className="bg-white border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-3 rounded-lg transition duration-300 font-medium">
                Contact Us
              </button>
            </div>
            
            <div className="mt-16 flex items-center gap-8">
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-full">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="ml-2 text-gray-700">Certified</span>
              </div>
              
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-full">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="ml-2 text-gray-700">24/7 Support</span>
              </div>
              
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-full">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="ml-2 text-gray-700">Fast Delivery</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Right section with illustration */}
        <div className="hidden lg:block w-1/2 h-full relative">
          {/* Background design elements */}
          <div className="absolute top-0 right-0 w-full h-full bg-teal-50"></div>
          
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-teal-100 opacity-40"></div>
            <div className="absolute bottom-1/3 right-1/3 w-48 h-48 rounded-full bg-blue-100 opacity-60"></div>
          </div>
          
          {/* Pharmacy illustration */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-3/4">
              {/* Medicine bottle */}
              <motion.div 
                className="absolute top-16 right-12"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <svg width="120" height="180" viewBox="0 0 120 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="20" y="50" width="80" height="130" rx="10" fill="#E6FFFA" stroke="#0D9488" strokeWidth="3"/>
                  <rect x="30" y="70" width="60" height="90" rx="5" fill="white"/>
                  <rect x="30" y="10" width="60" height="40" rx="5" fill="#0D9488"/>
                  <rect x="40" y="90" width="40" height="10" rx="2" fill="#0D9488" opacity="0.3"/>
                  <rect x="40" y="110" width="40" height="10" rx="2" fill="#0D9488" opacity="0.3"/>
                  <rect x="40" y="130" width="40" height="10" rx="2" fill="#0D9488" opacity="0.3"/>
                </svg>
              </motion.div>
              
              {/* Pills */}
              <motion.div 
                className="absolute bottom-20 left-20"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }}
              >
                <svg width="160" height="70" viewBox="0 0 160 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="80" cy="35" rx="80" ry="35" fill="#bae6fd" stroke="#0284c7" strokeWidth="2"/>
                  <line x1="80" y1="5" x2="80" y2="65" stroke="#0284c7" strokeWidth="2" strokeDasharray="5 3"/>
                </svg>
              </motion.div>
              
              {/* Medical cross symbol */}
              <motion.div 
                className="absolute top-40 left-8"
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              >
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="30" y="10" width="20" height="60" rx="4" fill="#0D9488"/>
                  <rect x="10" y="30" width="60" height="20" rx="4" fill="#0D9488"/>
                </svg>
              </motion.div>
              
              {/* Mortar and pestle */}
              <motion.div 
                className="absolute bottom-16 right-20"
                animate={{ rotate: [0, -3, 0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
              >
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20,80 C20,65 35,50 50,50 C65,50 80,65 80,80 L20,80 Z" fill="#e2e8f0" stroke="#64748b" strokeWidth="2"/>
                  <rect x="45" y="10" width="10" height="60" rx="5" fill="#64748b" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Mobile scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 lg:hidden"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FaChevronDown className="w-5 h-5 text-teal-600" />
        </motion.div>
      </header>

      {/* Mission Statement Banner */}
      <section className="py-10 bg-gradient-to-r from-blue-600 to-teal-500">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h2 className="text-2xl md:text-3xl font-light italic">
              "Our mission is to deliver exceptional healthcare solutions with integrity, innovation, and compassion."
            </h2>
          </div>
        </div>
      </section>

      {/* Story Section with Parallax Scrolling */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Gradient Blobs */}
        <div className="absolute -top-40 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-7xl mx-auto px-6 relative z-10"
        >
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              variants={itemVariants} 
              className="lg:w-1/2"
            >
              <div className="relative group perspective">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-2xl blur opacity-25 group-hover:opacity-70 transition duration-700"></div>
                <div className="relative transform group-hover:scale-102 transition duration-700">
                  <img
                    src="https://images.unsplash.com/photo-1576602976047-174e57a47881?q=80&w=3269&auto=format&fit=crop"
                    alt="Modern pharmacy interior"
                    className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                  />
                  
                  {/* Image Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants} 
              className="lg:w-1/2"
            >
              <span className="inline-block py-1 px-3 rounded-full text-sm font-semibold bg-blue-100 text-blue-600 mb-4">OUR STORY</span>
              <h2 className="text-4xl font-bold mb-6 text-gray-800 leading-tight">
                Two Decades of Trust &<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Healthcare Innovation</span>
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Since our founding in 2000, we've transformed from a single neighborhood pharmacy to a regional healthcare leader. 
                Our journey has been guided by one simple principle: <strong className="text-blue-600">patient care comes first</strong>.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <FaUsers className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">50,000+</h3>
                      <p className="text-gray-600">Patients Annually</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mr-4">
                      <FaClock className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">24/7</h3>
                      <p className="text-gray-600">Telehealth Services</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                      <FaAward className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">Award-winning</h3>
                      <p className="text-gray-600">Education Programs</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
                      <FaCalendarCheck className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">20+ Years</h3>
                      <p className="text-gray-600">Serving Community</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Values Section with Cards */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decoration Elements */}
        <div className="absolute top-0 left-0 w-20 h-20 bg-blue-100 rounded-br-full opacity-70"></div>
        <div className="absolute top-0 right-0 w-20 h-20 bg-teal-100 rounded-bl-full opacity-70"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-blue-100 rounded-tl-full opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-teal-100 rounded-tr-full opacity-70"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-block py-1 px-3 rounded-full text-sm font-semibold bg-blue-100 text-blue-600 mb-4">OUR PHILOSOPHY</span>
              <h2 className="text-4xl font-bold text-gray-800">
                Core Values That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Guide Us</span>
              </h2>
            </motion.div>
          </div>
          
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
            {/* Value 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-700"></div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-100 text-blue-600 mr-4">
                    <FaHeartbeat className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Integrity First</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  We uphold the highest ethical standards in every prescription filled and every recommendation made. Your trust is our most valued asset.
                </p>
              </div>
            </motion.div>

            {/* Value 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="h-2 bg-gradient-to-r from-teal-500 to-teal-700"></div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-teal-100 text-teal-600 mr-4">
                    <FaLightbulb className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Innovative Care</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Leveraging cutting-edge technology to enhance your healthcare experience, from smart prescription management to digital health monitoring.
                </p>
              </div>
            </motion.div>

            {/* Value 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="h-2 bg-gradient-to-r from-purple-500 to-purple-700"></div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-purple-100 text-purple-600 mr-4">
                    <FaHandHoldingHeart className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Compassionate Service</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Healthcare with heart. Our team listens, understands, and goes above and beyond to make your experience as comfortable as possible.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section with Hover Effects */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-block py-1 px-3 rounded-full text-sm font-semibold bg-blue-100 text-blue-600 mb-4">MEET THE EXPERTS</span>
              <h2 className="text-4xl font-bold text-gray-800">
                Your Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Healthcare Partners</span>
              </h2>
            </motion.div>
          </div>
          
          <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {/* Team Member 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <div className="aspect-w-3 aspect-h-4 bg-gray-200">
                  <img
                    src={pharmacist3}
                    alt="Dr. Emily Roberts"
                    className="object-cover object-center w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Social icons that appear on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="text-white hover:text-blue-200">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-blue-200">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-blue-200">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-900">Dr. Emily Roberts</h3>
                <p className="text-blue-600 font-medium">Chief Pharmacist</p>
                <p className="mt-2 text-gray-600 text-sm">20+ years experience in clinical pharmacy with specialization in medication therapy management and patient education.</p>
              </div>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <div className="aspect-w-3 aspect-h-4 bg-gray-200">
                  <img
                    src="https://img.freepik.com/free-photo/forget-about-your-vitamin-pills_329181-326.jpg?w=826"
                    alt="Michael Chen"
                    className="object-cover object-center w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Social icons that appear on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="text-white hover:text-blue-200">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-blue-200">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-blue-200">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-900">Michael Chen</h3>
                <p className="text-blue-600 font-medium">Pharmaceutical Specialist</p>
                <p className="mt-2 text-gray-600 text-sm">Expert in pharmaceuticals with a focus on integrating technology into modern healthcare solutions and patient support systems.</p>
              </div>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <div className="aspect-w-3 aspect-h-4 bg-gray-200">
                  <img
                    src="https://img.freepik.com/free-photo/smiling-doctor-offering-medicines_329181-619.jpg?t=st=1746966805~exp=1746970405~hmac=25add92bce875da0cd0bdab6668981f7b9a05856b28bbede88b5e385c9b7e5b2&w=826"
                    alt="Dr. Sarah Johnson"
                    className="object-cover object-center w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Social icons that appear on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="text-white hover:text-blue-200">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-blue-200">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-blue-200">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-900">Dr. Sarah Johnson</h3>
                <p className="text-blue-600 font-medium">Health Education Director</p>
                <p className="mt-2 text-gray-600 text-sm">Passionate about health literacy and community outreach with expertise in creating accessible health education programs.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locations Section with Map */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-block py-1 px-3 rounded-full text-sm font-semibold bg-blue-100 text-blue-600 mb-4">FIND US</span>
              <h2 className="text-4xl font-bold text-gray-800">
                Visit Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Locations</span>
              </h2>
            </motion.div>
          </div>
          
          <div className="grid gap-16 grid-cols-1 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="h-64 bg-gray-300">
                  {/* This would be an interactive map in real implementation */}
                  <div className="w-full h-full bg-blue-100 flex items-center justify-center">
                    <FaMapMarkerAlt className="h-16 w-16 text-blue-500 opacity-50" />
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Locations</h3>
                  
                  <div className="space-y-6">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                          <FaMapMarkerAlt className="h-6 w-6" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-gray-900">Downtown Center</h4>
                        <p className="mt-1 text-gray-600">123 Main Street, Suite 200<br />New York, NY 10001</p>
                        <p className="mt-2 text-blue-600 font-medium flex items-center">
                          <FaPhoneAlt className="h-4 w-4 mr-2" />
                          (212) 555-1234
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-100 text-teal-600">
                          <FaMapMarkerAlt className="h-6 w-6" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-gray-900">Westside Clinic</h4>
                        <p className="mt-1 text-gray-600">456 Park Avenue<br />New York, NY 10022</p>
                        <p className="mt-2 text-teal-600 font-medium flex items-center">
                          <FaPhoneAlt className="h-4 w-4 mr-2" />
                          (212) 555-5678
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-100 text-purple-600">
                          <FaMapMarkerAlt className="h-6 w-6" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-gray-900">Brooklyn Heights</h4>
                        <p className="mt-1 text-gray-600">789 Atlantic Avenue<br />Brooklyn, NY 11217</p>
                        <p className="mt-2 text-purple-600 font-medium flex items-center">
                          <FaPhoneAlt className="h-4 w-4 mr-2" />
                          (718) 555-9012
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h3>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div>
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                        <input type="text" name="first-name" id="first-name" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border" />
                      </div>
                      
                      <div>
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                        <input type="text" name="last-name" id="last-name" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border" />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input type="email" name="email" id="email" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border" />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input type="tel" name="phone" id="phone" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border" />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <textarea name="message" id="message" rows="4" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border"></textarea>
                    </div>
                    
                    <div>
                      <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;