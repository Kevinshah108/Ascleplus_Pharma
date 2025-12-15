import React from 'react';
import { Heart, Activity, ShieldCheck, Zap, Users, Trophy } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
      
      {/* --- BACKGROUND DECOR --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle gradient blobs */}
        <div className="absolute top-0 left-1/4 w-[30rem] h-[30rem] bg-blue-100/40 rounded-full blur-3xl opacity-50 -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-emerald-100/40 rounded-full blur-3xl opacity-50 -z-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24 relative z-10">

        {/* 1. HERO MISSION STATEMENT */}
        <div className="text-center max-w-4xl mx-auto mb-24">
           <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-bold text-emerald-600 uppercase tracking-wider mb-6 shadow-sm">
            <Heart size={14} className="fill-emerald-600" /> Made for Life
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
            We are bridging the gap between <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Medicine & Technology.</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            AsclePlus isn't just a pharmacy. We are a safety ecosystem. By combining rapid medicine delivery with life-saving IoT sensors, we ensure help is always just a heartbeat away.
          </p>
        </div>

        {/* 2. CORE VALUES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {/* Value 1 */}
            <div className="p-8 bg-white rounded-3xl shadow-xl border border-slate-100 hover:shadow-2xl transition-all group">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Activity size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Rapid Response</h3>
                <p className="text-slate-600">
                    In emergencies, seconds matter. Our automated systems cut down reaction times by 40% compared to traditional alerts.
                </p>
            </div>

            {/* Value 2 */}
            <div className="p-8 bg-white rounded-3xl shadow-xl border border-slate-100 hover:shadow-2xl transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-10 transition-transform group-hover:scale-150"></div>
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <ShieldCheck size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Trust First</h3>
                <p className="text-slate-600">
                    Your health data is sacred. We use enterprise-grade encryption to ensure your medical and location data stays private.
                </p>
            </div>

            {/* Value 3 */}
            <div className="p-8 bg-white rounded-3xl shadow-xl border border-slate-100 hover:shadow-2xl transition-all group">
                <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Zap size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Innovation DNA</h3>
                <p className="text-slate-600">
                    We don't settle for "good enough." We are constantly upgrading our sensors and logistics AI to save more lives.
                </p>
            </div>
        </div>

        {/* 3. OUR STORY / VISUAL SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            
            {/* Left: Image/Graphic */}
            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-emerald-500 rounded-3xl transform rotate-3 opacity-20"></div>
                <div className="relative bg-slate-900 rounded-3xl p-8 shadow-2xl overflow-hidden aspect-video flex items-center justify-center group">
                    {/* Abstract Tech Graphic */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700"></div>
                    <div className="relative z-10 text-center">
                        <div className="text-5xl font-bold text-white mb-2">2025</div>
                        <div className="text-emerald-400 font-mono text-sm tracking-widest uppercase">Founded in Gujarat</div>
                    </div>
                </div>
            </div>

            {/* Right: Text Content */}
            <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                    From a Simple Idea to a <br/> <span className="text-blue-600">Safety Revolution.</span>
                </h2>
                <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                    <p>
                        It started with a question: <strong>"Why does help take so long to arrive?"</strong>
                    </p>
                    <p>
                        We realized that while medicine delivery was getting faster, accident response was still stuck in the past. People were relying on bystanders to call for help.
                    </p>
                    <p>
                        AsclePlus was born to fix this. We combined a robust pharmaceutical supply chain with cutting-edge IoT sensors. Today, we don't just deliver pills; we deliver peace of mind to thousands of families across the region.
                    </p>
                </div>
                
                {/* Stats Row */}
                <div className="flex gap-8 pt-6 border-t border-slate-200 mt-6">
                    <div>
                        <div className="text-3xl font-bold text-slate-900">5k+</div>
                        <div className="text-sm text-slate-500">Active Users</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-slate-900">120+</div>
                        <div className="text-sm text-slate-500">Partner Hospitals</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-slate-900">24/7</div>
                        <div className="text-sm text-slate-500">Support System</div>
                    </div>
                </div>
            </div>
        </div>

        {/* 4. TEAM SECTION (Optional but good for trust) */}
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Meet the Minds</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-12">
                A diverse team of doctors, engineers, and logistics experts working together.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Team Member 1 */}
                <div className="group bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                    <div className="w-24 h-24 mx-auto bg-slate-200 rounded-full mb-4 overflow-hidden">
                        <img src="https://i.pravatar.cc/150?img=68" alt="CEO" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="font-bold text-slate-900">Maiz Patel</h3>
                    <p className="text-xs text-blue-600 font-bold uppercase tracking-wider mb-2">Founder</p>
                    <p className="text-sm text-slate-500">Visionary behind the IoT integration strategy.</p>
                </div>

                {/* Team Member 2 */}
                 <div className="group bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                    <div className="w-24 h-24 mx-auto bg-slate-200 rounded-full mb-4 overflow-hidden">
                        <img src="https://i.pravatar.cc/150?img=12" alt="Ops" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="font-bold text-slate-900">Kevin Shah</h3>
                    <p className="text-xs text-blue-600 font-bold uppercase tracking-wider mb-2">Co-Founder</p>
                    <p className="text-sm text-slate-500">Project Planning and website creation</p>
                </div>

                {/* Team Member 3 */}
                <div className="group bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                    <div className="w-24 h-24 mx-auto bg-slate-200 rounded-full mb-4 overflow-hidden">
                        <img src="https://i.pravatar.cc/150?img=44" alt="CTO" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="font-bold text-slate-900">Bhargi Patel</h3>
                    <p className="text-xs text-emerald-600 font-bold uppercase tracking-wider mb-2">Co-Founder</p>
                    <p className="text-sm text-slate-500">Documentation handling</p>
                </div>

                 {/* Team Member 4 */}
                 <div className="group bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                    <div className="w-24 h-24 mx-auto bg-slate-200 rounded-full mb-4 overflow-hidden">
                        <img src="https://i.pravatar.cc/150?img=32" alt="Medical" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="font-bold text-slate-900">Dr. Sarah Jen</h3>
                    <p className="text-xs text-emerald-600 font-bold uppercase tracking-wider mb-2">Medical Director</p>
                    <p className="text-sm text-slate-500">Oversees pharmaceutical compliance.</p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default About;