import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColor = isScrolled ? 'text-batik-dark' : 'text-batik-cream';
  const logoColor = isScrolled ? 'text-batik-brown' : 'text-batik-cream';
  const hoverColor = 'hover:text-batik-gold';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-batik-cream/95 backdrop-blur-sm shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className={`font-serif text-2xl md:text-3xl font-bold tracking-wider transition-colors ${logoColor}`}>
            Batik Heritage
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className={`font-medium transition-colors ${textColor} ${hoverColor}`}>Home</a>
            <a href="#about" className={`font-medium transition-colors ${textColor} ${hoverColor}`}>About</a>
            <a href="#featured" className={`font-medium transition-colors ${textColor} ${hoverColor}`}>Featured</a>
            <a href="#products" className={`font-medium transition-colors ${textColor} ${hoverColor}`}>Collection</a>
            <a href="#contact" className="px-6 py-2 bg-batik-brown text-white hover:bg-batik-gold hover-lift rounded-sm transition-all shadow-sm">Contact Us</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`focus:outline-none transition-colors ${textColor}`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-batik-cream shadow-lg border-t border-batik-beige/50">
            <div className="flex flex-col px-4 py-4 space-y-4">
              <a href="#" className="text-batik-dark hover:text-batik-gold font-medium" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
              <a href="#about" className="text-batik-dark hover:text-batik-gold font-medium" onClick={() => setIsMobileMenuOpen(false)}>About</a>
              <a href="#featured" className="text-batik-dark hover:text-batik-gold font-medium" onClick={() => setIsMobileMenuOpen(false)}>Featured</a>
              <a href="#products" className="text-batik-dark hover:text-batik-gold font-medium" onClick={() => setIsMobileMenuOpen(false)}>Collection</a>
              <a href="#contact" className="text-batik-dark hover:text-batik-gold font-medium" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
