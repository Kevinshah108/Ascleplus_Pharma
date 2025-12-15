import React from 'react';
import { Server, Wifi, PenTool, Shield, Check, Cpu, Truck, Car } from 'lucide-react';
import TechFeatures from '../components/TechFeatures';

const TechHome = () => {
  return (
    <div className="bg-slate-50 min-h-screen ">
      
      {/* 1. Tech Hero Section */}
      <section className="bg-[#0f172a] text-white py-24 relative overflow-hidden">
        {/* Background circuit pattern (CSS simulated) */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-accent font-mono text-sm tracking-widest uppercase mb-2 block">AsclePlus Tech</span>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Smart IoT Intelligence <br/> for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Modern Mobility</span>
            </h1>
            <p className="text-slate-400 text-lg mb-8 max-w-lg">
              Advanced sensor arrays for Cars, Buses, and Heavy Trucks. Monitor engine health, location, and safety metrics in real-time.
            </p>
            <div className="flex gap-4">
              <button className="bg-accent hover:bg-indigo-600 text-white px-8 py-3 rounded-lg font-bold transition">
                View Packages
              </button>
              <button className="border border-slate-600 hover:border-white text-white px-8 py-3 rounded-lg font-bold transition">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Visual: Abstract IoT Graphic */}
          <div className="relative">
            <div className="bg-gradient-to-tr from-indigo-500/20 to-emerald-500/20 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#1e293b] p-6 rounded-xl border border-white/5">
                        <Cpu className="text-emerald-400 mb-3" size={32} />
                        <div className="text-sm text-slate-400">Sensor Status</div>
                        <div className="text-xl font-bold">Active</div>
                    </div>
                    <div className="bg-[#1e293b] p-6 rounded-xl border border-white/5">
                        <Wifi className="text-blue-400 mb-3" size={32} />
                        <div className="text-sm text-slate-400">Connectivity</div>
                        <div className="text-xl font-bold">5G / LTE</div>
                    </div>
                    <div className="bg-[#1e293b] p-6 rounded-xl border border-white/5 col-span-2 flex items-center justify-between">
                         <div>
                            <div className="text-sm text-slate-400">Fleet Coverage</div>
                            <div className="text-xl font-bold">Four Wheelers</div>
                         </div>
                         <div className="flex gap-2 text-slate-500">
                             <Car /> <Truck />
                         </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Features / Vehicles */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#0f172a] mb-4">Complete IoT Ecosystem</h2>
            <p className="text-slate-500">We provide end-to-end hardware and software solutions for all vehicle types.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-accent transition group">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition">
                    <Server size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Hardware Sensors</h3>
                <p className="text-slate-500">Industrial grade sensors compatible with OBD-II ports for instant data extraction.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-accent transition group">
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition">
                    <PenTool size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Installation Service</h3>
                <p className="text-slate-500">Expert technicians visit your location to install and calibrate the sensors.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-accent transition group">
                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition">
                    <Shield size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">24/7 Monitoring</h3>
                <p className="text-slate-500">Cloud dashboard support to track your vehicle's health and location anywhere.</p>
            </div>
        </div>
      </section>
      <TechFeatures />

      {/* 3. Pricing Packages */}
      <section className="bg-slate-900 p-20 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
                <p className="text-slate-400">Flexible packages designed for individuals and fleet owners.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Package 1: Hardware Only */}
                <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 relative">
                    <h3 className="text-xl font-semibold text-white mb-2">Sensor Kit (DIY)</h3>
                    <p className="text-slate-400 text-sm mb-6">For tech-savvy users who can install themselves.</p>
                    <div className="text-4xl font-bold text-white mb-6">₹4,999</div>
                    
                    <ul className="space-y-4 mb-8 text-slate-300 text-sm">
                        <li className="flex items-center gap-3"><Check size={16} className="text-emerald-400"/> IoT Sensor Unit</li>
                        <li className="flex items-center gap-3"><Check size={16} className="text-emerald-400"/> User Manual</li>
                        <li className="flex items-center gap-3"><Check size={16} className="text-emerald-400"/> 1 Year Warranty</li>
                        <li className="flex items-center gap-3 text-slate-600"><Check size={16}/> No Installation</li>
                        <li className="flex items-center gap-3 text-slate-600"><Check size={16}/> No Cloud Support</li>
                    </ul>
                    <button className="w-full py-3 rounded-lg border border-white/20 hover:bg-white/10 transition font-semibold">Buy Sensor</button>
                </div>

                {/* Package 2: Hardware + Installation (Recommended) */}
                <div className="bg-gradient-to-b from-indigo-900 to-slate-900 rounded-2xl p-8 border border-indigo-500 relative transform md:-translate-y-4 shadow-2xl">
                    <div className="absolute top-0 right-0 bg-indigo-500 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">POPULAR</div>
                    <h3 className="text-xl font-semibold text-white mb-2">Standard Fit</h3>
                    <p className="text-indigo-200 text-sm mb-6">Complete hardware with expert installation.</p>
                    <div className="text-4xl font-bold text-white mb-6">₹7,499</div>
                    
                    <ul className="space-y-4 mb-8 text-slate-200 text-sm">
                        <li className="flex items-center gap-3"><Check size={16} className="text-emerald-400"/> IoT Sensor Unit</li>
                        <li className="flex items-center gap-3"><Check size={16} className="text-emerald-400"/> <span className="font-bold">Home Installation</span></li>
                        <li className="flex items-center gap-3"><Check size={16} className="text-emerald-400"/> Calibration & Setup</li>
                        <li className="flex items-center gap-3"><Check size={16} className="text-emerald-400"/> 1 Year Warranty</li>
                        <li className="flex items-center gap-3 text-slate-500"><Check size={16}/> Limited App Access</li>
                    </ul>
                    <button className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition font-semibold shadow-lg shadow-indigo-500/30">Select Standard</button>
                </div>

                {/* Package 3: All Inclusive */}
                <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 relative">
                    <h3 className="text-xl font-semibold text-white mb-2">Fleet Master</h3>
                    <p className="text-slate-400 text-sm mb-6">Hardware, install, and 24/7 premium support.</p>
                    <div className="text-4xl font-bold text-white mb-6">₹12,999</div>
                    
                    <ul className="space-y-4 mb-8 text-slate-300 text-sm">
                        <li className="flex items-center gap-3"><Check size={16} className="text-emerald-400"/> IoT Sensor Unit</li>
                        <li className="flex items-center gap-3"><Check size={16} className="text-emerald-400"/> Priority Installation</li>
                        <li className="flex items-center gap-3"><Check size={16} className="text-emerald-400"/> <span className="text-accent">Lifetime Cloud Access</span></li>
                        <li className="flex items-center gap-3"><Check size={16} className="text-emerald-400"/> 24/7 Customer Support</li>
                        <li className="flex items-center gap-3"><Check size={16} className="text-emerald-400"/> Monthly Health Reports</li>
                    </ul>
                    <button className="w-full py-3 rounded-lg border border-white/20 hover:bg-white/10 transition font-semibold">Go Premium</button>
                </div>

            </div>
        </div>
      </section>

    </div>
  );
};

export default TechHome;