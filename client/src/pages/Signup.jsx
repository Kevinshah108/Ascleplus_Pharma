import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await signup(name, email, password);
    
    if (success) {
      // PASS DATA TO LOGIN PAGE: "newUser: true"
      navigate('/login', { state: { newUser: true } });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 py-12 px-4">
      <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-xl border border-emerald-100">
        <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-slate-900">Create Account</h2>
            <p className="text-slate-500 mt-2">Join us to unlock exclusive offers</p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input type="text" required className="block w-full px-4 py-3 border border-slate-300 rounded-xl" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} />
          <input type="email" required className="block w-full px-4 py-3 border border-slate-300 rounded-xl" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" required className="block w-full px-4 py-3 border border-slate-300 rounded-xl" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          <button type="submit" className="w-full py-3 rounded-xl text-white bg-emerald-600 hover:bg-emerald-700 font-bold shadow-lg">Sign Up & Claim Offer</button>
        </form>
        <p className="text-center mt-4 text-sm">Already have an account? <Link to="/login" className="font-bold text-blue-600">Log in</Link></p>
      </div>
    </div>
  );
};
export default Signup;