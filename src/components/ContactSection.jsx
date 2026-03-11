import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-batik-cream bg-batik-pattern">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div>
            <div className="mb-12">
              <span className="text-batik-gold font-sans font-semibold uppercase tracking-widest text-sm mb-4 block">Get In Touch</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-batik-dark mb-6">Visit Our Boutique</h2>
              <p className="text-batik-dark/80 text-lg leading-relaxed max-w-lg">
                Experience the beauty of Indonesian craftsmanship in person or send us a message to inquire about our premium collections.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-6 bg-white p-6 rounded-sm shadow-sm border border-batik-beige hover:border-batik-gold transition-colors">
                <div className="text-batik-gold mt-1">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold text-batik-dark mb-2">Our Store Location</h4>
                  <p className="text-batik-dark/70 font-light leading-relaxed">
                    123 Heritage Lane, Craft District<br />
                    Jakarta Selatan, Indonesia 12190
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 bg-white p-6 rounded-sm shadow-sm border border-batik-beige hover:border-batik-gold transition-colors">
                <div className="text-batik-gold mt-1">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold text-batik-dark mb-2">Email Address</h4>
                  <p className="text-batik-dark/70 font-light mb-1">hello@batikheritage.com</p>
                  <p className="text-batik-dark/70 font-light">support@batikheritage.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 bg-white p-6 rounded-sm shadow-sm border border-batik-beige hover:border-batik-gold transition-colors">
                <div className="text-batik-gold mt-1">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold text-batik-dark mb-2">Phone Number</h4>
                  <p className="text-batik-dark/70 font-light">+62 812-3456-7890</p>
                  <p className="text-batik-dark/70 font-light">Mon-Fri (9:00 AM - 6:00 PM)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-10 md:p-12 rounded-sm shadow-2xl border-t-4 border-batik-gold">
            <h3 className="font-serif text-3xl font-bold text-batik-dark mb-8">Send a Message</h3>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-batik-brown mb-2 uppercase tracking-wide">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-batik-cream border border-batik-beige focus:border-batik-gold focus:ring-1 focus:ring-batik-gold focus:outline-none p-4 rounded-sm transition-colors text-batik-dark placeholder-batik-dark/30"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-batik-brown mb-2 uppercase tracking-wide">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-batik-cream border border-batik-beige focus:border-batik-gold focus:ring-1 focus:ring-batik-gold focus:outline-none p-4 rounded-sm transition-colors text-batik-dark placeholder-batik-dark/30"
                  placeholder="name@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-batik-brown mb-2 uppercase tracking-wide">Your Message</label>
                <textarea 
                  rows="5" 
                  className="w-full bg-batik-cream border border-batik-beige focus:border-batik-gold focus:ring-1 focus:ring-batik-gold focus:outline-none p-4 rounded-sm transition-colors text-batik-dark placeholder-batik-dark/30 resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button 
                type="button" 
                className="w-full bg-batik-dark text-batik-cream font-bold uppercase tracking-widest py-4 rounded-sm hover:-translate-y-1 hover:shadow-lg transition-all flex items-center justify-center gap-3 border border-batik-dark hover:bg-batik-brown w-full"
              >
                Send Message
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
