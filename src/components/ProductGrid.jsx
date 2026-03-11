import React from 'react';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Kawung Scarf",
      price: "$45",
      image: "/src/assets/images/product-1.png",
      description: "Classic kawung pattern on fine cotton."
    },
    {
      id: 2,
      name: "Truntum Hand-drawn Fabric",
      price: "$120",
      image: "/src/assets/images/product-2.png",
      description: "Symbolizing love that grows, perfect for wedding ceremonies."
    },
    {
      id: 3,
      name: "Sogan Classic Sarong",
      price: "$85",
      image: "/src/assets/images/product-3.png",
      description: "Rich brown hues from traditional natural dye."
    },
    {
      id: 4,
      name: "Sekar Jagad Shawl",
      price: "$65",
      image: "/src/assets/images/product-4.png",
      description: "A beautiful amalgamation of worldly flowers motif."
    }
  ];

  return (
    <section id="products" className="py-24 bg-batik-cream bg-batik-pattern">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-batik-beige pb-6">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-batik-dark mb-4">Our Gallery Collection</h2>
            <p className="text-batik-dark/70 font-sans max-w-xl">
              Authentic pieces straight from the hands of artisans, capturing the rich diversity of Indonesian cultures.
            </p>
          </div>
          <button className="hidden md:block mt-6 md:mt-0 text-batik-brown font-semibold uppercase hover:text-batik-gold transition-colors tracking-widest text-sm border-b-2 border-batik-gold pb-1">
            View All Products
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group bg-white rounded-sm shadow-sm hover:shadow-xl transition-all hover-lift duration-300 border border-batik-beige/30 flex flex-col h-full overflow-hidden">
              <div className="aspect-[4/5] overflow-hidden relative bg-batik-beige">
                <div className="absolute inset-0 bg-batik-dark/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
                />
                
                {/* Overlay cart button */}
                <div className="absolute bottom-[-50px] left-0 w-full group-hover:bottom-0 transition-all duration-300 z-20 flex justify-center pb-4">
                  <button className="bg-batik-brown text-batik-cream px-6 py-2 rounded-sm font-semibold shadow-lg hover:bg-batik-gold w-10/12 text-sm uppercase tracking-wide">
                    View Pattern
                  </button>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl font-bold text-batik-dark">{product.name}</h3>
                  <span className="font-sans text-batik-gold font-bold ml-2">{product.price}</span>
                </div>
                <p className="text-batik-dark/70 text-sm flex-grow line-clamp-3 leading-relaxed mt-2">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <button className="text-batik-brown font-semibold uppercase hover:text-batik-gold transition-colors tracking-widest text-sm border-2 border-batik-brown hover:border-batik-gold py-3 px-8 rounded-sm w-full">
            View All Products
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProductGrid;
