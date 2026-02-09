import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import ServiceTimes from './components/ServiceTimes';
import Ministries from './components/Ministries';
import UpcomingEvents from './components/UpcomingEvents';
import Resources from './components/Resources';
import Giving from './components/Giving';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="max-w-[1600px] mx-auto px-2 pb-2 sm:px-4 sm:pb-4 lg:px-6 lg:pb-6 font-sans antialiased selection:bg-stone-900 selection:text-white relative">
      <Navbar />
      <Hero />
      <Welcome />
      <ServiceTimes />
      <Ministries />
      <UpcomingEvents />
      <Resources />
      <Giving />
      <Footer />
    </div>
  );
};

export default App;