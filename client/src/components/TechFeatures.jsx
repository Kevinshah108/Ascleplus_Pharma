import React from 'react';
import { Car, Users, Stethoscope, Siren, ShieldCheck, Zap, Radio } from 'lucide-react';

const TechFeatures = () => {
  return (
    <section className="relative w-full py-24 bg-slate-50 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Radio size={14} className="animate-pulse" /> AsclePlus IoT Core
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Accident Detected. <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Everyone Alerted. Instantly.</span>
          </h2>
          <p className="text-lg text-slate-600">
            Our advanced sensors don't just detect impacts—they immediately trigger a lifeline to your safety network, ensuring help arrives when seconds count.
          </p>
        </div>

        {/* --- THE INTERACTIVE DIAGRAM --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          {/* Left Side: Personal Network */}
          <div className="space-y-6 flex flex-col items-center lg:items-end">
             {/* Card 1: Family */}
             <div className="relative group w-full max-w-xs p-6 bg-white rounded-2xl shadow-lg border border-slate-100 hover:border-blue-200 transition-all">
                <div className="absolute top-1/2 -right-3 w-3 h-3 bg-blue-500 rounded-full hidden lg:block"></div> {/* Connector Dot */}
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl">
                        <Users size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-800">Family & Friends</h4>
                        <p className="text-sm text-slate-500">Instant GPS location shared with emergency contacts.</p>
                    </div>
                </div>
             </div>

             {/* Card 2: Hospitals (Moved to left side for balance in mobile, but logically fits emergency) */}
             <div className="relative group w-full max-w-xs p-6 bg-white rounded-2xl shadow-lg border border-slate-100 hover:border-emerald-200 transition-all">
                <div className="absolute top-1/2 -right-3 w-3 h-3 bg-emerald-500 rounded-full hidden lg:block"></div>
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl">
                        <Stethoscope size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-800">Nearby Hospitals</h4>
                        <p className="text-sm text-slate-500">Alerts nearest medical facilities for ambulance dispatch.</p>
                    </div>
                </div>
             </div>
          </div>

          {/* Center: The Vehicle / Sensor Visual */}
          <div className="relative flex items-center justify-center h-80 w-80 mx-auto">
            
            {/* Pulsing Waves */}
            <div className="absolute inset-0 bg-blue-500/10 rounded-full animate-ping"></div>
            <div className="absolute inset-4 bg-blue-500/20 rounded-full animate-pulse"></div>
            
            {/* Connection Lines (CSS Drawing) */}
            {/* These simulate wires connecting to the side cards */}
            <div className="absolute w-[150%] h-[2px] bg-gradient-to-r from-transparent via-blue-300 to-transparent top-1/2 left-1/2 -translate-x-1/2"></div>
            <div className="absolute w-[2px] h-[150%] bg-gradient-to-b from-transparent via-blue-300 to-transparent top-1/2 left-1/2 -translate-y-1/2"></div>

            {/* The Central Sensor Unit */}
            <div className="relative z-10 w-40 h-40 bg-gradient-to-br from-slate-900 to-slate-800 rounded-full flex items-center justify-center shadow-2xl border-4 border-slate-200">
                <Car size={48} className="text-white" />
                
                {/* Status Dot */}
                <div className="absolute top-8 right-8 w-4 h-4 bg-red-500 rounded-full border-2 border-slate-800 animate-bounce"></div>
                
                {/* Tech Label */}
                <div className="absolute -bottom-8 bg-slate-900 text-white text-xs px-3 py-1 rounded-full font-mono">
                    SENSOR ACTIVE
                </div>
            </div>

          </div>

          {/* Right Side: Authorities */}
          <div className="space-y-6 flex flex-col items-center lg:items-start">
             {/* Card 3: Police */}
             <div className="relative group w-full max-w-xs p-6 bg-white rounded-2xl shadow-lg border border-slate-100 hover:border-red-200 transition-all">
                <div className="absolute top-1/2 -left-3 w-3 h-3 bg-red-500 rounded-full hidden lg:block"></div>
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-red-100 text-red-600 rounded-xl">
                        <Siren size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-800">Police Station</h4>
                        <p className="text-sm text-slate-500">Auto-notifies law enforcement with crash data.</p>
                    </div>
                </div>
             </div>

             {/* Card 4: Insurance/Safety (Optional addition to balance grid) */}
             <div className="relative group w-full max-w-xs p-6 bg-white rounded-2xl shadow-lg border border-slate-100 hover:border-blue-200 transition-all">
                <div className="absolute top-1/2 -left-3 w-3 h-3 bg-blue-500 rounded-full hidden lg:block"></div>
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                        <ShieldCheck size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-800">AsclePlus Cloud</h4>
                        <p className="text-sm text-slate-500">Secure data logging for insurance & safety records.</p>
                    </div>
                </div>
             </div>
          </div>

        </div>

        {/* Bottom Call to Action / Stat */}
        <div className="mt-20 flex justify-center">
            <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-slate-900 rounded-3xl shadow-xl text-white max-w-2xl">
                <div className="p-4 bg-emerald-500/20 rounded-full text-emerald-400">
                    <Zap size={32} />
                </div>
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold mb-1">0.05 Second Response Time</h3>
                    <p className="text-slate-400 text-sm">Our sensors detect G-force anomalies and trigger alerts faster than a human reaction.</p>
                </div>
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold transition">
                    Get Protected
                </button>
            </div>
        </div>

      </div>
    </section>
  );
};

export default TechFeatures;