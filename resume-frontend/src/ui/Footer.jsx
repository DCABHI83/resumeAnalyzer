import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='mt-20 px-4 py-8'>
      <div className='max-w-6xl mx-auto'>
        <div className='bg-white/30 backdrop-blur-xl border border-white/40 rounded-3xl shadow-lg p-8'>
          
          {/* Main Content */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
            
            {/* Brand & Description */}
            <div className='md:col-span-1'>
              <h2 className='text-2xl font-bold text-gray-900 mb-2'>Rizz_AI</h2>
              <p className='text-gray-700 text-sm'>
                AI-powered resume analyzer built with React, Node.js, and Machine Learning
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className='text-lg font-semibold text-gray-900 mb-3'>Quick Links</h3>
              <ul className='space-y-2 text-sm'>
                <li><NavLink to='/howitworks' className='text-gray-700 hover:text-gray-900 transition-colors'>How It Works</NavLink></li>
                <li><NavLink to='/pricing' className='text-gray-700 hover:text-gray-900 transition-colors'>Pricing</NavLink></li>
                <li><NavLink to='/playground' className='text-gray-700 hover:text-gray-900 transition-colors'>Try Now</NavLink></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className='text-lg font-semibold text-gray-900 mb-3'>Connect</h3>
              <div className='flex gap-3'>
                <motion.a
                  href='https://github.com/DCABHI83'
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ scale: 1.1, y: -2 }}
                  className='w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md'
                >
                  GH
                </motion.a>
                <motion.a
                  href='https://linkedin.com/in/abhishek-kumar-72313820b/'
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ scale: 1.1, y: -2 }}
                  className='w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md'
                >
                  LI
                </motion.a>
                <motion.a
                  href='https://www.instagram.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ scale: 1.1, y: -2 }}
                  className='w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md'
                >
                  I
                </motion.a>
              </div>
              <p className='text-xs text-gray-600 mt-3'>
                Built by Abhishek • 2025
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className='border-t border-white/30 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-700'>
            <p>© 2025 ResumeAI. A full-stack portfolio project.</p>
            <div className='flex gap-4'>
              <a href='#' className='hover:text-gray-900 transition-colors'>Privacy</a>
              <a href='#' className='hover:text-gray-900 transition-colors'>Terms</a>
              <a href='https://github.com/yourusername/project-repo' target='_blank' rel='noopener noreferrer' className='hover:text-gray-900 transition-colors'>Source Code</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
