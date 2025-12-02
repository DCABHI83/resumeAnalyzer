import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { NavLink } from 'react-router-dom';

const Hero = () => {
  const headingRef = useRef(null);

  // GSAP animation for linear text
  useGSAP(() => {
    gsap.to(headingRef.current, {
      backgroundPosition: '200% center',
      duration: 3,
      ease: 'none',
      repeat: -1,
    });
  }, []);

  // Framer Motion variants for stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      className='flex flex-col justify-center items-center gap-8 p-10 mt-10 min-h-[80vh] '
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className='flex flex-col justify-center items-center gap-6 max-w-5xl'>
        
        {/* Main Heading with GSAP animated linear */}
        <motion.h1
          ref={headingRef}
          variants={itemVariants}
          className='text-5xl md:text-7xl font-extrabold text-center bg-linear-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%_auto] text-shadow-lg'
        >
          Optimize Your Resume with the Power of AI
        </motion.h1>
        
        {/* Subheading with stagger */}
        <motion.h2
          variants={itemVariants}
          className='text-2xl md:text-4xl font-semibold text-gray-700 text-center'
        >
          Fine Tune your resume with the help of this resume analyzer
        </motion.h2>
        
        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className='text-lg md:text-2xl text-gray-600 text-center'
        >
          Your one stop to all your resume solutions
        </motion.p>

        {/* CTA Buttons with hover/tap animations */}
        <motion.div
          variants={itemVariants}
          className='flex gap-4 mt-6 flex-wrap justify-center'
        >
          <motion.div
  variants={buttonVariants}
  whileHover="hover"
  whileTap="tap"
>
  <NavLink
    className='px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300 inline-block'
    to='/playground'
  >
    Get Started Free
  </NavLink>
</motion.div>

          
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className='px-8 py-4 bg-white/20 backdrop-blur-md border border-white/30 text-gray-800 font-semibold rounded-full shadow-lg hover:bg-white/30 transition-colors duration-300'
          >
            See How It Works
          </motion.button>
        </motion.div>

        {/* Feature badges with glass cards and stagger */}
        <motion.div
          variants={itemVariants}
          className='flex gap-6 mt-8 flex-wrap justify-center'
        >
          {['✨ AI-Powered', '⚡ Instant Results', '🎯 ATS Optimized'].map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + index * 0.15, duration: 0.6 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className='px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-md cursor-pointer'
            >
              <span className='text-sm font-medium text-gray-700'>{badge}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
