import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link, useLocation } from 'react-router-dom'; // Import useLocation
import { Gift } from 'lucide-react'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation(); // Hook to access the state passed from Signup

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(email, password);

    if (result.success) {
      // LOGIC: Check if we came from Signup page
      // location.state?.newUser will ONLY be true if they just signed up
      if (location.state?.newUser) {
        setShowPopup(true);
      } else {
        // Normal Login -> Go straight to shop
        navigate('/shop'); 
      }
    }
  };

  const handleClaimOffer = () => {
    setShowPopup(false);
    navigate('/cart');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 py-12 px-4 relative">
      
      {/* --- POPUP (Only shows if newUser is true) --- */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl shadow-2xl max-w-sm w-full p-8 relative text-center border-4 border-emerald-100 animate-in zoom-in-95">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white p-4 rounded-full shadow-lg">
              <Gift size={40} />
            </div>

            <h2 className="mt-8 text-3xl font-black text-slate-900">Welcome!</h2>
            <p className="text-slate-500 mt-2">Account created successfully.</p>
            
            <div className="my-6 bg-emerald-50 p-4 rounded-xl border border-emerald-200">
              <p className="text-emerald-800 font-bold text-lg">25% OFF UNLOCKED</p>
              <p className="text-xs text-emerald-600">Applied automatically to your first order</p>
            </div>

            <button 
              onClick={handleClaimOffer}
              className="w-full py-4 rounded-xl bg-slate-900 text-white font-bold text-lg hover:bg-slate-800 transition shadow-xl shadow-emerald-200"
            >
              Start Shopping ➔
            </button>
          </div>
        </div>
      )}

      {/* --- LOGIN FORM --- */}
      <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-xl">
        <h2 className="text-3xl font-extrabold text-center text-slate-900 mb-6">Welcome Back</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <input type="email" required className="block w-full px-4 py-3 border border-slate-300 rounded-xl" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" required className="block w-full px-4 py-3 border border-slate-300 rounded-xl" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          <button type="submit" className="w-full py-3 rounded-xl text-white bg-blue-600 hover:bg-blue-700 font-bold shadow-lg">Sign In</button>
        </form>
        <div className="text-center mt-4">
            <p>Don't have an account? <Link to="/signup" className="font-bold text-emerald-600 hover:text-emerald-700">Sign Up</Link></p>
        </div>
      </div>

    </div>
  );
};
export default Login;