import { motion } from "framer-motion";
import { Link } from "wouter";

const services = {
  Hair: [
    { name: "Haircut", price: "300+" },
    { name: "Hair Styling", price: "400+" },
    { name: "Hair Spa", price: "600+" },
    { name: "Hair Smoothening", price: "1500+" },
    { name: "Hair Straightening", price: "2000+" },
    { name: "Hair Coloring", price: "800+" },
    { name: "Keratin", price: "2500+" }
  ],
  Beauty: [
    { name: "Facial", price: "500+" },
    { name: "Cleanup", price: "300+" },
    { name: "Waxing", price: "200+" },
    { name: "Threading", price: "50+" },
    { name: "Bleach", price: "250+" }
  ],
  Makeup: [
    { name: "Bridal Makeup", price: "8000+" },
    { name: "Party Makeup", price: "2000+" },
    { name: "Engagement Makeup", price: "5000+" }
  ],
  Nails: [
    { name: "Gel Nails", price: "800+" },
    { name: "Nail Art", price: "200+" },
    { name: "Manicure", price: "300+" },
    { name: "Pedicure", price: "350+" }
  ]
};

const serviceImages = {
  Hair: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
  Beauty: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
  Makeup: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80",
  Nails: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80"
};

export default function Services() {
  return (
    <div className="w-full pt-20">
      {/* Hero Section */}
      <section className="bg-secondary/30 py-20 text-center">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Discover our curated menu of premium beauty treatments, designed to pamper you from head to toe.
          </motion.p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl space-y-24">
          {(Object.keys(services) as Array<keyof typeof services>).map((category, index) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                  <img 
                    src={serviceImages[category]} 
                    alt={`${category} Services`} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">{category}</h2>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-serif font-semibold mb-6 text-primary">Luxury {category} Services</h3>
                <div className="space-y-4">
                  {services[category].map((item, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-border/60 pb-4">
                      <div>
                        <h4 className="font-medium text-lg">{item.name}</h4>
                      </div>
                      <div className="text-right">
                        <span className="font-semibold text-primary block">₹{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link href={`/appointment?service=${category}`}>
                    <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-medium transition-transform hover:-translate-y-1 shadow-md w-full sm:w-auto">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Need a Custom Package?</h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Contact us directly to arrange personalized bridal packages, group bookings, or specialized treatments.
          </p>
          <Link href="/contact">
            <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-transform hover:-translate-y-1 shadow-lg">
              Contact Us
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
