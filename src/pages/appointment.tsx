import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Calendar as CalendarIcon, Clock, User, Sparkles, CheckCircle2 } from "lucide-react";

export default function Appointment() {
  const [location, setLocation] = useLocation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    stylist: "Any",
    message: ""
  });

  // Check if a service was passed in URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get('service');
    if (serviceParam) {
      setFormData(prev => ({ ...prev, service: serviceParam }));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save to localStorage
    const existing = JSON.parse(localStorage.getItem("bloom_appointments") || "[]");
    localStorage.setItem("bloom_appointments", JSON.stringify([...existing, { ...formData, id: Date.now() }]));
    
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isSubmitted) {
    return (
      <div className="w-full pt-32 pb-24 min-h-[80vh] flex items-center justify-center bg-background">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-card p-10 md:p-16 rounded-3xl border border-border shadow-xl text-center max-w-lg mx-auto"
        >
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={48} className="text-green-600" />
          </div>
          <h2 className="text-3xl font-serif font-bold mb-4">Appointment Confirmed!</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Thank you, {formData.name}. Your request for {formData.service || "a service"} on {formData.date} at {formData.time} has been received. We'll call you shortly to confirm.
          </p>
          <button 
            onClick={() => setLocation("/")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-bold transition-transform hover:-translate-y-1 w-full"
          >
            Return to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full pt-20 bg-background min-h-screen">
      <section className="bg-secondary/30 py-16 text-center">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
          >
            Book Your Appointment
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Reserve your time for luxury and pampering.
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card rounded-3xl shadow-xl border border-border overflow-hidden flex flex-col md:flex-row">
            
            {/* Left side Image */}
            <div className="hidden md:block w-1/3 bg-primary relative">
              <img 
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80" 
                alt="Salon" 
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent flex items-end p-8">
                <div className="text-primary-foreground">
                  <h3 className="font-serif text-2xl font-bold mb-2">Bloom Salon</h3>
                  <p className="text-sm opacity-90">Where luxury meets beauty.</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="w-full md:w-2/3 p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
                        <User size={18} />
                      </div>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="+91 0000000000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Select Service *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
                      <Sparkles size={18} />
                    </div>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none"
                    >
                      <option value="" disabled>Select a service...</option>
                      <optgroup label="Hair">
                        <option value="Haircut">Haircut</option>
                        <option value="Hair Styling">Hair Styling</option>
                        <option value="Hair Spa">Hair Spa</option>
                        <option value="Keratin">Keratin</option>
                        <option value="Hair Coloring">Hair Coloring</option>
                      </optgroup>
                      <optgroup label="Beauty & Makeup">
                        <option value="Facial">Premium Facial</option>
                        <option value="Bridal Makeup">Bridal Makeup</option>
                        <option value="Party Makeup">Party Makeup</option>
                        <option value="Waxing">Waxing</option>
                      </optgroup>
                      <optgroup label="Nails">
                        <option value="Gel Nails">Gel Nails</option>
                        <option value="Nail Art">Nail Art</option>
                        <option value="Manicure & Pedicure">Manicure & Pedicure</option>
                      </optgroup>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Preferred Date *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
                        <CalendarIcon size={18} />
                      </div>
                      <input 
                        type="date" 
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Preferred Time *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
                        <Clock size={18} />
                      </div>
                      <select 
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none"
                      >
                        <option value="" disabled>Select time...</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="12:00 PM">12:00 PM</option>
                        <option value="01:00 PM">01:00 PM</option>
                        <option value="02:00 PM">02:00 PM</option>
                        <option value="03:00 PM">03:00 PM</option>
                        <option value="04:00 PM">04:00 PM</option>
                        <option value="05:00 PM">05:00 PM</option>
                        <option value="06:00 PM">06:00 PM</option>
                        <option value="07:00 PM">07:00 PM</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Stylist Preference</label>
                  <select 
                    name="stylist"
                    value={formData.stylist}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none"
                  >
                    <option value="Any">No Preference (Any Available)</option>
                    <option value="Priya Sharma">Priya Sharma</option>
                    <option value="Rahul Verma">Rahul Verma</option>
                    <option value="Anita Desai">Anita Desai</option>
                    <option value="Sneha Patel">Sneha Patel</option>
                  </select>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 rounded-xl font-bold text-lg transition-transform hover:-translate-y-1 shadow-md"
                  >
                    Confirm Booking
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
