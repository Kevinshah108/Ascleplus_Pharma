import React, { useState } from 'react';

const Auth = () => {
  // State to toggle between Login (true) and Sign Up (false)
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="py-20 px-6 max-w-7xl mx-auto flex justify-center items-center min-h-[60vh]">
      <div className="bg-white p-8 rounded-2xl shadow-2xl shadow-indigo-100 border border-gray-100 max-w-md w-full transition-all duration-300">
        
        {/* Dynamic Header */}
        <h2 className="text-3xl font-bold text-primary mb-2 text-center">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h2>
        <p className="text-gray-500 text-center mb-8 text-sm">
          {isLogin ? 'Enter your details to access your account' : 'Get started with your free account today'}
        </p>

        <form className="space-y-4">
          {/* "Full Name" field - Only shows if we are Signing Up */}
          {!isLogin && (
            <div className="animate-fade-in-down">
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition" 
              />
            </div>
          )}

          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition" 
          />
          
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition" 
          />

          {/* Confirm Password - Only shows if we are Signing Up */}
          {!isLogin && (
            <div className="animate-fade-in-up">
              <input 
                type="password" 
                placeholder="Confirm Password" 
                className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition" 
              />
            </div>
          )}

          <button className="w-full bg-accent hover:bg-indigo-600 text-white py-3 rounded-lg font-medium transition shadow-lg shadow-indigo-200 mt-4">
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        {/* Toggle Switch */}
        <div className="mt-6 text-center text-sm text-gray-600">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button 
            onClick={() => setIsLogin(!isLogin)} 
            className="text-accent font-semibold hover:underline"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </div>

      </div>
    </div>
  );
};

export default Auth;