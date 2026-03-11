import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-batik-dark text-batik-cream pt-20 pb-10 border-t-4 border-batik-gold">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <a href="#" className="font-serif text-3xl font-bold text-batik-gold tracking-wider mb-6 inline-block">
              Batik Heritage
            </a>
            <p className="text-batik-beige/70 font-light leading-relaxed max-w-sm mb-8">
              Preserving the soul of Indonesian culture through authentic, handcrafted batik pieces. Every pattern tells a story, every thread honors a legacy.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-batik-gold/30 flex items-center justify-center text-batik-gold hover:bg-batik-gold hover:text-batik-dark transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-batik-gold/30 flex items-center justify-center text-batik-gold hover:bg-batik-gold hover:text-batik-dark transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-batik-gold/30 flex items-center justify-center text-batik-gold hover:bg-batik-gold hover:text-batik-dark transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans font-bold text-batik-cream uppercase tracking-widest mb-6 border-b border-batik-gold/30 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-batik-beige/70 hover:text-batik-gold transition-colors block">Our Collections</a></li>
              <li><a href="#about" className="text-batik-beige/70 hover:text-batik-gold transition-colors block">Artisan Stories</a></li>
              <li><a href="#" className="text-batik-beige/70 hover:text-batik-gold transition-colors block">Custom Orders</a></li>
              <li><a href="#" className="text-batik-beige/70 hover:text-batik-gold transition-colors block">Care Guide</a></li>
              <li><a href="#contact" className="text-batik-beige/70 hover:text-batik-gold transition-colors block">Contact Us</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-sans font-bold text-batik-cream uppercase tracking-widest mb-6 border-b border-batik-gold/30 pb-2 inline-block">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-batik-beige/70 hover:text-batik-gold transition-colors block">Shipping & Returns</a></li>
              <li><a href="#" className="text-batik-beige/70 hover:text-batik-gold transition-colors block">Size Guide</a></li>
              <li><a href="#" className="text-batik-beige/70 hover:text-batik-gold transition-colors block">FAQ</a></li>
              <li><a href="#" className="text-batik-beige/70 hover:text-batik-gold transition-colors block">Privacy Policy</a></li>
              <li><a href="#" className="text-batik-beige/70 hover:text-batik-gold transition-colors block">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-batik-beige/20 flex flex-col md:flex-row justify-between items-center bg-batik-dark/50">
          <p className="text-batik-beige/50 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Batik Heritage. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <span className="text-batik-beige/50 text-sm">Crafted with precision</span>
            <span className="text-batik-gold tracking-widest text-xs uppercase opacity-70">Authentic Indonesian Craft</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
