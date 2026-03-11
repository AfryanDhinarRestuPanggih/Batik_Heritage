import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center pt-20 overflow-hidden bg-batik-pattern">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-batik-dark/90 to-batik-brown/70 mix-blend-multiply z-10" />
        <img 
          src="/src/assets/images/hero.png" 
          alt="Traditional Batik Fabric Making" 
          className="w-full h-full object-cover grayscale opacity-90"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-20 text-center text-batik-cream">
        <span className="block text-batik-gold font-sans uppercase tracking-[0.2em] mb-4 text-sm md:text-base font-semibold">
          Authentic Indonesian Heritage
        </span>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 drop-shadow-lg leading-tight">
          Timeless Batik <br className="hidden md:block"/> Elegance
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-batik-beige/90 mb-10 font-light leading-relaxed">
          Discover our curated collection of handmade traditional batiks, where every pattern tells a story of culture and meticulous craftsmanship.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a href="#featured" className="w-full sm:w-auto px-8 py-4 bg-batik-gold text-batik-dark font-semibold rounded-sm hover-lift shadow-[0_0_20px_rgba(198,161,91,0.3)] transition-all">
            Explore Collection
          </a>
          <a href="#about" className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-batik-beige/30 text-batik-cream font-semibold rounded-sm hover:bg-batik-beige/10 transition-colors">
            Our Heritage
          </a>
        </div>
      </div>
      
      {/* Scroll indicator down */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <a href="#about" className="text-batik-gold opacity-80 hover:opacity-100 transition-opacity">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
