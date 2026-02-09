import React, { useState, useEffect } from 'react';
import { Church, MapPin, Calendar, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, CHURCH_INFO } from '../../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'py-3 bg-rccg-blue shadow-lg'
          : 'py-6 bg-transparent'
          }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className={`transition-all duration-300 ${isScrolled ? 'w-10 h-10' : 'w-14 h-14'
              }`}>
              <img
                src="/rccg-logo.png"
                alt="RCCG Logo"
                className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(255,215,0,0.3)]"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-white text-lg font-heading font-bold tracking-tight leading-none">Region 32</span>
              <span className={`text-[10px] font-heading tracking-[0.2em] uppercase leading-none mt-1 ${isScrolled ? 'text-white/60' : 'text-rccg-gold'}`}>Celebration House</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-sm font-heading font-semibold text-white/90 hover:text-rccg-gold transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-rccg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></span>
              </button>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => scrollToSection('#services')}
              className="flex items-center gap-2 bg-rccg-gold text-rccg-blue px-6 py-2.5 rounded-full font-heading font-bold text-sm hover:bg-white transition-all hover:shadow-lg active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Join Us Sunday</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full text-white bg-white/10 hover:bg-white/20 transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-rccg-blue p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-3">
                <img
                  src="/rccg-logo.png"
                  alt="RCCG Logo"
                  className="w-10 h-10 object-contain"
                />
                <span className="text-white text-xl font-heading font-bold">Region 32</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="text-3xl font-heading font-bold text-white text-left hover:text-rccg-gold transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="mt-auto">
              <button
                onClick={() => scrollToSection('#services')}
                className="w-full flex items-center justify-center gap-3 bg-rccg-gold text-rccg-blue py-4 rounded-xl font-heading font-bold text-lg"
              >
                <Calendar className="w-5 h-5" />
                <span>Join Us This Sunday</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;