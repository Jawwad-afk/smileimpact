import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Stethoscope, 
  Microscope, 
  CheckCircle2, 
  HeartPulse, 
  Users, 
  Clock 
} from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { value: "15+", label: "Years Experience", icon: <Award className="w-6 h-6 mb-2" /> },
  { value: "Honest", label: "Consultation", icon: <ShieldCheck className="w-6 h-6 mb-2" /> },
  { value: "Modern", label: "Equipment", icon: <Microscope className="w-6 h-6 mb-2" /> },
  { value: "5k+", label: "Happy Patients", icon: <Users className="w-6 h-6 mb-2" /> },
];

const MissionSection: React.FC = () => {
  return (
    <section id="about" className="w-full bg-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION 1: DR. ZEESHAN PROFILE (Top) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
             {/* LEFT: DETAILS */}
             <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
            >
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-[2px] w-8 bg-primary-600"></div>
                  <span className="text-primary-600 font-black uppercase tracking-[0.3em] text-xs">Founder & Lead Dentist</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-black leading-[0.9] text-gray-900 mb-8 tracking-tighter">
                   DR. ZEESHAN <br/>
                   <span className="text-primary-600">FAIZ.</span>
                </h2>

                <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                     <p>
                        Dr. Zeeshan Faiz, founder of <span className="text-gray-900 font-bold">Smile Impact Dental Clinic</span>, is a professionally trained dentist offering gentle, modern, and trustworthy dental care focused on patient comfort and long-term oral health.
                     </p>
                     <p>
                        His academic background, combined with continuous learning, allows him to deliver treatments that meet today’s dental standards while prioritizing safety. Patients trust Dr. Zeeshan not only for his clinical skills but for his <span className="text-primary-700">ethical approach</span> and genuine care.
                     </p>
                </div>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-beige-50 border border-beige-100">
                        <HeartPulse className="text-primary-600 mt-1 shrink-0" size={20} />
                        <div>
                            <p className="font-black text-gray-900 text-sm uppercase tracking-wider">Trusted Dentist</p>
                            <p className="text-xs text-gray-500 mt-1">Highly recommended for complex procedures.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-primary-50 border border-primary-100">
                        <Stethoscope className="text-primary-600 mt-1 shrink-0" size={20} />
                        <div>
                            <p className="font-black text-gray-900 text-sm uppercase tracking-wider">Patient Focused</p>
                            <p className="text-xs text-gray-500 mt-1">Calm, friendly, and clear communication.</p>
                        </div>
                    </div>
                </div>
            </motion.div>
            
            {/* RIGHT: IMAGE */}
            <motion.div
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="order-1 lg:order-2 relative"
            >
                 <div className="absolute -inset-4 bg-primary-100/50 rounded-[40px] -rotate-3 blur-2xl"></div>
                 <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white bg-gray-100 group">
                    <img 
                        src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80" 
                        alt="Dr. Zeeshan Faiz" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl">
                        <p className="text-[10px] font-black uppercase tracking-widest text-primary-600 mb-1">Clinic Hub</p>
                        <p className="text-gray-900 font-bold leading-tight">Smile Impact (Dental Clinic)</p>
                    </div>
                 </div>
            </motion.div>
        </div>

        {/* SECTION 2: CLINIC MISSION & STATS (Following) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start mb-24">
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-beige-100 p-8 md:p-12 rounded-[40px]"
            >
                <h4 className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-4">About Smile Impact</h4>
                <h2 className="text-3xl md:text-4xl font-black leading-tight text-primary-700 mb-6 tracking-tighter">
                   Dentistry is more than just treatment — it’s about care and trust.
                </h2>
                <div className="space-y-6 text-base md:text-lg text-gray-600 leading-relaxed font-medium">
                     <p>
                        Smile Impact was created with a clear purpose: to provide honest, high-quality dental care in a calm and comfortable environment. We believe that visiting a dentist shouldn't be a source of anxiety.
                     </p>
                     <div className="bg-white/50 p-6 rounded-3xl border-l-4 border-primary-500">
                        <p className="font-black text-primary-800 mb-3 text-sm uppercase tracking-widest">Our Philosophy:</p>
                        <ul className="space-y-3 text-sm font-bold text-gray-700">
                            <li className="flex gap-3 items-center"><CheckCircle2 size={16} className="text-primary-600" /> Every smile is unique</li>
                            <li className="flex gap-3 items-center"><CheckCircle2 size={16} className="text-primary-600" /> Every patient deserves transparency</li>
                            <li className="flex gap-3 items-center"><CheckCircle2 size={16} className="text-primary-600" /> Every treatment should be necessary</li>
                        </ul>
                     </div>
                </div>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-6 h-full">
              {stats.map((stat, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center justify-center text-center p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group"
                >
                  <div className="p-4 bg-primary-50 rounded-2xl mb-4 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                      {stat.icon}
                  </div>
                  <div className="text-3xl font-black text-gray-900 mb-1 tracking-tighter">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-gray-400 font-black uppercase tracking-widest">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
        </div>

        {/* BOTTOM PHILOSOPHY BAR */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full py-12 px-8 bg-darkgray rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-8"
        >
            <div className="text-center md:text-left">
                <p className="text-primary-400 font-black uppercase tracking-[0.4em] text-[10px] mb-2">Modern Dentistry</p>
                <h3 className="text-white text-2xl md:text-3xl font-bold tracking-tight leading-none">"Reliable results, ethical approach."</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
               {['Expert Advice', 'Honest Pricing', 'Modern Tech', 'Gentle Care'].map((tag, i) => (
                 <div key={i} className="px-6 py-3 bg-white/5 border border-white/10 rounded-full flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-primary-500" />
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest">{tag}</span>
                 </div>
               ))}
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;