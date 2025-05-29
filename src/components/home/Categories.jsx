import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPills, 
  FaAppleAlt, 
  FaSoap, 
  FaHeartbeat, 
  FaBaby, 
  FaFirstAid,
  FaPlus,
  FaArrowRight
} from 'react-icons/fa';
import { GiMedicinePills } from 'react-icons/gi';
import { BiTestTube } from 'react-icons/bi';

const categories = [
  { name: 'Prescription Medicines', icon: <GiMedicinePills className="w-8 h-8" />, count: 1250 },
  { name: 'Wellness & Nutrition', icon: <FaAppleAlt className="w-7 h-7" />, count: 320 },
  { name: 'Personal Care', icon: <FaSoap className="w-7 h-7" />, count: 450 },
  { name: 'Healthcare Devices', icon: <FaFirstAid className="w-7 h-7" />, count: 180 },
  { name: 'Mother & Baby Care', icon: <FaBaby className="w-7 h-7" />, count: 210 },
  { name: 'Sexual Wellness', icon: <FaHeartbeat className="w-7 h-7" />, count: 95 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 120 }
  },
  hover: {
    y: -10,
    transition: { duration: 0.2 }
  }
};

const Categories = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Explore Our Categories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Quality healthcare products for every need, delivered with care and professionalism.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {categories.map((category, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center border border-blue-100/50 hover:border-blue-200/80">
                <div className="mb-4 relative">
                  <div className="absolute inset-0 bg-blue-100 rounded-full blur-[20px] opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                  <div className="relative w-16 h-16 flex items-center justify-center text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500 font-medium">
                  {category.count}+ Products
                </p>
                <div className="mt-4 w-8 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="relative overflow-hidden group bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-200/50">
            <span className="relative z-10 flex items-center gap-2">
              View All Categories
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;