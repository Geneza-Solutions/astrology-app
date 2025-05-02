import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Testimonials } from '../components/Testimonials';
import { SpecialOffer } from '../components/SpecialOffer';
import { Footer } from '../components/Footer';
import { TimerProvider } from '../contexts/TimerContext';

export const LandingPage: React.FC = () => {
  return (
    <TimerProvider initialHours={4}>
      <div className="min-h-screen bg-gradient-to-b from-indigo-950 to-purple-950 text-white">
        <Navbar />
        <Hero />
        <Features />
        <Testimonials />
        <SpecialOffer />
        <Footer />
      </div>
    </TimerProvider>
  );
};