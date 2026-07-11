import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const categories = ["All", "Hair", "Bridal", "Spa", "Facial", "Nails", "Interior"];

const images = [
  { id: 1, category: "Interior", url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80" },
  { id: 2, category: "Hair", url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80" },
  { id: 3, category: "Bridal", url: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80" },
  { id: 4, category: "Nails", url: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80" },
  { id: 5, category: "Facial", url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80" },
  { id: 6, category: "Spa", url: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80" },
  { id: 7, category: "Hair", url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80" },
  { id: 8, category: "Interior", url: "https://images.unsplash.com/photo-1516975080661-46bfa2c281c7?w=800&q=80" },
  { id: 9, category: "Bridal", url: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80" },
  { id: 10, category: "Spa", url: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80" },
  { id: 11, category: "Hair", url: "https://images.unsplash.com/photo-1599305090598-fe179d501227?w=800&q=80" },
  { id: 12, category: "Nails", url: "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?w=800&q=80" },
  { id: 13, category: "Facial", url: "https://images.unsplash.com/photo-1512496015851-a1fbaf69cead?w=800&q=80" },
  { id: 14, category: "Bridal", url: "https://images.unsplash.com/photo-1515511856280-7b23f68d2996?w=800&q=80" },
  { id: 15, category: "Interior", url: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=800&q=80" },
];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const filteredImages = filter === "All" 
    ? images 
    : images.filter(img => img.category === filter);

  return (
    <div className="w-full pt-20">
      <section className="bg-secondary/30 py-20 text-center">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4"
          >
            Gallery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8"
          >
            A glimpse into the luxurious experience that awaits you at Bloom Salon.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat 
                    ? "bg-primary text-primary-foreground shadow-md" 
                    : "bg-background text-foreground hover:bg-secondary/50 border border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background min-h-[50vh]">
        <div className="container mx-auto px-4">
          <motion.div 
            layout
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
          >
            <AnimatePresence>
              {filteredImages.map((img) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-xl break-inside-avoid cursor-pointer group shadow-sm hover:shadow-xl"
                  onClick={() => setSelectedImg(img.url)}
                >
                  <img 
                    src={img.url} 
                    alt={img.category} 
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">View</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImg} 
              alt="Enlarged gallery view" 
              className="max-w-full max-h-[90vh] object-contain rounded-md shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
