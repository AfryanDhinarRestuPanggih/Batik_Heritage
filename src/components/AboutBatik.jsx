import React from 'react';

const AboutBatik = () => {
  return (
    <section id="about" className="py-24 bg-batik-cream relative">
      <div className="absolute inset-0 bg-batik-pattern pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative group">
            <div className="absolute inset-0 bg-batik-gold/20 transform rotate-3 scale-[1.03] transition-transform group-hover:rotate-6 z-0 rounded-sm"></div>
            <img 
              src="/src/assets/images/about.png" 
              alt="Batik Crafting Process" 
              className="relative z-10 w-full h-auto object-cover rounded-sm border-4 border-white shadow-xl hover-lift"
            />
          </div>
          
          {/* Text Side */}
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <div className="h-[2px] w-12 bg-batik-gold"></div>
              <span className="text-batik-gold font-sans font-semibold uppercase tracking-widest text-sm">Our Heritage</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-5xl font-bold text-batik-dark mb-8 leading-tight">
              A Symphony of Art and Tradition
            </h2>
            
            <p className="text-batik-dark/80 text-lg leading-relaxed mb-8">
              Indonesian batik is more than just cloth; it is the soul of our nation woven into fabric. Registered by UNESCO as a Masterpiece of Oral and Intangible Heritage of Humanity, every motif represents stories, philosophies, and prayers passed down through generations.
            </p>
            
            <p className="text-batik-dark/80 text-lg leading-relaxed mb-10">
              At Batik Heritage, we collaborate directly with local artisans to preserve this sacred art. Using traditional techniques like "canting" (waxing) and natural dye extraction, we ensure authenticity in every thread.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col space-y-2">
                <div className="text-batik-gold">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-serif font-bold text-batik-dark text-xl">Handmade Craft</h4>
                <p className="text-batik-dark/70 text-sm">Meticulously penned by master artisans.</p>
              </div>
              
              <div className="flex flex-col space-y-2">
                <div className="text-batik-gold">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-serif font-bold text-batik-dark text-xl">Authentic</h4>
                <p className="text-batik-dark/70 text-sm">Sourced directly from Indonesian villages.</p>
              </div>
              
              <div className="flex flex-col space-y-2">
                <div className="text-batik-gold">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h4 className="font-serif font-bold text-batik-dark text-xl">Premium</h4>
                <p className="text-batik-dark/70 text-sm">Fine cotton and silk materials for lasting elegance.</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBatik;
