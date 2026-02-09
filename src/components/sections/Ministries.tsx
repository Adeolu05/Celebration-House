import React from 'react';
import { Users, Heart, Zap, Baby, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { CHURCH_INFO, MINISTRIES } from '../../constants';

const iconMap = {
  Users: Users,
  Heart: Heart,
  Zap: Zap,
  Baby: Baby,
};

const Ministries: React.FC = () => {
  return (
    <section id="ministries" className="py-16 px-6 bg-white">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-rccg-red font-heading font-bold uppercase text-sm tracking-[0.2em] mb-4 block">Our Community</span>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-rccg-blue mb-4">Ministries & Fellowships</h2>
            <p className="text-rccg-blue/60 text-lg font-body leading-relaxed">
              Find your place in our family. We have specialized ministries designed to nurture every member of our congregation.
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group flex items-center gap-3 bg-rccg-blue text-white px-8 py-4 rounded-2xl font-heading font-bold hover:bg-rccg-red transition-all shadow-lg active:scale-95"
          >
            <span>View All Ministries</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MINISTRIES.map((ministry, index) => {
            const Icon = iconMap[ministry.icon as keyof typeof iconMap] || Users;
            return (
              <motion.div
                key={ministry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-[450px] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all"
              >
                {/* Background Decor */}
                <div className="absolute inset-0 bg-rccg-blue translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10"></div>

                {/* Image Placeholder with Gradient */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-rccg-blue/90 via-rccg-blue/20 to-transparent z-[5]"></div>
                  <div className={`w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110`} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80')` }}></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 z-20 p-10 flex flex-col justify-end text-white">
                  <div className="mb-6 transform group-hover:-translate-y-4 transition-transform duration-500">
                    <div className="w-14 h-14 bg-rccg-gold rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-rccg-gold/20">
                      <Icon className="w-8 h-8 text-rccg-blue" />
                    </div>
                    <p className="text-rccg-gold font-heading font-bold text-xs tracking-widest uppercase mb-2 group-hover:text-white transition-colors">
                      {ministry.tagline}
                    </p>
                    <h3 className="text-2xl font-heading font-black leading-tight mb-4">
                      {ministry.name}
                    </h3>
                    <p className="text-white/70 font-body text-sm leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                      {ministry.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 font-heading font-bold text-sm text-rccg-gold opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Ministries;