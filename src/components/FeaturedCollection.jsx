import React from 'react';

const FeaturedCollection = () => {
  const featured = [
    {
      id: 1,
      name: "Tulis 'Mega Mendung' Silk",
      price: "$145",
      image: "/src/assets/images/featured-1.png",
      description: "Premium silk batik featuring the iconic cloud motif from Cirebon."
    },
    {
      id: 2,
      name: "Solo 'Parang' Series",
      price: "$180",
      image: "/src/assets/images/featured-2.png",
      description: "A symbol of agility and power, historically reserved for Javanese royalty."
    }
  ];

  return (
    <section id="featured" className="py-24 bg-[#ede2cf] bg-batik-pattern">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16">
          <span className="text-batik-gold font-sans font-semibold uppercase tracking-widest text-sm mb-4 block">Premium Craftsmanship</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-batik-dark">Featured Collections</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {featured.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-sm hover-lift shadow-xl bg-batik-brown">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-90 group-hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-batik-dark/95 via-batik-dark/40 to-transparent p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-serif text-3xl font-bold text-batik-cream mb-2">{item.name}</h3>
                  <p className="text-batik-beige/90 text-sm mb-4 line-clamp-2 max-w-md">{item.description}</p>
                  <div className="flex justify-between items-center bg-batik-dark/50 backdrop-blur-sm p-4 rounded-sm border border-batik-gold/30">
                    <span className="text-batik-gold font-bold text-xl">{item.price}</span>
                    <button className="text-batik-cream text-sm font-semibold uppercase hover:text-batik-gold transition-colors flex items-center gap-2">
                       View Details
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                       </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedCollection;
