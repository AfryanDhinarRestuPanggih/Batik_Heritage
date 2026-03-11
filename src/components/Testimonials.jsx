import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Textile Enthusiast",
      text: "The quality of the Hand-drawn Truntum fabric is mesmerizing. You can truly see the dedication of the artisans in every stroke of wax.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Interior Designer",
      text: "I used these batik pieces as wall tapestries for a client's living room. The earthy tones and intricate patterns added an unparalleled depth to the space.",
      rating: 5
    },
    {
      id: 3,
      name: "Aisha Rahman",
      role: "Cultural Historian",
      text: "Authentic, beautiful, and deeply respectful of the heritage. Batik Heritage provides exactly what they promise - pieces of Indonesian history.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-batik-dark text-batik-cream relative overflow-hidden">
      {/* Decorative bg element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-batik-gold rounded-full mix-blend-multiply opacity-10 filter blur-[80px]"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-batik-beige rounded-full mix-blend-multiply opacity-10 filter blur-[100px]"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <svg className="w-10 h-10 mx-auto text-batik-gold mb-4 opacity-50" fill="currentColor" viewBox="0 0 32 32">
            <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2h2V8h-2zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2h2V8h-2z" />
          </svg>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 drop-shadow-md">Customer Stories</h2>
          <div className="w-20 h-1 bg-batik-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-batik-brown/40 border border-batik-gold/20 p-8 rounded-sm hover:-translate-y-2 transition-transform duration-300">
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-batik-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-batik-beige/90 italic mb-6 leading-relaxed font-light">"{review.text}"</p>
              <div>
                <h4 className="font-serif text-lg font-bold text-batik-cream">{review.name}</h4>
                <span className="text-sm text-batik-gold uppercase tracking-wider font-semibold">{review.role}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
