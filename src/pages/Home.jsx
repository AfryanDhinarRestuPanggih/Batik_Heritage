import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutBatik from '../components/AboutBatik';
import ProductGrid from '../components/ProductGrid';
import FeaturedCollection from '../components/FeaturedCollection';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AboutBatik />
        <FeaturedCollection />
        <ProductGrid />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
