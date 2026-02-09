import React, { useState } from 'react';
import { Copy, Check, Info, Landmark } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CHURCH_INFO } from '../constants';

const Giving: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CHURCH_INFO.giving.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="give" className="py-16 px-6 bg-rccg-blue relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rccg-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-rccg-red/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-rccg-gold font-heading font-bold uppercase text-sm tracking-[0.2em] mb-4 block animate-pulse">Partner With Us</span>
            <h2 className="text-4xl sm:text-6xl font-heading font-bold text-white mb-8 tracking-tight">
              Honoring God Through <br className="hidden sm:block" />
              <span className="text-rccg-gold italic underline decoration-rccg-gold/30 underline-offset-8">Our Substance.</span>
            </h2>
            <p className="text-white/70 text-xl font-body italic leading-relaxed mb-12">
              "Honor the LORD with thy substance, and with the firstfruits of all thine increase: So shall thy barns be filled with plenty..." — Proverbs 3:9-10
            </p>

            <div className="space-y-6">
              {[
                { title: 'Tithe & Offerings', desc: 'Supporting the daily administration and ministry of the church.' },
                { title: 'Project Support', desc: 'Building and maintaining our physical sanctuary and infrastructure.' },
                { title: 'Welfare & Missions', desc: 'Helping those in need and spreading the gospel to the ends of the earth.' }
              ].map((item) => (
                <div key={item.title} className="flex gap-4 group">
                  <div className="w-1.5 h-auto bg-rccg-gold/30 rounded-full group-hover:bg-rccg-gold transition-colors"></div>
                  <div>
                    <h4 className="text-white font-heading font-bold text-lg">{item.title}</h4>
                    <p className="text-white/50 text-sm font-body">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-2xl p-10 lg:p-14 rounded-[3.5rem] border border-white/10 shadow-2xl overflow-hidden group">
              {/* Card Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-rccg-gold/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-rccg-gold/20 transition-colors"></div>

              <div className="flex items-center gap-4 mb-12">
                <div className="w-14 h-14 bg-rccg-gold rounded-2xl flex items-center justify-center shadow-lg shadow-rccg-gold/20">
                  <Landmark className="w-8 h-8 text-rccg-blue" />
                </div>
                <div>
                  <h3 className="text-white font-heading font-black text-2xl leading-none">Bank Transfer</h3>
                  <p className="text-rccg-gold/60 font-heading font-bold text-xs tracking-widest uppercase mt-2">Secure Giving</p>
                </div>
              </div>

              <div className="space-y-10 mb-12">
                <div>
                  <label className="text-white/40 font-heading font-bold text-xs uppercase tracking-widest mb-3 block">Bank Name</label>
                  <p className="text-white text-2xl font-heading font-bold">{CHURCH_INFO.giving.bankName}</p>
                </div>
                <div>
                  <label className="text-white/40 font-heading font-bold text-xs uppercase tracking-widest mb-3 block">Account Name</label>
                  <p className="text-white text-2xl font-heading font-bold">{CHURCH_INFO.giving.accountName}</p>
                </div>
                <div className="relative">
                  <label className="text-white/40 font-heading font-bold text-xs uppercase tracking-widest mb-3 block">Account Number</label>
                  <div className="flex items-center justify-between bg-white/10 p-5 rounded-2xl border border-white/5 group-hover:border-rccg-gold/30 transition-all cursor-pointer" onClick={handleCopy}>
                    <p className="text-rccg-gold text-3xl sm:text-4xl font-mono font-bold tracking-wider">{CHURCH_INFO.giving.accountNumber}</p>
                    <button className="p-3 bg-rccg-gold text-rccg-blue rounded-xl hover:bg-white transition-all shadow-lg active:scale-90">
                      {copied ? <Check className="w-6 h-6" /> : <Copy className="w-6 h-6" />}
                    </button>
                  </div>
                  <AnimatePresence>
                    {copied && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute -bottom-8 left-0 text-rccg-gold text-sm font-heading font-bold"
                      >
                        Account Number Copied!
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/5 text-white/50 text-sm font-body leading-relaxed italic">
                <Info className="w-5 h-5 text-rccg-gold shrink-0 mt-0.5" />
                <p>Please specify your name or the purpose of the giving (e.g., "Blessing Offr.") in the payment narration.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Giving;