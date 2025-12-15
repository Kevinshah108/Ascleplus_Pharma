import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Column 1: Brand */}
        <div className="space-y-4">
            <h2><Link to="/"><span className="text-transparent text-2xl bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">ASCLE<span className='font-medium text-3xl'>+</span> PHARMA</span></Link></h2>
          {/* <h2 className="text-2xl font-bold">ASCLE<span className='font-extrabold text-3xl'>+</span> PHARMA</h2> */}
          <p className="text-blue-200 text-sm leading-relaxed">
            Providing ultimate healthcare solutions for today and tomorrow. Your trusted partner in medical wellness.
          </p>
          <div className="flex space-x-4 pt-2">
            <Facebook size={20} className="text-blue-200 hover:text-white cursor-pointer transition" />
            <Twitter size={20} className="text-blue-200 hover:text-white cursor-pointer transition" />
            <Instagram size={20} className="text-blue-200 hover:text-white cursor-pointer transition" />
            <Linkedin size={20} className="text-blue-200 hover:text-white cursor-pointer transition" />
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-3 text-blue-200 text-sm">
            <li><Link to="/about" className="hover:text-accent transition">About Us</Link></li>
            <li><Link to="/services" className="hover:text-accent transition">Services</Link></li>
            <li><Link to="/shop" className="hover:text-accent transition">Shop</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition">Contact Us</Link></li>
            <li><Link to="/tech" className="hover:text-accent transition">AsclePlus Tech</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
          <ul className="space-y-4 text-blue-200 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 text-accent" />
              <span>59,60 SHABANA PARK 2, 30 Meter, Jambusar, Gujarat, India</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-accent" />
              <a href="tel:+91 96872 28213"><span>+91 96872 28213</span></a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-accent" />
              <a href="mailto:info@asclepluspharma.com"><span>info@asclepluspharma.com</span></a>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
          <p className="text-blue-200 text-sm mb-4">Subscribe to our newsletter for the latest health tips.</p>
          <div className="flex flex-col gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-blue-300 outline-none focus:border-accent transition"
            />
            <button className="bg-accent hover:bg-indigo-600 text-white px-4 py-2.5 rounded-lg font-medium transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 mt-12 pt-8 text-center text-blue-300 text-xs">
        <p>&copy; {new Date().getFullYear()} Ascleplus Pharma pvt Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;