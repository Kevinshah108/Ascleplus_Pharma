import React, { useState } from 'react';
import { Search, Star, Quote, Globe, Tag, Cpu, ArrowRight } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { products } from '../data/products';

const Hero = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  // ... (Keep existing handle functions unchanged) ...
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length > 0) {
      const matches = products.filter(p => 
        p.name.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 5);
      setSuggestions(matches);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearchClick = () => {
    if (query) navigate('/shop', { state: { searchQuery: query } });
  };

  const handleSuggestionClick = (productName) => {
    setQuery(productName);
    setSuggestions([]);
    navigate('/shop', { state: { searchQuery: productName } });
  };

  return (
    <section className="relative w-full overflow-hidden py-12">
      
      {/* 1. EMBEDDED CSS */}
      <style>{`
        /* Smooth, contained floating animation */
        @keyframes float {
          0% { transform: translate(0px, 0px) rotate(0deg); }
          25% { transform: translate(15px, -20px) rotate(6deg); }
          50% { transform: translate(-10px, -30px) rotate(12deg); }
          75% { transform: translate(-20px, -10px) rotate(4deg); }
          100% { transform: translate(0px, 0px) rotate(0deg); }
        }
        
        .animate-float-1 { animation: float 12s ease-in-out infinite; }
        .animate-float-2 { animation: float 16s ease-in-out infinite reverse; }
        .animate-float-3 { animation: float 20s ease-in-out infinite; }
        
        .animate-bounce-slow { animation: bounce 5s infinite; }
      `}</style>

      {/* 2. PAGE BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-blue-50/50 rounded-full blur-3xl opacity-50 -z-10"></div>
          <div className="absolute bottom-0 left-0 w-[50rem] h-[50rem] bg-emerald-50/50 rounded-full blur-3xl opacity-50 -z-10"></div>
      </div>

      {/* 3. THE CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column (Unchanged) */}
        <div className="space-y-8">
           <h1 className="text-5xl md:text-[4.5rem] font-bold text-primary leading-[1.1] drop-shadow-sm">
            Ultimate Healthcare, <br /> Today And Tomorrow
          </h1>
          <p className="text-gray-700 text-lg max-w-md font-medium drop-shadow-sm">
            It's important to address your health conditions during medications for the best substance.
          </p>
          <div className="relative max-w-lg">
            <div className="flex bg-white/80 backdrop-blur-md shadow-xl shadow-indigo-900/10 rounded-xl p-1.5 border border-white/50">
              <input type="text" placeholder="Type your pills name (e.g. Omega)" className="flex-grow px-4 outline-none text-gray-800 bg-transparent font-medium placeholder-gray-500" value={query} onChange={handleInputChange} onKeyDown={(e) => e.key === 'Enter' && handleSearchClick()} />
              <button onClick={handleSearchClick} className="bg-accent hover:bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium transition shadow-md">Search</button>
            </div>
            {suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/50 overflow-hidden z-50">
                {suggestions.map((product) => (
                  <div key={product.id} onClick={() => handleSuggestionClick(product.name)} className="flex items-center gap-4 p-3 hover:bg-blue-50/50 cursor-pointer transition border-b border-gray-50 last:border-none">
                    <img src={product.image} alt={product.name} className="w-10 h-10 rounded-full object-cover" />
                    <div><h4 className="font-bold text-primary text-sm">{product.name}</h4><span className="text-xs text-gray-400">{product.category}</span></div>
                    <div className="ml-auto text-accent font-bold text-sm">₹{product.price}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="grid grid-cols-3 gap-4 pt-8 mt-2 max-w-lg">
              <div className="group flex flex-col items-center justify-center p-3 bg-white/70 backdrop-blur-md rounded-2xl border border-white/60 shadow-sm hover:shadow-md hover:scale-105 transition-all cursor-pointer">
                  <div className="p-2 bg-orange-100 rounded-full text-orange-600 mb-1"><Tag size={18} /></div>
                  <div className="text-center"><span className="block text-[10px] md:text-xs font-bold text-gray-700 uppercase tracking-wider">First Order</span><span className="block text-sm md:text-base font-bold text-orange-600 leading-tight">25% Off</span></div>
              </div>
              <div className="group flex flex-col items-center justify-center p-3 bg-white/70 backdrop-blur-md rounded-2xl border border-white/60 shadow-sm hover:shadow-md hover:scale-105 transition-all cursor-pointer">
                  <div className="p-2 bg-blue-100 rounded-full text-blue-600 mb-1"><Globe size={18} /></div>
                  <div className="text-center"><span className="block text-[10px] md:text-xs font-bold text-gray-700 uppercase tracking-wider">Shipping</span><span className="block text-sm md:text-base font-bold text-blue-600 leading-tight">Global</span></div>
              </div>
              <Link to="/tech" className="group flex flex-col items-center justify-center p-3 bg-white/70 backdrop-blur-md rounded-2xl border border-white/60 shadow-sm hover:shadow-md hover:scale-105 transition-all cursor-pointer relative overflow-hidden">
                  <span className="absolute top-0 right-0 bg-emerald-600 text-[8px] font-bold text-white px-1.5 py-0.5 rounded-bl-lg">NEW</span>
                  <div className="p-2 bg-emerald-100 rounded-full text-emerald-600 mb-2"><Cpu size={20} /></div>
                  <span className="text-[10px] md:text-xs font-bold text-emerald-800 text-center leading-tight">AsclePlus <br/> Tech</span>
              </Link>
          </div>
        </div>

        {/* --- RIGHT VISUALS (BIGGER CONTAINER) --- */}
        {/* Changed h-[500px] to h-[600px] to make the component bigger */}
        <div className="relative h-[600px] flex items-center justify-center z-10 group">
          
          {/* Glass Card Container (Full Height/Width of column, no shadow) */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden transition-all group-hover:border-white/30">
             
             {/* --- FLOATING PILLS (Moved inwards to prevent clipping) --- */}
             
             {/* Pill 1: Blue - Moved down and right slightly */}
             <div className="absolute top-16 left-10 w-24 h-48 rounded-full shadow-lg animate-float-1 opacity-90"
                  style={{ 
                    background: 'linear-gradient(180deg, #3b82f6 50%, #ffffff 50%)',
                    transform: 'rotate(-30deg)' 
                  }}>
                  <div className="absolute top-4 left-4 w-4 h-12 bg-white opacity-40 rounded-full"></div>
             </div>

             {/* Pill 2: Purple - Moved down and left slightly */}
             <div className="absolute top-12 right-12 w-20 h-40 rounded-full shadow-lg animate-float-2 opacity-90"
                  style={{ 
                    background: 'linear-gradient(180deg, #8b5cf6 50%, #ffffff 50%)',
                    transform: 'rotate(25deg)' 
                  }}>
                  <div className="absolute top-3 left-3 w-3 h-10 bg-white opacity-40 rounded-full"></div>
             </div>

             {/* Pill 3: Red - Moved up and left slightly */}
             <div className="absolute bottom-24 right-16 w-28 h-56 rounded-full shadow-xl animate-float-3 opacity-90"
                  style={{ 
                    background: 'linear-gradient(180deg, #ef4444 50%, #ffffff 50%)',
                    transform: 'rotate(45deg)' 
                  }}>
                  <div className="absolute top-6 left-5 w-5 h-14 bg-white opacity-40 rounded-full"></div>
             </div>

             {/* Pill 4: Yellow - Moved up and right slightly */}
             <div className="absolute bottom-28 left-12 w-16 h-32 rounded-full shadow-md animate-float-1 opacity-90"
                  style={{ 
                    background: 'linear-gradient(180deg, #eab308 50%, #ffffff 50%)',
                    transform: 'rotate(-15deg)' 
                  }}>
                  <div className="absolute top-3 left-3 w-3 h-8 bg-white opacity-40 rounded-full"></div>
             </div>

             {/* Decorative Elements */}
             <div className="absolute top-1/2 left-1/3 w-8 h-8 rounded-full border-[6px] border-blue-400 opacity-60 animate-bounce-slow"></div>
             <div className="absolute top-20 right-1/2 w-6 h-6 rounded-full border-[4px] border-yellow-400 opacity-60 animate-pulse"></div>
             <div className="absolute bottom-10 left-1/2 w-7 h-7 rounded-full border-[6px] border-green-400 opacity-60 animate-bounce-slow"></div>  
             {/* <div className="absolute bottom-10 left-1/2 w-4 h-4 rounded-full bg-emerald-400 opacity-60 animate-ping"></div> */}

          </div>

          {/* Floating "Happy Customer" Card */}
          <div className="absolute bottom-16 left-8 bg-white/80 backdrop-blur-2xl p-5 rounded-2xl shadow-xl z-20 max-w-xs animate-bounce-slow border border-white/40">
             <div className="absolute -top-4 -right-4 bg-accent p-2 rounded-full text-white shadow-lg"><Quote size={16} /></div>
             <h3 className="text-accent font-semibold text-sm mb-1">Happy Customer</h3>
             <div className="flex items-center gap-1 mb-3">
               {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-yellow-400 text-yellow-400"/>)}
               <span className="text-primary font-bold text-sm ml-1">4.9</span>
             </div>
             <div className="flex -space-x-3">
               {[1,2,3,4].map((i) => (
                 <img key={i} className="w-10 h-10 rounded-full border-2 border-white object-cover" src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
               ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;