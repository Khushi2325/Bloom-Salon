import { motion } from "framer-motion";

export default function About() {
  const team = [
    { name: "Priya Sharma", role: "Creative Director", exp: "12+ Years", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80" },
    { name: "Rahul Verma", role: "Senior Hair Stylist", exp: "8+ Years", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80" },
    { name: "Anita Desai", role: "Lead Makeup Artist", exp: "10+ Years", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80" },
    { name: "Sneha Patel", role: "Skin Care Specialist", exp: "6+ Years", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
    { name: "Vikram Singh", role: "Color Expert", exp: "7+ Years", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
    { name: "Meera Reddy", role: "Nail Technician", exp: "5+ Years", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80" }
  ];

  return (
    <div className="w-full pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516975080661-46bfa2c281c7?w=1600&q=80')" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-4"
          >
            Our Story
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl max-w-2xl mx-auto font-light"
          >
            Redefining luxury beauty in Gujarat since 2016.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card p-10 rounded-3xl shadow-sm border border-border"
            >
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To provide an unparalleled luxury beauty experience that empowers our clients, enhances their natural beauty, and leaves them feeling pampered, confident, and radiant.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary p-10 rounded-3xl shadow-md text-primary-foreground"
            >
              <h2 className="text-3xl font-serif font-bold mb-6">Our Vision</h2>
              <p className="text-primary-foreground/90 leading-relaxed text-lg">
                To be the most trusted and sought-after luxury salon brand in India, recognized for our commitment to excellence, innovation in beauty, and exceptional customer care.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Journey</h2>
          </div>
          
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-primary/20 hidden md:block" />
            
            {[
              { year: "2016", title: "The Beginning", desc: "Bloom Salon opened its doors in Waghodia with a team of just 3 stylists." },
              { year: "2017", title: "First Award", desc: "Recognized as 'Best Emerging Salon' in Gujarat." },
              { year: "2019", title: "Expansion", desc: "Expanded our premises to include a dedicated luxury spa and bridal suite." },
              { year: "2021", title: "Growing Family", desc: "Team grew to over 50+ professionals serving hundreds of clients weekly." },
              { year: "2023", title: "Milestone", desc: "Celebrated serving our 10,000th happy customer." },
            ].map((milestone, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center mb-12 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="w-full md:w-1/2" />
                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background z-10 hidden md:flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <div className={`w-full md:w-1/2 p-6 md:p-8 ${i % 2 === 0 ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                  <span className="text-primary font-bold text-xl mb-2 block">{milestone.year}</span>
                  <h3 className="text-2xl font-serif font-bold mb-3">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Meet Our Experts</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">The talented professionals behind the magic.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-serif font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-primary-foreground font-medium mb-1">{member.role}</p>
                  <p className="text-white/70 text-sm">{member.exp} Experience</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
