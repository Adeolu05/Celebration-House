import React from 'react';
import { Clock, MapPin, ExternalLink, CalendarDays } from 'lucide-react';
import { motion } from 'framer-motion';
import { SERVICE_TIMES, CHURCH_INFO } from '../constants';

const ServiceTimes: React.FC = () => {
  return (
    <section id="services" className="py-16 px-6 bg-rccg-cream">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-rccg-red font-heading font-bold uppercase text-sm tracking-[0.2em] mb-4 block">Visit Us</span>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-rccg-blue mb-6">Service Times & Location</h2>
            <p className="text-rccg-blue/60 text-lg font-body leading-relaxed">
              We can't wait to welcome you to the Family of Celebration. Join us for any of our weekly services.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {SERVICE_TIMES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all border border-rccg-blue/5 group"
            >
              <div className="w-16 h-16 bg-rccg-blue rounded-2xl flex items-center justify-center mb-8 group-hover:bg-rccg-red transition-colors shadow-lg shadow-rccg-blue/20">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <p className="text-rccg-red font-heading font-bold text-sm tracking-widest uppercase mb-2">{service.day}</p>
              <h3 className="text-2xl font-heading font-black text-rccg-blue mb-4 leading-tight">{service.title}</h3>
              <div className="flex items-center gap-3 text-rccg-blue font-heading font-bold text-lg mb-6">
                <div className="w-2 h-2 rounded-full bg-rccg-gold animate-pulse"></div>
                {service.time}
              </div>
              <p className="text-rccg-blue/60 font-body leading-relaxed mb-8">
                {service.description}
              </p>
              <button
                onClick={() => {
                  const reminder = `Reminder: ${service.title} at ${CHURCH_INFO.name}`;
                  console.log(`Add to calendar: ${reminder}`);
                }}
                className="flex items-center gap-2 text-rccg-blue font-heading font-bold text-sm hover:text-rccg-red transition-colors group/btn"
              >
                <CalendarDays className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                <span>Add to Calendar</span>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Location Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-rccg-blue rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row items-stretch"
        >
          <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-rccg-gold rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-rccg-blue" />
              </div>
              <span className="text-rccg-gold font-heading font-bold tracking-widest uppercase text-sm">Our Sanctuary</span>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-8 leading-tight">
              Celebration House, <br className="hidden lg:block" />
              <span className="text-rccg-gold">Adigbe, Abeokuta.</span>
            </h3>
            <p className="text-white/70 text-lg font-body leading-relaxed mb-10">
              {CHURCH_INFO.location}
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => window.open(CHURCH_INFO.directionsUrl, '_blank')}
                className="inline-flex items-center gap-3 bg-white text-rccg-blue px-8 py-4 rounded-2xl font-heading font-bold hover:bg-rccg-gold transition-all shadow-lg active:scale-95"
              >
                <span>Get Directions</span>
                <ExternalLink className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 h-[400px] lg:h-auto min-h-[400px]">
            <iframe
              src={CHURCH_INFO.mapUrl}
              className="w-full h-full grayscale-[0.2] contrast-[1.1]"
              loading="lazy"
              title="Church Location Map"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceTimes;