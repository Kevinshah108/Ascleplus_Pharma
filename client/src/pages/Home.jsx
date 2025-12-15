import React from 'react';
import Hero from '../components/Hero';
import { products } from '../data/products';
import { Link } from 'react-router-dom'; 
import { Truck, ShieldCheck, Clock, ArrowRight, Star, CreditCard, Wifi } from 'lucide-react';

const Home = () => {
  return (
    <div className="pb-0">
      <Hero />

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition">
            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm text-accent">
              <Truck size={24} />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">Free Delivery</h3>
            <p className="text-gray-500 text-sm">We deliver to 100+ cities with no extra cost for orders above ₹500.</p>
          </div>
          <div className="bg-purple-50/50 p-8 rounded-2xl border border-purple-100 hover:shadow-lg transition">
            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm text-purple-600">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">100% Authentic</h3>
            <p className="text-gray-500 text-sm">All products are sourced directly from manufacturers.</p>
          </div>
          <div className="bg-orange-50/50 p-8 rounded-2xl border border-orange-100 hover:shadow-lg transition">
            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm text-orange-500">
              <Clock size={24} />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">24/7 Support</h3>
            <p className="text-gray-500 text-sm">Our pharmacists are available around the clock for advice.</p>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-primary">Popular Now</h2>
            <p className="text-gray-500 mt-2">Top selling medicines this week</p>
          </div>
          {/* View All Button Linked to Shop */}
          <Link to="/shop">
            <button className="text-accent font-semibold flex items-center gap-2 hover:gap-3 transition-all">
              View All <ArrowRight size={18} />
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* Slice(0,4) to only show the first 4 items from our data */}
  {products.slice(0, 4).map((item) => (
    <div key={item.id} className="group border border-gray-100 rounded-2xl p-4 hover:shadow-xl transition duration-300 bg-white">
      <div className="h-40 bg-gray-50 rounded-xl mb-4 relative overflow-hidden">
         <img 
           src={item.image} 
           alt={item.name} 
           className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
         />
      </div>
      <div className="text-xs text-accent font-semibold mb-1 uppercase tracking-wider">{item.category}</div>
      <h3 className="font-bold text-primary text-lg mb-1">{item.name}</h3>

      <div className="flex items-center gap-1 mb-3 text-yellow-400 text-sm">
        <Star size={14} fill="currentColor" /> {item.rating}
      </div>

      {/* <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-primary">₹{item.price}</span>
        <button className="bg-primary text-white p-2 rounded-lg hover:bg-accent transition">
          <span className="text-xs font-medium px-2">Add</span>
        </button>
      </div> */}
    </div>
  ))}
</div>
      </section>

      {/* Promotional Banner with NEW Visual */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="bg-primary rounded-3xl p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 max-w-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get <span className="text-accent">25% Off</span> on your first order
            </h2>
            <p className="text-blue-200 mb-8">
              Join our Premium Care program today. Sign up to get exclusive healthcare benefits and priority delivery.
            </p>
            <Link to="/contact">
                <button className="bg-white text-primary px-8 py-3 rounded-xl font-bold hover:bg-gray-50 transition shadow-lg">
                Get Started Now
                </button>
            </Link>
          </div>

          {/* New Attractive Visual: A Floating Glass "Premium Card" */}
          <div className="relative mt-12 md:mt-0 perspective-1000">
            <div className="w-80 h-48 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl relative p-6 flex flex-col justify-between transform rotate-y-12 rotate-x-6 hover:rotate-0 transition-all duration-700 ease-out cursor-pointer group">
                {/* Card Chip */}
                <div className="flex justify-between items-start">
                    <Wifi size={24} className="text-white/70 rotate-90" />
                    <span className="text-white/80 font-mono text-sm tracking-widest">PREMIUM</span>
                </div>
                {/* Card Number */}
                <div className="text-white/90 font-mono text-lg tracking-widest mt-4 group-hover:text-accent transition-colors">
                    **** **** **** 4289
                </div>
                {/* Card Footer */}
                <div className="flex justify-between items-end">
                    <div>
                        <div className="text-white/40 text-[10px] uppercase">Card Holder</div>
                        <div className="text-white font-medium">John Doe</div>
                    </div>
                    <CreditCard size={32} className="text-white/80" />
                </div>
            </div>
            {/* Background Glow for the Card */}
            <div className="absolute -inset-4 bg-accent/30 blur-2xl -z-10 rounded-full"></div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;