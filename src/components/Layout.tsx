import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Smartphone, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoUrl from '../logo.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
            <img src={logoUrl} alt="Nexus Logo" className="w-10 h-10 rounded-xl shadow-sm" />
            <span className="text-2xl font-bold tracking-tight text-gray-900">Nexus</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/about" className="text-gray-600 hover:text-nexus font-medium transition-colors">About</Link>
            <Link to="/#features" className="text-gray-600 hover:text-nexus font-medium transition-colors">Features</Link>
            {/* <Link to="/payments" className="text-gray-600 hover:text-nexus font-medium transition-colors">Pricing</Link> */}
            <button onClick={() => scrollToSection('counselling')} className="text-gray-600 hover:text-nexus font-medium transition-colors cursor-pointer">Counselling Team</button>
            <a
              href="/#download"
              className="bg-nexus hover:bg-nexus-dark text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-nexus/20 flex items-center gap-2"
            >
              <Smartphone className="w-4 h-4" />
              Download App
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-nexus">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
              <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm sm:text-base font-medium text-gray-900 hover:text-nexus hover:bg-gray-50 rounded-lg">About</Link>
              <Link to="/#features" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm sm:text-base font-medium text-gray-900 hover:text-nexus hover:bg-gray-50 rounded-lg">Features</Link>
              {/* <Link to="/payments" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm sm:text-base font-medium text-gray-900 hover:text-nexus hover:bg-gray-50 rounded-lg">Pricing</Link> */}
              <button onClick={() => scrollToSection('counselling')} className="block px-3 py-2 text-sm sm:text-base font-medium text-gray-900 hover:text-nexus hover:bg-gray-50 rounded-lg text-left cursor-pointer">Counselling Team</button>
              <a href="/#download" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm sm:text-base font-medium text-nexus bg-nexus/10 rounded-lg flex items-center gap-2">
                <Smartphone className="w-5 h-5" />
                Download App
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src={logoUrl} alt="Nexus Logo" className="w-10 h-10 rounded-xl" />
              <span className="text-2xl font-bold tracking-tight">Nexus</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 max-w-sm mb-8">
              A faith-driven ecosystem committed to raising Godly families for Christ.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://apps.apple.com/us/app/nexus-2-0/id6587567583"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-nexus px-5 py-3 rounded-xl font-semibold flex items-center gap-3 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                Download for iOS
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.nexusapptest.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-nexus px-5 py-3 rounded-xl font-semibold flex items-center gap-3 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
                </svg>
                Download for Android
              </a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-xs sm:text-sm text-gray-400">
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cookie" className="hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><a href="mailto:contact@nexus4christians.com" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Nexus. All rights reserved.</p>
          <p>Designed for Kingdom Impact.</p>
        </div>
      </div>
    </footer>
  );
};
