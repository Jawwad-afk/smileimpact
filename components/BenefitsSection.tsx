import React from 'react';
import { motion } from 'framer-motion';

const tags = [
  { label: 'Painless', color: 'bg-primary-500 text-white', rotation: -5 },
  { label: 'Hygienic', color: 'bg-primary-100 text-primary-800', rotation: 4 },
  { label: 'Professional', color: 'bg-beige-200 text-gray-800', rotation: -2 },
  { label: 'Affordable', color: 'bg-gray-800 text-white', rotation: 6 },
  { label: 'Expert', color: 'bg-white text-primary-600 border border-primary-100', rotation: -3 },
  { label: 'Modern', color: 'bg-primary-600 text-white', rotation: 5 },
];

const BenefitsSection: React.FC = () => {
  return (
    <section id="benefits" className="w-full py-32 bg-white flex flex-col items-center justify-center overflow-hidden relative">
      <div className="max-w-4xl text-center mb-16 px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-gray-900">
          Experience dentistry <br />
          <span className="text-primary-600">that cares about you</span>
        </h2>
      </div>

      <div className="relative w-full max-w-5xl h-[300px] flex items-center justify-center">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 p-4">
            {tags.map((tag, index) => (
                <motion.div
                    key={tag.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                        type: "spring", 
                        stiffness: 100, 
                        delay: index * 0.1 
                    }}
                    whileHover={{ 
                        scale: 1.1, 
                        rotate: 0,
                        zIndex: 10,
                        transition: { duration: 0.2 }
                    }}
                    className={`
                        relative px-8 py-4 md:px-10 md:py-5 rounded-full 
                        ${tag.color} 
                        font-bold text-xl md:text-2xl shadow-lg cursor-default
                    `}
                    style={{ 
                        rotate: tag.rotation,
                    }}
                >
                    {tag.label}
                </motion.div>
            ))}
        </div>
        
        {/* Background glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-50 rounded-full blur-[100px] pointer-events-none" />
      </div>
    </section>
  );
};

export default BenefitsSection;