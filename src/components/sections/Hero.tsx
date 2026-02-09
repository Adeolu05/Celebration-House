import React from 'react';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { CHURCH_INFO } from '../../constants';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header id="home" className="relative w-full h-[95vh] min-h-[700px] rounded-b-[2.5rem] overflow-hidden bg-rccg-blue shadow-2xl">
      {/* Background Layer */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80"
          alt="Church Worship"
          className="absolute inset-0 w-full h-full object-cover opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-rccg-blue/98 via-rccg-blue/85 to-rccg-blue/98"></div>
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="inline-block px-5 py-2 text-[10px] font-heading font-bold tracking-[0.25em] text-rccg-gold uppercase bg-white/5 backdrop-blur-md rounded-full border border-rccg-gold/20">
              Welcome to the Family of Celebration
            </span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl text-white font-heading font-bold tracking-tight leading-[1.1] drop-shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
            Raising Champions,
            <br />
            <span className="text-rccg-gold italic">Dominating Territories.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl lg:text-2xl text-white/85 font-body italic leading-relaxed max-w-2xl mx-auto">
            {CHURCH_INFO.name} Headquarters — A place of God's power, grace, and transformative worship.
          </p>

          {/* CTA Section */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection('#services')}
            className="mx-auto group flex items-center gap-4 bg-white text-rccg-blue pl-8 pr-3 py-2.5 rounded-full hover:bg-rccg-gold transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            <span className="text-lg font-heading font-bold">Join Us This Sunday</span>
            <div className="w-12 h-12 bg-rccg-blue rounded-full flex items-center justify-center group-hover:bg-rccg-red transition-all">
              <Calendar className="w-5 h-5 text-white" />
            </div>
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection('#welcome')}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-rccg-gold rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;