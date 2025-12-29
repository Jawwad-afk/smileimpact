import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { SmileyFace } from './Doodles';
import { Check } from 'lucide-react';

const services = [
  {
    id: 'preventative',
    title: 'Dental Checkups & Cleaning',
    subtitle: 'Healthy Teeth, Honest Advice',
    description: 'Protect your smile with routine care. We provide thorough scaling and polishing using modern, pain-minimized techniques to keep your oral health at its peak.',
    features: ['Professional Scaling', 'Detailed Checkups', 'Gum Health Screening'],
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 'restorative',
    title: 'Fillings & Root Canal',
    subtitle: 'Gentle & Precise Treatment',
    description: 'We prioritize saving your natural teeth. Our restorative procedures focus on precision and patient comfort, using high-quality materials for long-lasting results.',
    features: ['Painless Root Canal', 'Composite Fillings', 'Emergency Pain Relief'],
    image: "https://images.unsplash.com/photo-1551601651-2a8dc040a633?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 'aesthetic',
    title: 'Smile Makeovers & Whitening',
    subtitle: 'Confident Smiles',
    description: 'Enhance your natural beauty with digital smile design. From laser whitening to custom veneers, we craft results that are both stunning and natural-looking.',
    features: ['Laser Teeth Whitening', 'Porcelain Veneers', 'Digital Smile Design'],
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80"
  },
];

const FeaturesSection: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.offsetTop;
      const scrollY = window.scrollY - sectionTop + 300; 
      
      const featureHeight = 450; 
      const index = Math.min(
        Math.max(Math.floor(scrollY / featureHeight), 0),
        services.length - 1
      );
      setActiveFeature(index);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative w-full bg-secondary-50 py-24 px-6 md:px-12 overflow-hidden">
      {/* Decorative Smiley - Absolute Right */}
      <div className="absolute top-1/2 right-[-100px] transform -translate-y-1/2 hidden xl:block pointer-events-none opacity-5">
        <SmileyFace className="w-[600px] h-[600px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-700 max-w-lg leading-tight">
            Simple Solutions for <br />
            Better Oral Health;
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl">
             We combine professional expertise with modern technology to ensure your treatment is gentle, effective, and necessary.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Side - Text Scroll */}
          <div className="w-full lg:w-5/12 flex flex-col gap-[450px] pb-[200px]">
            {services.map((service, index) => (
              <div key={service.id} className={`transition-all duration-500 ${activeFeature === index ? 'opacity-100 translate-x-0' : 'opacity-20 -translate-x-4'}`}>
                <span className="text-primary-600 font-bold text-sm uppercase tracking-wider mb-2 block">{service.subtitle}</span>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">{service.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                      <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Side - Sticky Visual */}
          <div className="hidden lg:block w-7/12 relative">
            <div className="sticky top-32 h-[550px] w-full rounded-2xl overflow-hidden shadow-2xl bg-white border-4 border-white">
               <div className="relative w-full h-full">
                   {services.map((service, index) => (
                       <motion.div
                           key={service.id}
                           initial={{ opacity: 0 }}
                           animate={{ opacity: activeFeature === index ? 1 : 0 }}
                           transition={{ duration: 0.6 }}
                           className="absolute inset-0 w-full h-full"
                       >
                           <img 
                                src={service.image} 
                                alt={service.title} 
                                className="w-full h-full object-cover"
                           />
                           {/* Gradient Overlay */}
                           <div className="absolute inset-0 bg-gradient-to-l from-primary-900/20 to-transparent" />
                       </motion.div>
                   ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;