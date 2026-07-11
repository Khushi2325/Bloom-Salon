import { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const allReviews = [
  { id: 1, name: "Priya Patel", date: "2 days ago", stars: 5, text: "Absolutely loved my bridal makeup! The team was so professional.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80" },
  { id: 2, name: "Neha Sharma", date: "1 week ago", stars: 5, text: "Best hair spa in Waghodia! My hair feels incredibly soft.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80" },
  { id: 3, name: "Ananya Desai", date: "2 weeks ago", stars: 4, text: "Their nail art services are creative and long-lasting.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80" },
  { id: 4, name: "Meera Shah", date: "1 month ago", stars: 5, text: "Got a completely new hair color and cut. Always a 5-star experience.", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&q=80" },
  { id: 5, name: "Riya Mehta", date: "1 month ago", stars: 4, text: "Very hygienic and clean salon. The facial services are divine.", img: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=150&q=80" },
  { id: 6, name: "Shruti Joshi", date: "2 months ago", stars: 5, text: "Affordable luxury is the perfect way to describe this place.", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&q=80" },
  { id: 7, name: "Kiran Rajput", date: "2 months ago", stars: 3, text: "Good service but had to wait 15 minutes past my appointment time.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80" },
  { id: 8, name: "Sneha Trivedi", date: "3 months ago", stars: 5, text: "The keratin treatment completely transformed my frizzy hair.", img: "https://images.unsplash.com/photo-1531123897727-8f129e1b4dce?w=150&q=80" },
  { id: 9, name: "Diya Amin", date: "3 months ago", stars: 5, text: "Staff is very polite and the ambiance is extremely relaxing.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80" },
  { id: 10, name: "Aarohi Bhatt", date: "4 months ago", stars: 4, text: "Loved the manicure and pedicure. Will definitely visit again.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80" },
  { id: 11, name: "Pooja Soni", date: "5 months ago", stars: 5, text: "The engagement makeup was flawless and lasted the entire evening.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80" },
  { id: 12, name: "Kruti Vyas", date: "6 months ago", stars: 5, text: "Always get my haircuts here. They never disappoint.", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&q=80" }
];

export default function Reviews() {
  const [filter, setFilter] = useState<number | "All">("All");

  const filteredReviews = filter === "All" 
    ? allReviews 
    : allReviews.filter(r => r.stars === filter);

  const stats = {
    5: 850,
    4: 150,
    3: 35,
    2: 8,
    1: 2
  };
  const total = 1045;

  return (
    <div className="w-full pt-20">
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12">Client Reviews</h1>
          
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-sm border border-border flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3 text-center border-b md:border-b-0 md:border-r border-border/60 pb-8 md:pb-0 md:pr-8">
              <h2 className="text-6xl font-bold text-primary mb-2">4.5</h2>
              <div className="flex justify-center text-yellow-400 mb-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={24} fill={s <= 4 ? "currentColor" : "none"} className={s === 5 ? "text-yellow-400" : ""} />
                ))}
              </div>
              <p className="text-muted-foreground">{total} total reviews</p>
            </div>
            
            <div className="w-full md:w-2/3 space-y-3">
              {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="flex items-center gap-4 cursor-pointer hover:opacity-80" onClick={() => setFilter(star)}>
                  <span className="w-12 text-sm font-medium">{star} Stars</span>
                  <div className="flex-1 h-3 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full" 
                      style={{ width: `${(stats[star as keyof typeof stats] / total) * 100}%` }}
                    />
                  </div>
                  <span className="w-12 text-sm text-muted-foreground text-right">{stats[star as keyof typeof stats]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background min-h-[50vh]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex justify-center gap-3 mb-12">
            {["All", 5, 4, 3].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as number | "All")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === f 
                    ? "bg-primary text-primary-foreground shadow-md" 
                    : "bg-card text-foreground hover:bg-secondary/50 border border-border"
                }`}
              >
                {f === "All" ? "All Reviews" : `${f} Stars`}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((review, i) => (
              <motion.div 
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-card p-6 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <img src={review.img} alt={review.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                    <div>
                      <h4 className="font-semibold">{review.name}</h4>
                      <span className="text-xs text-muted-foreground">{review.date}</span>
                    </div>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} fill={j < review.stars ? "currentColor" : "none"} />
                  ))}
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed">"{review.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
