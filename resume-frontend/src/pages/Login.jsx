import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'
const Login = () => {
  const [activeTab, setActiveTab] = useState('login'); 
  
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [signupUser, setSignupUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate()

  const handleSubmit =async (e) => {
  try {
    e.preventDefault()
    const res = await fetch('http://localhost:3000/api/v1/login',{
      method:"POST",
      credentials:"include",
      headers:{
"Content-Type":"application/json"
      },
      body:JSON.stringify({
        email:user.email,
        password:user.password
      })
    })
   if(res.status === 200){
    const data= await res.json()
    toast.success(data.message)
   navigate('/')
   }
  } catch (error) {
    toast.error(error.message)
  }
  };

  const handleSignupSubmit = async(e) => {
   try {
    e.preventDefault()
    if(signupUser.password !== signupUser.confirmPassword){
    toast.error("password didnt match")
    }
    const res = await fetch("http://localhost:3000/api/v1/signup",{
      method:"POST",
      headers:{
        'Content-Type':"application/json"
      },
      body:JSON.stringify({
       name:signupUser.name,
       email:signupUser.email,
       password:signupUser.password,
      })
    })
  const data = await res.json()
  console.log(data)
   } catch (error) {
    console.log(error.message)
  
   }
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSignupChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setSignupUser({
      ...signupUser,
      [name]: value,
    });
  };

  return (
    <div className='min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden'>
      {/* Background Image with Overlay */}
    

      {/* Auth Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className='relative z-10 w-full max-w-5xl grid md:grid-cols-2 gap-0 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden'
      >
        {/* Left Side - Welcome Section */}
        <div className='hidden md:flex flex-col justify-center items-center p-12 bg-linear-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-xl relative'>
          <div className='text-center z-10'>
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className='text-6xl font-bold text-white mb-6'
            >
              Welcome Back
            </motion.h1>
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className='text-xl text-white/90 mb-8'
            >
              Optimize your resume with AI-powered insights
            </motion.p>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: 'spring' }}
              className='text-9xl mb-8'
            >
              🚀
            </motion.div>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className='text-white/80'
            >
              Join thousands of job seekers landing their dream roles
            </motion.p>
          </div>

          {/* Decorative Elements */}
          <div className='absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl' />
          <div className='absolute bottom-10 right-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl' />
        </div>

        {/* Right Side - Form Section */}
        <div className='p-8 md:p-12 flex flex-col justify-center'>
          {/* Tab Switcher */}
          <div className='flex gap-2 mb-8 p-1 bg-white/5 backdrop-blur-lg rounded-full border border-white/10'>
            <button
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'login'
                  ? 'bg-white text-gray-900 shadow-lg'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab('signup')}
              className={`flex-1 py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'signup'
                  ? 'bg-white text-gray-900 shadow-lg'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Sign Up
            </button>
          </div>

          <AnimatePresence mode='wait'>
            {activeTab === 'login' ? (
              <motion.form
                key='login'
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                className='space-y-6'
              >
                <h2 className='text-3xl font-bold text-white mb-6'>
                  Login to Your Account
                </h2>

                <div className='flex flex-col gap-2'>
                  <label htmlFor='email' className='text-white/90 font-medium'>
                    Email Address
                  </label>
                  <input
                    type='email'
                    name='email'
                    className='w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all'
                    placeholder='your@email.com'
                    value={user.email}
                    onChange={handleChange}
                  />
                </div>

                <div className='flex flex-col gap-2'>
                  <label htmlFor='password' className='text-white/90 font-medium'>
                    Password
                  </label>
                  <input
                    type='password'
                    name='password'
                    className='w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all'
                    placeholder='••••••••'
                    value={user.password}
                    onChange={handleChange}
                  />
                </div>

                <div className='flex justify-between items-center text-sm'>
                  <label className='flex items-center text-white/80 cursor-pointer'>
                    <input type='checkbox' className='mr-2' />
                    Remember me
                  </label>
                  <a href='#' className='text-white/80 hover:text-white transition-colors'>
                    Forgot Password?
                  </a>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type='submit'
                  className='w-full py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'
                >
                  Login Now
                </motion.button>
              </motion.form>
            ) : (
              <motion.form
                key='signup'
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSignupSubmit}
                className='space-y-6'
              >
                <h2 className='text-3xl font-bold text-white mb-6'>
                  Create New Account
                </h2>

                <div className='flex flex-col gap-2'>
                  <label htmlFor='name' className='text-white/90 font-medium'>
                    Full Name
                  </label>
                  <input
                    type='text'
                    name='name'
                    className='w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all'
                    placeholder='John Doe'
                    value={signupUser.name}
                    onChange={handleSignupChange}
                  />
                </div>

                <div className='flex flex-col gap-2'>
                  <label htmlFor='email' className='text-white/90 font-medium'>
                    Email Address
                  </label>
                  <input
                    type='email'
                    name='email'
                    className='w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all'
                    placeholder='your@email.com'
                    value={signupUser.email}
                    onChange={handleSignupChange}
                  />
                </div>

                <div className='flex flex-col gap-2'>
                  <label htmlFor='password' className='text-white/90 font-medium'>
                    Password
                  </label>
                  <input
                    type='password'
                    name='password'
                    className='w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all'
                    placeholder='••••••••'
                    value={signupUser.password}
                    onChange={handleSignupChange}
                  />
                </div>

                <div className='flex flex-col gap-2'>
                  <label htmlFor='confirmPassword' className='text-white/90 font-medium'>
                    Confirm Password
                  </label>
                  <input
                    type='password'
                    name='confirmPassword'
                    className='w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all'
                    placeholder='••••••••'
                    value={signupUser.confirmPassword}
                    onChange={handleSignupChange}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type='submit'
                  className='w-full py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'
                >
                  Create Account
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
