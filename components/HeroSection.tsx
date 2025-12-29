import React from 'react';
import { motion, useMotionValue, useSpring, PanInfo } from 'framer-motion';
import { ArrowRight, Move3d, Phone, Star, ShieldCheck, Microscope, HeartPulse, MapPin } from 'lucide-react';
import TestimonialsSection from './TestimonialsSection';

const Cube = () => {
  const rotateX = useMotionValue(-10);
  const rotateY = useMotionValue(-20);
  const smoothRotateX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  const handleDrag = (_: any, info: PanInfo) => {
    rotateY.set(rotateY.get() + info.delta.x * 0.4); 
    rotateX.set(rotateX.get() - info.delta.y * 0.4); 
  };

  const size = 320;
  const halfSize = size / 2;

  const faces = [
    {
      id: 'front',
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
      title: "Dr. Zeeshan Faiz",
      subtitle: "Smile Impact Karachi",
      desc: "Lead Dentist providing honest, high-quality dental care in DHA & MACHS branches.",
      transform: `translateZ(${halfSize}px)`
    },
    {
      id: 'back',
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
      title: "2 Locations",
      subtitle: "DHA & MACHS",
      desc: "Now serving you at Mohammad Ali Society and DHA Phase 5 with modern equipment.",
      transform: `rotateY(180deg) translateZ(${halfSize}px)`
    },
    {
      id: 'right',
      image: "https://images.unsplash.com/photo-1551601651-2a8dc040a633?auto=format&fit=crop&w=800&q=80",
      title: "Smile Impact Central",
      subtitle: "MACHS Branch",
      desc: "Our new state-of-the-art facility near Maryam Mosque is now open for appointments.",
      transform: `rotateY(90deg) translateZ(${halfSize}px)`
    },
    {
      id: 'left',
      image: "https://images.unsplash.com/photo-1629909615184-74bd02266c7e?auto=format&fit=crop&w=800&q=80",
      title: "Reliable Care",
      subtitle: "Since 2009",
      desc: "Trusted dentist in Karachi providing ethical advice and transparent dental consultations.",
      transform: `rotateY(-90deg) translateZ(${halfSize}px)`
    },
    {
      id: 'top',
      type: 'brand',
      title: "Smile Impact",
      transform: `rotateX(90deg) translateZ(${halfSize}px)`
    },
    {
      id: 'bottom',
      type: 'contact',
      title: "Direct Booking",
      subtitle: "+92 334 2152045",
      transform: `rotateX(-90deg) translateZ(${halfSize}px)`
    }
  ];

  return (
    <div className="relative group perspective-1000" style={{ width: size, height: size }}>
       <motion.div 
         initial={{ opacity: 0, y: 10 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ delay: 1 }}
         className="absolute -top-16 left-1/2 -translate-x-1/2 flex items-center gap-2 text-primary-600 text-sm pointer-events-none z-10"
       >
          <Move3d size={16} />
          <span className="uppercase tracking-widest text-[10px] font-bold">Interactive 3D Preview</span>
       </motion.div>

       <motion.div
        className="w-full h-full transform-style-3d cursor-grab active:cursor-grabbing"
        style={{ rotateX: smoothRotateX, rotateY: smoothRotateY }}
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0}
        dragMomentum={false}
        onDrag={handleDrag}
        whileTap={{ cursor: 'grabbing' }}
      >
        {faces.map((face, i) => (
           <div 
             key={i}
             className={`absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-xl bg-white border border-gray-100`}
             style={{ transform: face.transform }}
           >
              {face.type === 'brand' ? (
                <div className="w-full h-full bg-white flex flex-col items-center justify-center relative overflow-hidden">
                    <img 
                      src="https://smileimpact.pk/assets/SmileImpact-logo.png" 
                      alt="Smile Impact Karachi Logo" 
                      className="w-60 h-auto relative z-10"
                    />
                </div>
              ) : face.type === 'contact' ? (
                <a 
                  href={`tel:${face.subtitle.replace(/\s+/g, '')}`}
                  onPointerDown={(e) => e.stopPropagation()}
                  className="w-full h-full bg-white flex flex-col items-center justify-center relative overflow-hidden text-center p-4 group/contactlink hover:bg-primary-50 transition-colors cursor-pointer"
                >
                     <div className="absolute inset-0 bg-primary-50 transition-opacity group-hover/contactlink:opacity-20" />
                     <Phone size={32} className="text-primary-600 mb-3 relative z-10 transition-transform group-hover/contactlink:scale-110" />
                     <h3 className="text-primary-800 font-bold text-lg relative z-10">Direct Booking</h3>
                     <p className="text-gray-500 text-sm mt-1 relative z-10 font-bold group-hover/contactlink:text-primary-700 transition-colors">{face.subtitle}</p>
                     <span className="mt-2 text-[10px] font-black text-primary-500 uppercase tracking-widest relative z-10 opacity-0 group-hover/contactlink:opacity-100 transition-opacity">Click to Call</span>
                </a>
              ) : (
                <div className="relative w-full h-full group/face">
                  <img 
                    src={face.image} 
                    alt={`${face.title} at Smile Impact Dental Clinic`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/face:scale-110" 
                    draggable={false} 
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/20 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-6 translate-y-2 group-hover/face:translate-y-0 transition-transform duration-300">
                     <p className="text-white/80 text-[10px] font-bold uppercase tracking-widest mb-1">{face.subtitle}</p>
                     <h3 className="text-white font-bold text-2xl mb-2">{face.title}</h3>
                     <div className="h-0 group-hover/face:h-auto overflow-hidden transition-all duration-300">
                       <p className="text-white/90 text-xs leading-relaxed opacity-0 group-hover/face:opacity-100 transition-opacity duration-500 delay-100">
                         {face.desc}
                       </p>
                     </div>
                  </div>
                </div>
              )}
           </div>
        ))}
      </motion.div>
      <div className="absolute top-full left-1/2 -translate-x-1/2 w-[80%] h-8 bg-black/10 blur-xl rounded-full transform scale-y-50 translate-y-8" />
    </div>
  )
}

interface HeroSectionProps {
  onNavigate: (page: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-white">
      {/* 1. Main Hero Landing */}
      <section className="relative w-full min-h-screen bg-gradient-to-b from-beige-50 to-white overflow-hidden flex flex-col justify-center px-6 md:px-12 pt-10 pb-20">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary-100/50 rounded-full blur-[100px]" />
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left flex flex-col items-start order-2 lg:order-1"
          >
              <div className="flex items-center gap-3 mb-6">
                <div className="px-4 py-2 bg-primary-700 text-white shadow-xl rounded-full flex items-center gap-2">
                   <Star size={12} fill="currentColor" className="text-yellow-400" />
                   <span className="text-[10px] font-black uppercase tracking-[0.2em]">Best Dental Care In Karachi</span>
                </div>
                <div className="px-4 py-2 bg-beige-100 border border-beige-200 text-primary-700 shadow-sm rounded-full flex items-center gap-2">
                   <MapPin size={12} />
                   <span className="text-[10px] font-black uppercase tracking-[0.2em]">DHA & MACHS Branches</span>
                </div>
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-gray-900 leading-[0.9] mb-8 tracking-tighter uppercase">
                  SMILE IMPACT. <br/>
                  <span className="text-primary-600 text-4xl md:text-6xl">NOW IN 2 LOCATIONS.</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg mb-10 font-medium leading-relaxed">
                  <strong className="text-primary-700">Smile Impact Karachi</strong> led by Dr. Zeeshan Faiz is now open in <span className="text-gray-900 font-bold underline decoration-primary-300">Mohammad Ali Society (MACHS)</span> and DHA Phase 5.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                   <button onClick={() => onNavigate('contact')} className="px-10 py-5 bg-darkgray text-white rounded-[20px] font-black text-sm uppercase tracking-widest hover:bg-primary-600 transition-all shadow-2xl">Book Appointment</button>
                   <button onClick={() => onNavigate('services')} className="px-10 py-5 bg-white border-4 border-beige-100 text-gray-800 rounded-[20px] font-black text-sm uppercase tracking-widest hover:border-primary-100 transition-all">Our Services</button>
              </div>
          </motion.div>
          <div className="flex justify-center items-center py-10 lg:py-0 perspective-1000 h-[400px] order-1 lg:order-2">
              <Cube />
          </div>
        </div>
      </section>

      {/* 2. Descriptive Hub Sections */}
      <div className="space-y-32 py-32 px-6 md:px-12">
        
        {/* Trust Teaser */}
        <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
                <div className="absolute inset-0 bg-primary-600/10 rounded-[40px] rotate-3 group-hover:rotate-0 transition-transform" />
                <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80" alt="Dr. Zeeshan Faiz Dentist in Karachi" className="relative rounded-[40px] shadow-2xl z-10" />
            </div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="flex items-center gap-3 text-primary-600 mb-6">
                    <ShieldCheck size={32} />
                    <span className="font-black uppercase tracking-[0.3em] text-sm">Professional Integrity</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 tracking-tighter">Trusted Dental Clinic Karachi</h2>
                <p className="text-lg text-gray-500 leading-relaxed mb-8">
                    We understand that visiting a <strong>dentist in Karachi</strong> can feel stressful. That’s why every patient at <strong>Smile Impact</strong> is treated with respect and transparency. No unnecessary procedures—just the care you need.
                </p>
                <button 
                  onClick={() => onNavigate('about')} 
                  className="group flex items-center gap-4 text-primary-600 font-black uppercase tracking-[0.2em] text-xs"
                >
                    Meet Dr. Zeeshan Faiz <div className="p-3 bg-primary-50 rounded-full group-hover:translate-x-3 transition-transform"><ArrowRight size={18} /></div>
                </button>
            </motion.div>
        </section>

        {/* Services Teaser */}
        <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-2 lg:order-1">
                <div className="flex items-center gap-3 text-primary-600 mb-6">
                    <HeartPulse size={32} />
                    <span className="font-black uppercase tracking-[0.3em] text-sm">Advanced Technology</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 tracking-tighter">Modern Dental Tech in Karachi</h2>
                <p className="text-lg text-gray-500 leading-relaxed mb-8">
                    From digital checkups to laser <strong>teeth whitening in Karachi</strong> and <strong>smile design</strong>, we use premium technology to make treatments painless and efficient. Your comfort is our priority at our DHA & MACHS clinics.
                </p>
                <button 
                  onClick={() => onNavigate('services')} 
                  className="group flex items-center gap-4 text-primary-600 font-black uppercase tracking-[0.2em] text-xs"
                >
                    View Dental Implants <div className="p-3 bg-primary-50 rounded-full group-hover:translate-x-3 transition-transform"><ArrowRight size={18} /></div>
                </button>
            </motion.div>
            <div className="order-1 lg:order-2 relative group">
                <div className="absolute inset-0 bg-darkgray/10 rounded-[40px] -rotate-3 group-hover:rotate-0 transition-transform" />
                <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80" alt="Advanced Dentistry at Smile Impact Karachi" className="relative rounded-[40px] shadow-2xl z-10" />
            </div>
        </section>

        {/* Studio Teaser */}
        <section className="max-w-7xl mx-auto bg-beige-50 rounded-[60px] p-8 md:p-20 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-10 opacity-10">
                <Microscope size={200} />
            </div>
            <div className="text-center mb-16 relative z-10">
                <span className="font-black uppercase tracking-[0.3em] text-sm text-primary-600">The Studio</span>
                <h2 className="text-4xl md:text-6xl font-black text-gray-900 mt-4 tracking-tighter">A Fear-Free Environment</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
                <img src="https://images.unsplash.com/photo-1629909615184-74bd02266c7e?auto=format&fit=crop&w=400&q=80" alt="Smile Impact Hygiene Standard" className="rounded-3xl h-64 object-cover hover:scale-105 transition-transform" />
                <img src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=400&q=80" alt="Dental Equipment Karachi" className="rounded-3xl h-64 object-cover mt-8 hover:scale-105 transition-transform" />
                <img src="https://images.unsplash.com/photo-1551601651-2a8dc040a633?auto=format&fit=crop&w=400&q=80" alt="Patient Comfort at Smile Impact" className="rounded-3xl h-64 object-cover hover:scale-105 transition-transform" />
                <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=400&q=80" alt="Premium Clinic DHA Karachi" className="rounded-3xl h-64 object-cover mt-8 hover:scale-105 transition-transform" />
            </div>
            <div className="mt-16 text-center relative z-10">
                <button 
                  onClick={() => onNavigate('gallery')} 
                  className="px-12 py-5 bg-primary-600 text-white rounded-full font-black uppercase tracking-widest text-xs shadow-2xl"
                >
                    Visit The Clinic
                </button>
            </div>
        </section>

        {/* Reviews Section - INTEGRATED FROM GOOGLE MAPS */}
        <TestimonialsSection />

        {/* Contact Teaser */}
        <section className="max-w-5xl mx-auto py-20 text-center flex flex-col items-center">
            <motion.div 
               whileHover={{ scale: 1.02 }}
               className="bg-darkgray p-1 rounded-[40px] w-full"
            >
                <div className="bg-white rounded-[38px] p-12 md:p-20 border-8 border-beige-50">
                    <span className="text-primary-600 font-black uppercase tracking-[0.5em] text-xs block mb-8">Looking for a dentist near me?</span>
                    <h2 className="text-4xl md:text-7xl font-black text-gray-900 mb-10 tracking-tighter leading-none">Best Dentist in Karachi.</h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12 font-medium">
                        At <strong className="text-primary-700">Smile Impact Dental Clinic</strong>, we don’t rush patients—we listen. Located conveniently in DHA Phase 5 and our new Central Branch in <span className="text-gray-900 font-bold underline decoration-primary-200">Mohammad Ali Society</span>.
                    </p>
                    <button 
                      onClick={() => onNavigate('contact')} 
                      className="group flex items-center gap-6 bg-primary-600 text-white px-10 py-6 rounded-[24px] font-black uppercase tracking-widest text-sm hover:bg-darkgray transition-all shadow-2xl"
                    >
                        Book Your Appointment <ArrowRight className="group-hover:translate-x-4 transition-transform" />
                    </button>
                </div>
            </motion.div>
        </section>
      </div>

      <div className="w-full bg-darkgray py-12 text-center">
          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.4em]">Smile Impact Karachi • Modern Dental Excellence • Lead Dentist Dr. Zeeshan Faiz</p>
      </div>
    </div>
  );
};

export default HeroSection;