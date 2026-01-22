import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import BookingCTA from './components/BookingCTA';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <BookingCTA />
      <Footer />
    </div>
  );
}
