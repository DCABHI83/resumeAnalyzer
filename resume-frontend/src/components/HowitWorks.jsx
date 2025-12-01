import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const HowitWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Upload Your Resume',
      description: 'Simply drag and drop your resume or paste the content. We support PDF, DOCX, and text formats.',
      icon: '📄',
    },
    {
      number: '02',
      title: 'AI Analysis',
      description: 'Our advanced AI scans your resume for ATS compatibility, keywords, formatting, and impact metrics.',
      icon: '🤖',
    },
    {
      number: '03',
      title: 'Get Insights',
      description: 'Receive detailed feedback with actionable suggestions to improve your resume score instantly.',
      icon: '📊',
    },
    {
      number: '04',
      title: 'Optimize & Download',
      description: 'Apply recommended changes and download your optimized, ATS-friendly resume in minutes.',
      icon: '✨',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  return (
    <div className='min-h-screen flex flex-col items-center justify-center px-4 py-20'>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className='text-center mb-16'
      >
        <h2 className='text-5xl md:text-6xl font-bold text-gray-900 mb-4'>
          How It Works
        </h2>
        <p className='text-xl text-gray-700 max-w-2xl mx-auto'>
          Get your resume optimized in 4 simple steps
        </p>
      </motion.div>

      {/* Steps Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full'
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className='relative group'
          >
            {/* Glass Card */}
            <div className='h-full p-8 bg-white/30 backdrop-blur-lg border border-white/40 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300'>
              
              {/* Step Number */}
              <div className='absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg'>
                {step.number}
              </div>

              {/* Icon */}
              <div className='text-6xl mb-6 mt-4'>{step.icon}</div>

              {/* Title */}
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                {step.title}
              </h3>

              {/* Description */}
              <p className='text-gray-700 leading-relaxed'>
                {step.description}
              </p>

              {/* Connecting Line (except last card) */}
              {index < steps.length - 1 && (
                <div className='hidden lg:block absolute top-1/2 -right-8 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-transparent' />
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className='mt-16'
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-shadow duration-300'
        >
          Start Analyzing Now
        </motion.button>
      </motion.div>
    </div>
  );
};

export default HowitWorks;
