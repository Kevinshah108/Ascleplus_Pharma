import React from 'react';
import { MapPin, Phone, Mail, Send, Clock, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
      
      {/* --- BACKGROUND ANIMATION --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-100/50 rounded-full blur-3xl opacity-60 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-emerald-100/50 rounded-full blur-3xl opacity-60 -z-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-24">
        
        {/* 1. HEADER SECTION */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-bold text-blue-600 uppercase tracking-wider mb-4 shadow-sm">
            <MessageSquare size={14} /> We'd love to hear from you
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Touch</span>
          </h1>
          <p className="text-lg text-slate-600">
            Have a question about our tech? Need support with a delivery? Our team is ready to help you 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* 2. CONTACT INFO CARDS (Left Column) */}
          <div className="space-y-6 lg:col-span-1">
            
            {/* Address Card */}
            <div className="group p-6 bg-white/80 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-lg hover:shadow-xl hover:border-blue-300 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Our Location</h3>
              <p className="text-slate-600 leading-relaxed">
                59, 60 SHABANA PARK 2,<br />
                30 Meter, Jambusar,<br />
                Gujarat, India
              </p>
            </div>

            {/* Contact Details Card */}
            <div className="group p-6 bg-white/80 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-lg hover:shadow-xl hover:border-emerald-300 transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Contact Channels</h3>
              <div className="space-y-3">
                <a href="tel:+91 96872 28213" className="flex items-center gap-3 text-slate-600 hover:text-emerald-600 transition-colors">
                  <Phone size={16} /> +91 96872 28213
                </a>
                <a href="mailto:info@asclepluspharma.com" className="flex items-center gap-3 text-slate-600 hover:text-emerald-600 transition-colors">
                  <Mail size={16} /> info@asclepluspharma.com
                </a>
                <div className="flex items-center gap-3 text-slate-500 text-sm">
                  <Clock size={16} /> Mon-Fri, 9am - 6pm
                </div>
              </div>
            </div>

          </div>

          {/* 3. CONTACT FORM (Middle/Right Column) */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 md:p-10 relative overflow-hidden">
               {/* Decorative Gradient Line */}
               <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-emerald-500 to-blue-500"></div>

               <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h3>
               
               <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Full Name</label>
                      <input type="text" placeholder="John Doe" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Email Address</label>
                      <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Subject</label>
                    <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-600">
                      <option>General Inquiry</option>
                      <option>Order Support</option>
                      <option>Technical Issue (IoT)</option>
                      <option>Business Partnership</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Your Message</label>
                    <textarea rows="4" placeholder="How can we help you today?" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"></textarea>
                  </div>

                  <button type="submit" className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-bold shadow-lg shadow-blue-500/30 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                    <Send size={18} /> Send Message
                  </button>
               </form>
            </div>
          </div>

        </div>

        {/* 4. MAP SECTION (Corrected to English) */}
        <div className="mt-16 pt-16 border-t border-slate-200">
          <div className="bg-white p-2 rounded-3xl shadow-xl border border-slate-100">
            <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden filter grayscale-[20%] hover:grayscale-0 transition-all duration-700">
              <iframe 
                title="AsclePlus Location"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy" 
                allowFullScreen 
                referrerPolicy="no-referrer-when-downgrade"
                // Added '&hl=en' to force English language
                src="https://maps.google.com/maps?q=22.049472,72.81525&hl=en&z=14&output=embed"
              ></iframe>
               
              {/* Overlay Label */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg border border-slate-200 pointer-events-none">
                 <p className="text-xs font-bold text-slate-500 uppercase">Locate Us</p>
                 <p className="text-sm font-bold text-blue-900">Shabana Park 2, Jambusar</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;