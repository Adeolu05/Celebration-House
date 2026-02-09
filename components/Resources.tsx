import React from 'react';
import { Play, Mic, FileText, ArrowRight, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

const Resources: React.FC = () => {
   return (
      <section id="resources" className="py-16 px-6 bg-white overflow-hidden">
         <div className="max-w-[1600px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
               <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="max-w-2xl"
               >
                  <span className="text-rccg-red font-heading font-bold uppercase text-sm tracking-[0.2em] mb-4 block underline decoration-rccg-gold decoration-4 underline-offset-8">Spiritual Food</span>
                  <h2 className="text-4xl sm:text-5xl font-heading font-bold text-rccg-blue mb-4">Word for the Season</h2>
                  <p className="text-rccg-blue/60 text-lg font-body leading-relaxed">
                     Grow your faith through our curated resources, sermons, and weekly bulletins.
                  </p>
               </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

               {/* Main Feature - Latest Sermon */}
               <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="lg:col-span-7"
               >
                  <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl group cursor-pointer border-8 border-rccg-cream/30">
                     <img
                        src="https://images.unsplash.com/photo-1510590337019-5ef2d3977e2f?auto=format&fit=crop&q=80"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        alt="Latest Sermon"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-rccg-blue/90 via-rccg-blue/20 to-transparent flex flex-col justify-end p-10 lg:p-14">
                        <div className="flex items-center gap-4 mb-6">
                           <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center pl-1 shadow-2xl text-rccg-blue scale-90 group-hover:scale-100 group-hover:bg-rccg-gold transition-all duration-500">
                              <Play size={28} fill="currentColor" />
                           </div>
                           <div>
                              <span className="text-rccg-gold font-heading font-bold text-xs tracking-widest uppercase mb-1 block">Featured Sermon</span>
                              <h3 className="text-white font-heading font-black text-3xl lg:text-4xl leading-tight">Walking in Dominion</h3>
                           </div>
                        </div>
                        <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                           <span className="text-white/60 text-sm font-body">Pastor Dele Balogun</span>
                           <span className="w-1 h-1 bg-white/30 rounded-full"></span>
                           <span className="text-white/60 text-sm font-body">Dec 2026</span>
                        </div>
                     </div>
                  </div>
               </motion.div>

               {/* Sidebar - Recent & Bulletin */}
               <div className="lg:col-span-5 space-y-8">
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="bg-rccg-cream p-10 rounded-[2.5rem] border border-rccg-blue/5"
                  >
                     <div className="flex justify-between items-center mb-8">
                        <h3 className="text-2xl font-heading font-black text-rccg-blue">Recent Messages</h3>
                        <button
                           onClick={() => window.open('https://youtube.com/@rccgregion32', '_blank')}
                           className="w-10 h-10 bg-rccg-red/10 text-rccg-red rounded-full flex items-center justify-center hover:bg-rccg-red hover:text-white transition-all shadow-sm"
                        >
                           <Youtube size={20} />
                        </button>
                     </div>

                     <div className="space-y-4">
                        {[
                           { title: 'The Power of Gratitude', dur: '45 mins', date: 'Oct 24' },
                           { title: 'Dimensions of Grace', dur: '52 mins', date: 'Oct 17' },
                           { title: 'Raising Champions', dur: '38 mins', date: 'Oct 10' }
                        ].map((item, i) => (
                           <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer group">
                              <div className="w-12 h-12 flex-shrink-0 bg-rccg-blue/5 text-rccg-blue flex items-center justify-center rounded-xl group-hover:bg-rccg-gold transition-colors">
                                 <Mic size={20} />
                              </div>
                              <div className="flex-grow">
                                 <h4 className="text-rccg-blue font-heading font-bold text-sm leading-tight underline decoration-transparent group-hover:decoration-rccg-gold decoration-2 underline-offset-4 transition-all">{item.title}</h4>
                                 <p className="text-rccg-blue/40 text-xs mt-1">{item.date} • {item.dur}</p>
                              </div>
                              <ArrowRight size={16} className="text-rccg-blue/20 group-hover:text-rccg-red transform transition-all group-hover:translate-x-1" />
                           </div>
                        ))}
                     </div>
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.2 }}
                     className="bg-rccg-blue p-10 rounded-[2.5rem] text-white overflow-hidden relative group"
                  >
                     <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-rccg-gold/20 transition-colors"></div>
                     <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                           <div className="p-3 bg-white/10 rounded-xl">
                              <FileText size={24} className="text-rccg-gold" />
                           </div>
                           <h4 className="font-heading font-bold text-xl uppercase tracking-tighter">Weekly Bulletin</h4>
                        </div>
                        <p className="text-white/60 text-sm font-body leading-relaxed mb-8">Stay informed with the latest updates, Bible readings, and church news.</p>
                        <button className="w-full flex items-center justify-center gap-3 bg-white text-rccg-blue py-4 rounded-xl font-heading font-bold text-base hover:bg-rccg-gold transition-all shadow-xl active:scale-95">
                           <span>Download PDF</span>
                           <ArrowRight size={18} />
                        </button>
                     </div>
                  </motion.div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Resources;