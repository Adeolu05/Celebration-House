import React from 'react';
import { Users, Heart, Star, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { CHURCH_INFO } from '../constants';

const Welcome: React.FC = () => {
  return (
    <section id="welcome" className="py-16 px-6 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          {/* Images/Visuals Side */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-rccg-gold/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-rccg-blue/5 rounded-full blur-3xl"></div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white"
              >
                <img
                  src="/picr.jpg"
                  alt="Pastor Welcome"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rccg-blue/80 via-transparent to-transparent"></div>

                {/* Floating Info Card */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/95 backdrop-blur-xl p-6 rounded-2xl shadow-xl flex items-center justify-between">
                    <div>
                      <p className="text-rccg-blue font-heading font-bold text-lg">{CHURCH_INFO.pastor.name}</p>
                      <p className="text-rccg-red font-heading font-semibold text-xs tracking-wider uppercase">{CHURCH_INFO.pastor.title}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-rccg-blue/10 flex items-center justify-center">
                      <Heart className="w-6 h-6 text-rccg-blue" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Engagement Badges */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -right-6 top-20 z-20 bg-rccg-gold text-rccg-blue p-4 rounded-2xl shadow-lg border-4 border-white hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-heading font-black text-xl leading-none">100%</p>
                    <p className="text-[10px] font-bold uppercase tracking-tight">Full of Grace</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Text/Content Side */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <span className="text-rccg-red font-heading font-bold uppercase text-sm tracking-[0.2em] mb-4 block underline decoration-rccg-gold decoration-4 underline-offset-8">A Message from our Pastor</span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-rccg-blue leading-[1.1]">
                  A Home for <span className="text-rccg-gold italic">Every Soul.</span>
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-rccg-blue/80 text-xl font-body italic leading-relaxed">
                  "{CHURCH_INFO.pastor.welcomeMessage}"
                </p>
                <p className="text-rccg-blue/70 text-lg leading-relaxed font-body">
                  At Celebration House, we believe in the power of apostolic teaching, fervent prayer, and genuine fellowship. Our doors are open to everyone who seeks a deeper relationship with Jesus Christ.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 py-8 border-y border-rccg-blue/10">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-rccg-gold/10 text-rccg-gold">
                    <Star className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-2xl font-heading font-black text-rccg-blue">Excellence</span>
                    <span className="text-sm text-rccg-blue/60 font-medium">In everything we do</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-rccg-red/10 text-rccg-red">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-2xl font-heading font-black text-rccg-blue">Community</span>
                    <span className="text-sm text-rccg-blue/60 font-medium">We are one family</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-8">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/23/Signature_of_Barack_Obama.svg"
                  alt="Pastor Signature"
                  className="h-16 opacity-30 invert grayscale group-hover:opacity-100 transition-opacity"
                />
                <div>
                  <p className="font-heading font-bold text-rccg-blue">{CHURCH_INFO.pastor.name}</p>
                  <p className="text-xs font-heading font-semibold text-rccg-blue/40 uppercase tracking-widest leading-none mt-1">Lead Pastor, Region 32</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Welcome;