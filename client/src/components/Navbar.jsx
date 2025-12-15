import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // 1. Import Auth
import { useCart } from '../context/CartContext';
import { ShoppingCart, Cpu, User, LogOut } from 'lucide-react';

const Navbar = () => {
    const { user, logout } = useAuth(); // 2. Get user & logout function
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/'); // Go home after logout
  };
  const navItems = [
    { name: 'AsclePlus Tech', path: '/tech' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Shop', path: '/shop' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <nav className="flex justify-between items-center py-4 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-primary tracking-tight">
            {/* <span className='text-[#005818]'>ASC</span><span className='text-[#3f7104]'>LE</span><span className='text-[#3f7104] font-extrabold text-3xl'>+</span> <span className='text-[#014f65]'>PHA</span><span className=''>RMA</span> */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">ASCLE<span className='font-extrabold text-3xl'>+</span> PHARMA</span>
        {/* <span className="text-sm align-top">©</span> */}
        </Link>

        {/* Links Container */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navItems.map((item) => {
            const isTech = item.name === 'AsclePlus Tech';
            
            return (
              <li key={item.name}>
                <Link 
                  to={item.path} 
                  className={`
                    flex items-center gap-2 transition-colors duration-200
                    ${isTech 
                      ? 'text-teal-600 hover:text-teal-800 font-mono font-bold tracking-tight' // Tech Style: Monospace + Teal
                      : 'text-gray-500 hover:text-accent' // Normal Style
                    }
                  `}
                >
                  {isTech && <Cpu size={16} className="mb-0.5" />} {/* Icon slightly adjusted for alignment */}
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center space-x-6">
          {/* <Link to="/cart" className="relative cursor-pointer hover:text-accent transition">
            <ShoppingCart className="w-6 h-6 text-gray-600 hover:text-accent" />
            <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
          </Link> */}

          <Link to="/cart" className="relative p-2 text-slate-600 hover:text-emerald-600 transition">
              <ShoppingCart size={24} />
              {cartItems.length > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-emerald-600 rounded-full">
                  {cartItems.length}
                </span>
              )}
            </Link>
          
          {/* --- CONDITIONAL RENDERING --- */}
            {user ? (
              // IF LOGGED IN: Show Profile Icon & Logout
              <div className="flex items-center gap-3">
                <Link to="/profile" className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-slate-700 hover:bg-slate-200 transition">
                  <User size={18} />
                  <span className="font-bold text-sm hidden sm:block">{user.name.split(' ')[0]}</span>
                </Link>
                
                <button 
                  onClick={handleLogout} 
                  title="Logout"
                  className="p-2 text-slate-400 hover:text-red-500 transition"
                >
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              // IF LOGGED OUT: Show Login/Signup Button
              <Link to="/login" className="px-5 py-2.5 rounded-full bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition">
                Login / Sign Up
              </Link>
            )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;