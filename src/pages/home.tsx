import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Star, ArrowRight, CheckCircle2, Shield, Heart, Sparkles, Award, Users } from "lucide-react";

export default function Home() {
  const [stats, setStats] = useState({ customers: 0, rating: 0, experts: 0, years: 0 });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setStats({
        customers: Math.floor(progress * 1045),
        rating: Number((progress * 4.5).toFixed(1)),
        experts: Math.floor(progress * 15),
        years: Math.floor(progress * 8)
      });

      if (currentStep >= steps) clearInterval(interval);
    }, duration / steps);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&q=80')" }}
        />
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
        
        <div className="relative z-10 container mx-auto px-4 text-center mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 max-w-4xl mx-auto"
          >
            Experience Luxury Beauty Like Never Before
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light"
          >
            Bloom Salon offers premium hair styling, bridal makeup, skincare, nail art and spa services with highly trained professionals.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/appointment">
              <button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-medium text-lg transition-transform hover:-translate-y-1">
                Book Appointment
              </button>
            </Link>
            <Link href="/services">
              <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/30 px-8 py-4 rounded-full font-medium text-lg transition-transform hover:-translate-y-1">
                Explore Services
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center"
        >
          <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
          <div className="w-px h-12 bg-white/50 relative overflow-hidden">
            <motion.div 
              animate={{ top: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute left-0 w-full h-1/2 bg-white"
            />
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Why Choose Bloom</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Discover the exceptional standards that make us the premier destination for your beauty needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Award, title: "Certified Professionals", desc: "Our team consists of highly trained and certified beauty experts." },
              { icon: Sparkles, title: "Premium Products", desc: "We use only the finest, internationally recognized beauty products." },
              { icon: Shield, title: "Hygienic Environment", desc: "Strict sanitation protocols for your safety and peace of mind." },
              { icon: Star, title: "Affordable Luxury", desc: "Premium services that deliver value beyond expectations." },
              { icon: Users, title: "Personalized Styling", desc: "Customized treatments tailored specifically to your unique needs." },
              { icon: Heart, title: "Customer Satisfaction", desc: "A track record of thousands of delighted clients who return." },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-card p-8 rounded-2xl border border-border/50 hover:shadow-xl transition-all flex flex-col items-start"
              >
                <div className="w-14 h-14 bg-secondary text-primary rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: `${stats.customers}+`, label: "Happy Customers" },
              { value: `${stats.rating}★`, label: "Google Rating" },
              { value: `${stats.experts}+`, label: "Beauty Experts" },
              { value: `${stats.years}+`, label: "Years Experience" },
            ].map((stat, i) => (
              <div key={i}>
                <h3 className="text-4xl md:text-5xl font-serif font-bold mb-2">{stat.value}</h3>
                <p className="text-primary-foreground/80 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Our Signature Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Indulge in our curated selection of premium beauty treatments designed to make you look and feel extraordinary.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Hair Styling", img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80", price: "400" },
              { title: "Hair Spa", img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80", price: "600" },
              { title: "Hair Coloring", img: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80", price: "800" },
              { title: "Bridal Makeup", img: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80", price: "8000" },
              { title: "Premium Facial", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80", price: "500" },
              { title: "Waxing", img: "https://images.unsplash.com/photo-1561012543-0e0600dcb76e?w=600&q=80", price: "200" },
              { title: "Threading", img: "https://images.unsplash.com/photo-1512496015851-a1fbaf69cead?w=600&q=80", price: "50" },
              { title: "Nail Art", img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80", price: "200" },
            ].map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-border flex flex-col h-full"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" loading="lazy" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-xl font-serif font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">Experience luxury and perfection with our signature {service.title.toLowerCase()} service.</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="font-medium text-primary text-sm">From ₹{service.price}</span>
                    <Link href="/services">
                      <span className="text-sm font-semibold hover:text-primary flex items-center cursor-pointer">
                        Learn More <ArrowRight size={14} className="ml-1" />
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services">
              <button className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full font-medium transition-colors">
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Read the experiences of those who have discovered their perfect look at Bloom.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Priya Patel", text: "Absolutely loved my bridal makeup! The team was so professional and made me feel like a queen on my special day. The products used were top-notch.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80" },
              { name: "Neha Sharma", text: "Best hair spa in Waghodia! The ambiance is so relaxing and the staff is extremely polite. My hair feels incredibly soft and healthy.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80" },
              { name: "Ananya Desai", text: "I've been a regular for 2 years now. Their nail art services are creative and long-lasting. Always a 5-star experience at Bloom.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80" },
              { name: "Meera Shah", text: "Got a completely new hair color and cut. The stylist understood exactly what I wanted. I've received so many compliments!", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&q=80" },
              { name: "Riya Mehta", text: "Very hygienic and clean salon. The facial services are divine and really helped with my skin concerns. Highly recommend!", img: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=150&q=80" },
              { name: "Shruti Joshi", text: "Affordable luxury is the perfect way to describe this place. You get premium service without burning a hole in your pocket.", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&q=80" }
            ].map((review, i) => (
              <div key={i} className="bg-card p-6 rounded-2xl shadow-sm border border-border/50">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="text-foreground/80 mb-6 italic">"{review.text}"</p>
                <div className="flex items-center">
                  <img src={review.img} alt={review.name} className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-primary/20" />
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <span className="text-xs text-muted-foreground">Verified Client</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Follow Us on Instagram</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-4">@bloomsalon_luxury</p>
          </div>
          
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {[
              "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&q=80",
              "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80",
              "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&q=80",
              "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80",
              "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80",
              "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80",
              "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400&q=80",
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&q=80",
              "https://images.unsplash.com/photo-1512496015851-a1fbaf69cead?w=400&q=80",
              "https://images.unsplash.com/photo-1561012543-0e0600dcb76e?w=400&q=80"
            ].map((img, i) => (
              <div key={i} className="relative overflow-hidden rounded-xl group cursor-pointer break-inside-avoid">
                <img src={img} alt={`Gallery ${i}`} className="w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <InstagramIcon />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-95" />
        <div 
          className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" 
        />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready For Your New Look?</h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light">
            Book your appointment today and let our experts pamper you with the luxury you deserve.
          </p>
          <Link href="/appointment">
            <button className="bg-white text-primary hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition-transform hover:-translate-y-1 shadow-xl">
              Book Appointment Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}
