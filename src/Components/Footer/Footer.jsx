import React from 'react';
import { FaInstagram, FaFacebookF } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri"; // The most accurate X icon

const Footer = () => {
  return (
    <footer className="w-full bg-[#1e4637] text-white py-12 px-6 flex flex-col items-center">
      {/* Outer container handles the '1600 Fill' 
         Inner container handles the '1470 Hug' (Max Width)
      */}
      <div className="max-w-[1470px] w-full flex flex-col items-center">
        
        {/* Brand Header */}
        <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
          KeenKeeper
        </h2>
        
        {/* Description */}
        <p className="text-sm md:text-base text-gray-300 max-w-2xl text-center mb-8 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Social Links Section */}
        <div className="flex flex-col items-center gap-4 mb-16">
          <span className="text-lg font-medium">Social Links</span>
          <div className="flex gap-4">

            {/* Instagram */}
            <a href="#" className="bg-white text-[#1e4637] p-2.5 rounded-full hover:bg-gray-200 transition-all">
              <FaInstagram size={20} />
            </a>

            {/* Facebook */}
            <a href="#" className="bg-white text-[#1e4637] p-2.5 rounded-full hover:bg-gray-200 transition-all">
              <FaFacebookF size={20} />
            </a>

            {/* X (Twitter) */}
            <a href="#" className="bg-white text-[#1e4637] p-2.5 rounded-full hover:bg-gray-200 transition-all">
              <RiTwitterXFill size={20} />
            </a>
            
          </div>
        </div>

        {/* Bottom Bar: Responsive Layout */}

        <div className="w-full pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs md:text-sm text-gray-400">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          
          <nav className="flex gap-6 md:gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;