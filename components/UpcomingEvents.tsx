import React from 'react';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { UPCOMING_EVENTS } from '../constants';

const UpcomingEvents: React.FC = () => {
  return (
    <section id="events" className="py-16 px-6 bg-rccg-cream">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-rccg-red font-heading font-bold uppercase text-sm tracking-[0.2em] mb-4 block">Don't Miss Out</span>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-rccg-blue mb-4">Upcoming Events</h2>
            <p className="text-rccg-blue/60 text-lg font-body leading-relaxed">
              Mark your calendars for these special encounters. There is always something glorious happening at Celebration House.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {UPCOMING_EVENTS.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[3rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all flex flex-col lg:flex-row border border-rccg-blue/5 group"
            >
              <div className="lg:w-1/2 h-64 lg:h-auto relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-rccg-blue/20 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500"></div>
              </div>

              <div className="lg:w-1/2 p-10 lg:p-12 flex flex-col justify-center">
                <div className="mb-8">
                  <div className="flex items-center gap-2 text-rccg-red font-heading font-bold text-xs tracking-widest uppercase mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-black text-rccg-blue mb-4 leading-tight group-hover:text-rccg-red transition-colors">
                    {event.title}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-rccg-blue/60 font-body text-sm">
                      <Clock className="w-4 h-4 text-rccg-gold" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-rccg-blue/60 font-body text-sm">
                      <MapPin className="w-4 h-4 text-rccg-gold" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => console.log(`Adding ${event.title} to calendar`)}
                  className="inline-flex items-center gap-2 bg-rccg-blue text-white px-6 py-3 rounded-xl font-heading font-bold text-sm hover:bg-rccg-gold hover:text-rccg-blue transition-all active:scale-95"
                >
                  <span>Add to Calendar</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;