import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { url: "https://images.unsplash.com/photo-1629909615184-74bd02266c7e?auto=format&fit=crop&w=800&q=80", title: "Modern Treatment Room", type: "Interior" },
  { url: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80", title: "Precision Instruments", type: "Equipment" },
  { url: "https://images.unsplash.com/photo-1551601651-2a8dc040a633?auto=format&fit=crop&w=800&q=80", title: "Patient Consultation", type: "Case Study" },
  { url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80", title: "Aesthetic Results", type: "Smile Design" },
  { url: "https://smileimpact.pk/assets/s2.JPG", title: "Dr. Zeeshan in Clinic", type: "Team" },
  { url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80", title: "Comfortable Lounge", type: "Interior" },
];

const GallerySection: React.FC = () => {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h4 className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-4">Our Gallery</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-700 leading-tight">
            Take a Look Around <br/>Our Premium Facility
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[350px] rounded-3xl overflow-hidden shadow-lg"
            >
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-primary-400 text-xs font-bold uppercase tracking-widest mb-1">{item.type}</span>
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 bg-beige-100 p-8 rounded-3xl text-center">
            <p className="text-primary-700 font-medium italic text-lg">
                "Cleanliness and sterilization are our top priorities. We follow international protocols."
            </p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;