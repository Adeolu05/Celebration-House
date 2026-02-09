import React from 'react';
import { Church, Twitter, Instagram, Facebook, Send, ShieldCheck, FileText } from 'lucide-react';
import { CHURCH_INFO, NAV_LINKS } from '../../constants';

const Footer: React.FC = () => {
   return (
      <footer className="mt-2 text-white p-4 sm:p-6 lg:p-8">
         <div className="bg-rccg-blue rounded-[3rem] p-12 lg:p-20 shadow-2xl relative overflow-hidden">
            {/* Decorative Orbs */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 relative z-10">

               {/* Brand Column */}
               <div className="md:col-span-5">
                  <div className="flex items-center gap-4 mb-8">
                     <div className="p-3 bg-white/10 rounded-xl border border-white/10">
                        <Church size={28} className="text-rccg-gold" />
                     </div>
                     <div className="flex flex-col">
                        <span className="text-2xl font-heading font-black tracking-tighter leading-none">Region 32</span>
                        <span className="text-[10px] font-heading font-bold text-rccg-gold uppercase tracking-[0.3em] mt-1 leading-none">Celebration House</span>
                     </div>
                  </div>
                  <p className="text-white/50 text-xl font-body italic leading-relaxed mb-10 max-w-md">
                     A people of God's power and grace, committed to raising champions and dominating territories for Christ.
                  </p>
                  <div className="flex gap-4">
                     {[
                        { Icon: Facebook, url: CHURCH_INFO.socials.facebook },
                        { Icon: Instagram, url: CHURCH_INFO.socials.instagram },
                        { Icon: Twitter, url: CHURCH_INFO.socials.twitter }
                     ].map(({ Icon, url }, i) => (
                        <a
                           key={i}
                           href={url}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/50 hover:bg-rccg-gold hover:text-rccg-blue hover:shadow-lg transition-all active:scale-95"
                        >
                           <Icon size={20} />
                        </a>
                     ))}
                  </div>
               </div>

               {/* Quick Links Column */}
               <div className="md:col-span-3">
                  <h4 className="text-rccg-gold font-heading font-bold uppercase text-xs tracking-[0.2em] mb-8">Navigation</h4>
                  <ul className="space-y-4">
                     {NAV_LINKS.map(link => (
                        <li key={link.label}>
                           <a
                              href={link.href}
                              className="text-white/60 font-heading font-semibold hover:text-white hover:pl-2 transition-all flex items-center gap-2 group"
                           >
                              <span className="w-1.5 h-1.5 rounded-full bg-rccg-gold scale-0 group-hover:scale-100 transition-transform"></span>
                              {link.label}
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Contact & Support Column */}
               <div className="md:col-span-4">
                  <h4 className="text-rccg-gold font-heading font-bold uppercase text-xs tracking-[0.2em] mb-8">Connect With Us</h4>
                  <div className="space-y-8">
                     <div className="flex gap-4">
                        <div className="w-1.5 h-auto bg-rccg-red/30 rounded-full"></div>
                        <address className="text-white/60 not-italic font-body leading-loose">
                           {CHURCH_INFO.location}
                        </address>
                     </div>
                     <div className="flex flex-col gap-4">
                        <button className="flex items-center gap-3 bg-white/5 hover:bg-white inset-0 text-white hover:text-rccg-blue p-5 rounded-2xl border border-white/5 font-heading font-bold transition-all group">
                           <Send size={18} className="text-rccg-gold group-hover:text-rccg-blue" />
                           <span>Send Prayer Request</span>
                        </button>
                     </div>
                  </div>
               </div>
            </div>

            <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-xs font-heading font-bold text-white/30 tracking-widest uppercase">
               <p>© 2026 {CHURCH_INFO.name}. Redeemed Christian Church of God.</p>
               <div className="flex gap-8">
                  <a href="#" className="hover:text-rccg-gold flex items-center gap-2">
                     <ShieldCheck size={14} />
                     <span>Privacy Policy</span>
                  </a>
                  <a href="#" className="hover:text-rccg-gold flex items-center gap-2">
                     <FileText size={14} />
                     <span>Terms of Use</span>
                  </a>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;