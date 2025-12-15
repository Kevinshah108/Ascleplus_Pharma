import React from 'react';
import { Truck, Car, Radio, Shield, Smartphone, Activity, ArrowRight, CheckCircle2, Zap, Siren } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
      
      {/* --- BACKGROUND DECOR --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-100/40 rounded-full blur-3xl opacity-50 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-emerald-100/40 rounded-full blur-3xl opacity-50 -z-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24 relative z-10">

        {/* 1. HERO HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-bold text-blue-600 uppercase tracking-wider mb-6 shadow-sm">
            <Activity size={14} /> AsclePlus Ecosystem
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Our Proprietary <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Services & Technology.</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            We don't outsource safety. We built the delivery network and the crash-detection technology from the ground up to ensure you are never alone.
          </p>
        </div>

        {/* 2. CORE SERVICES GRID (Strictly AsclePlus Only) */}
        <div className="mb-24">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-emerald-500 rounded-full"></span> Essential Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* Service 1: Pharma Delivery (The Shop) */}
                <div className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-lg hover:shadow-2xl hover:border-emerald-200 transition-all cursor-default">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                        <Truck size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Express Medicine Delivery</h3>
                    <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                        We operate our own hyper-local logistics to deliver prescriptions in under 45 minutes. No third-party delays.
                    </p>
                    <ul className="space-y-2 mb-6 text-sm text-slate-500">
                        <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> 100% Genuine Stock</li>
                        <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> Cold Chain Storage</li>
                    </ul>
                    <Link to="/shop" className="inline-flex items-center text-emerald-600 font-bold text-sm hover:gap-2 transition-all">
                        Order Now <ArrowRight size={16} className="ml-1" />
                    </Link>
                </div>

                {/* Service 2: IoT Device (The Hardware) */}
                <div className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-lg hover:shadow-2xl hover:border-blue-200 transition-all cursor-default">
                    <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                        <Car size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">IoT Crash Guard</h3>
                    <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                        We install our proprietary sensors in your vehicle. They constantly monitor G-force data to detect accidents instantly.
                    </p>
                    <ul className="space-y-2 mb-6 text-sm text-slate-500">
                        <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500" /> Fits Bikes & Cars</li>
                        <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500" /> 0.05s Response Time</li>
                    </ul>
                    <Link to="/tech" className="inline-flex items-center text-blue-600 font-bold text-sm hover:gap-2 transition-all">
                        Get the Device <ArrowRight size={16} className="ml-1" />
                    </Link>
                </div>

                {/* Service 3: SOS Network (The Service Layer) */}
                <div className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-lg hover:shadow-2xl hover:border-red-200 transition-all cursor-default">
                    <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                        <Siren size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Emergency Response Grid</h3>
                    <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                        The service that activates when you crash. We coordinate the alerts sent to Police, Hospitals, and Family automatically.
                    </p>
                    <ul className="space-y-2 mb-6 text-sm text-slate-500">
                        <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-red-500" /> Automated GPS Sharing</li>
                        <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-red-500" /> 24/7 Control Room</li>
                    </ul>
                    <Link to="/contact" className="inline-flex items-center text-red-600 font-bold text-sm hover:gap-2 transition-all">
                        Join the Network <ArrowRight size={16} className="ml-1" />
                    </Link>
                </div>

            </div>
        </div>

        {/* 3. TECH / IOT SPOTLIGHT SECTION (Kept as is - it's your core offering) */}
        <div className="relative rounded-[3rem] bg-slate-900 overflow-hidden shadow-2xl">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-blue-600/30 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-emerald-600/20 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="relative z-10 px-8 py-16 lg:px-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-500/30">
                        <Radio size={12} /> AsclePlus Tech
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                        Smart Sensors that <br/> <span className="text-blue-400">Save Lives.</span>
                    </h2>
                    <p className="text-slate-300 text-lg leading-relaxed">
                        Our proprietary IoT device attaches to any vehicle. In the event of an accident, it detects G-force spikes and automatically alerts emergency services and your family.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                            <Shield size={24} className="text-emerald-400" />
                            <div>
                                <div className="text-white font-bold">Automatic</div>
                                <div className="text-slate-400 text-xs">No user input needed</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                            <Smartphone size={24} className="text-blue-400" />
                            <div>
                                <div className="text-white font-bold">App Synced</div>
                                <div className="text-slate-400 text-xs">Real-time status on mobile</div>
                            </div>
                        </div>
                    </div>

                    <Link to="/tech" className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition shadow-lg shadow-blue-900/50">
                        Explore Tech Features
                    </Link>
                </div>

                {/* Visual Graphic: How it works */}
                <div className="relative">
                    <div className="bg-slate-800/50 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                        <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                            <Activity size={18} className="text-emerald-400" /> How It Works
                        </h3>
                        
                        <div className="space-y-8 relative">
                            {/* Vertical Line */}
                            <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-slate-700"></div>

                            {/* Step 1 */}
                            <div className="relative flex items-start gap-6">
                                <div className="relative z-10 w-12 h-12 bg-slate-900 border border-slate-600 rounded-full flex items-center justify-center text-white font-bold shrink-0">1</div>
                                <div>
                                    <h4 className="text-blue-300 font-bold text-lg">Sensor Installation</h4>
                                    <p className="text-slate-400 text-sm mt-1">Plug the AsclePlus device into your car's dashboard or attach to bike.</p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="relative flex items-start gap-6">
                                <div className="relative z-10 w-12 h-12 bg-slate-900 border border-slate-600 rounded-full flex items-center justify-center text-white font-bold shrink-0">2</div>
                                <div>
                                    <h4 className="text-blue-300 font-bold text-lg">Impact Detection</h4>
                                    <p className="text-slate-400 text-sm mt-1">If a crash occurs, sensors analyze impact severity in 0.05s.</p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="relative flex items-start gap-6">
                                <div className="relative z-10 w-12 h-12 bg-emerald-600 border border-emerald-400 rounded-full flex items-center justify-center text-white font-bold shrink-0 shadow-lg shadow-emerald-900/50">3</div>
                                <div>
                                    <h4 className="text-emerald-400 font-bold text-lg">Instant SOS</h4>
                                    <p className="text-slate-300 text-sm mt-1">Location sent to Ambulance, Police, and Family immediately.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

      </div>
    </div>
  );
};

export default Services;