import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, MessageSquare, Clock, Send, User, CheckCircle2, Navigation, ExternalLink } from 'lucide-react';

const CTASection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    branch: 'DHA Phase 5',
    treatment: 'Implants',
    concern: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const mapsLinks = {
    dha: "https://www.google.com/maps/place/Smile+Impact+(Dental+Clinic)/@24.7994245,67.0457583,15z/data=!4m16!1m9!3m8!1s0x3eb33d7be4c0bbe3:0x3887cca38d6de7f1!2sSmile+Impact+(Dental+Clinic)!8m2!3d24.7994876!4d67.0458185!9m1!1b1!16s%2Fg%2F11sg5qt45d!3m5!1s0x3eb33d7be4c0bbe3:0x3887cca38d6de7f1!8m2!3d24.7994876!4d67.0458185!16s%2Fg%2F11sg5qt45d?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
    central: "https://www.google.com/maps/place/Smile+Impact+Central+(Dental+Clinic)/@24.8808584,67.0824786,17.01z/data=!4m6!3m5!1s0x3eb33f9a5a361d27:0x86f5e695c2242272!8m2!3d24.8808457!4d67.0850723!16s%2Fg%2F11xzplbfn4?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(`New Appointment [${formData.branch}]: ${formData.name}`);
    const body = encodeURIComponent(
      `Patient Name: ${formData.name}\n` +
      `Contact Number: ${formData.phone}\n` +
      `Preferred Branch: ${formData.branch}\n` +
      `Interested Treatment: ${formData.treatment}\n\n` +
      `Concern:\n${formData.concern}`
    );

    const mailtoLink = `mailto:hello@smileimpact.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      window.location.href = mailtoLink;
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section className="w-full min-h-screen bg-white relative overflow-hidden flex flex-col">
      {/* Immersive Top Section */}
      <div className="w-full bg-darkgray pt-32 pb-64 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary-600 opacity-10 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <span className="text-primary-400 font-black uppercase tracking-[0.5em] text-xs block mb-6">Contact Smile Impact</span>
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-8 uppercase">
              2 PREMIUM <br/>
              <span className="text-primary-500">LOCATIONS.</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-medium">
              Visit our primary clinic in <strong className="text-white">DHA Phase 5</strong> or our newly opened <strong className="text-white">Central Branch</strong> in Mohammad Ali Society (MACHS).
            </p>
          </motion.div>
        </div>
      </div>

      {/* Unique Floating Card Layout */}
      <div className="max-w-7xl mx-auto w-full px-6 -mt-48 relative z-20 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Info Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* DHA BRANCH CARD */}
            <motion.div 
               whileHover={{ scale: 1.02, y: -5 }}
               className="bg-white p-8 rounded-[40px] shadow-2xl border-b-8 border-primary-600 group"
            >
               <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 transition-transform group-hover:rotate-12">
                     <MapPin size={24} />
                  </div>
                  <span className="text-[10px] font-black uppercase bg-primary-100 text-primary-700 px-3 py-1 rounded-full">DHA Branch</span>
               </div>
               <h3 className="text-xl font-black text-gray-900 mb-2 tracking-tighter">Smile Impact (DHA)</h3>
               <a 
                 href={mapsLinks.dha} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="block text-gray-500 text-xs leading-relaxed mb-6 font-medium hover:text-primary-600 transition-colors"
               >
                 Office 201, 2nd Floor, 8 Badar Commercial Street 2, DHA Phase 5, Karachi.
                 <span className="flex items-center gap-1 text-[9px] text-primary-500 font-black uppercase tracking-widest mt-2">
                    <ExternalLink size={10} /> Get Directions
                 </span>
               </a>
               <div className="flex flex-col gap-1 border-t border-gray-100 pt-4">
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Direct Call</p>
                  <a href="tel:+923342152045" className="text-xl font-black text-primary-600 hover:text-darkgray transition-colors">0334-2152045</a>
               </div>
            </motion.div>

            {/* CENTRAL BRANCH CARD */}
            <motion.div 
               whileHover={{ scale: 1.02, y: -5 }}
               className="bg-primary-600 p-8 rounded-[40px] shadow-2xl text-white group"
            >
               <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white transition-transform group-hover:rotate-12">
                     <Navigation size={24} />
                  </div>
                  <span className="text-[10px] font-black uppercase bg-white/20 text-white px-3 py-1 rounded-full">Central (MACHS)</span>
               </div>
               <h3 className="text-xl font-black mb-2 tracking-tighter">Smile Impact Central</h3>
               <a 
                 href={mapsLinks.central} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="block text-white/80 text-xs leading-relaxed mb-6 font-medium hover:text-white transition-colors"
               >
                 1/7/E Ghazi Salahuddin Road, near Maryam Mosque, Mohammad Ali Society (MACHS), Karachi.
                 <span className="flex items-center gap-1 text-[9px] text-primary-200 font-black uppercase tracking-widest mt-2">
                    <ExternalLink size={10} /> Get Directions
                 </span>
               </a>
               <div className="flex flex-col gap-1 border-t border-white/10 pt-4">
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary-200">Direct Call</p>
                  <a href="tel:+923490646564" className="text-xl font-black text-white hover:text-primary-100 transition-colors">0349-0646564</a>
               </div>
            </motion.div>

            {/* SHARED BUSINESS HOURS */}
            <motion.div 
               whileHover={{ scale: 1.02, y: -5 }}
               className="bg-beige-50 p-8 rounded-[40px] shadow-xl border border-beige-200"
            >
               <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-gray-900 mb-6">
                  <Clock size={24} />
               </div>
               <h3 className="text-lg font-black text-gray-900 mb-2 tracking-tighter">Business Hours</h3>
               <div className="space-y-1">
                 <div className="flex justify-between text-[11px] font-bold">
                    <span className="text-gray-400">MON - SAT</span>
                    <span className="text-primary-700 uppercase">11:00 AM - 8:00 PM</span>
                 </div>
                 <div className="flex justify-between text-[11px] font-bold">
                    <span className="text-gray-400">SUNDAY</span>
                    <span className="text-red-400 uppercase tracking-widest">Closed</span>
                 </div>
               </div>
            </motion.div>
          </div>

          {/* Right: The Booking Form */}
          <div className="lg:col-span-8">
            <div className="bg-white p-1 md:p-2 rounded-[50px] shadow-2xl border border-gray-100 h-full">
              <div className="bg-darkgray/5 rounded-t-[48px] rounded-b-[48px] p-8 md:p-16 h-full flex flex-col relative overflow-hidden">
                 
                 <AnimatePresence>
                   {isSubmitted && (
                     <motion.div 
                       initial={{ opacity: 0, scale: 0.9 }}
                       animate={{ opacity: 1, scale: 1 }}
                       exit={{ opacity: 0, scale: 0.9 }}
                       className="absolute inset-0 z-50 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center text-center p-12"
                     >
                        <div className="w-20 h-20 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-6">
                           <CheckCircle2 size={40} />
                        </div>
                        <h3 className="text-3xl font-black text-gray-900 mb-4">Request Sent!</h3>
                        <p className="text-gray-500 max-w-sm mb-8 font-medium">Thank you for choosing Smile Impact. We will contact you shortly to confirm your slot.</p>
                        <button onClick={() => setIsSubmitted(false)} className="px-8 py-4 bg-darkgray text-white rounded-2xl font-black uppercase tracking-widest text-xs">New Appointment</button>
                     </motion.div>
                   )}
                 </AnimatePresence>

                 <div className="mb-10">
                    <h3 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tighter leading-none mb-3">Book Slot.</h3>
                    <p className="text-gray-500 font-bold uppercase text-[10px] tracking-[0.3em]">Direct booking at your convenience</p>
                 </div>

                 <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
                    <div className="space-y-4">
                        <div className="relative group">
                           <User className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                           <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="w-full pl-14 pr-6 py-4 bg-white rounded-2xl text-sm font-bold text-gray-900 border-none focus:ring-4 focus:ring-primary-100 transition-all outline-none" />
                        </div>
                        <div className="relative group">
                           <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                           <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Mobile Number" className="w-full pl-14 pr-6 py-4 bg-white rounded-2xl text-sm font-bold text-gray-900 border-none focus:ring-4 focus:ring-primary-100 transition-all outline-none" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <select name="branch" value={formData.branch} onChange={handleChange} className="w-full px-6 py-4 bg-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-gray-900 border-none focus:ring-4 focus:ring-primary-100 outline-none appearance-none">
                               <option value="DHA Phase 5">DHA Phase 5</option>
                               <option value="MACHS Central">MACHS Central</option>
                            </select>
                            <select name="treatment" value={formData.treatment} onChange={handleChange} className="w-full px-6 py-4 bg-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-gray-900 border-none focus:ring-4 focus:ring-primary-100 outline-none appearance-none">
                               <option value="Implants">Dental Implants</option>
                               <option value="Whitening">Teeth Whitening</option>
                               <option value="Checkup">General Checkup</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col h-full">
                        <div className="relative group flex-grow">
                           <MessageSquare className="absolute left-6 top-6 text-gray-300" size={18} />
                           <textarea required name="concern" value={formData.concern} onChange={handleChange} placeholder="How can we help you today?" className="w-full pl-14 pr-6 py-6 bg-white rounded-[32px] text-sm font-bold text-gray-900 border-none focus:ring-4 focus:ring-primary-100 transition-all outline-none resize-none h-full min-h-[120px]"></textarea>
                        </div>
                    </div>

                    <div className="md:col-span-2 mt-2">
                        <button type="submit" disabled={isSubmitting} className="w-full py-5 bg-primary-600 text-white rounded-[28px] font-black uppercase tracking-[0.3em] text-[10px] hover:bg-darkgray transition-all shadow-xl flex items-center justify-center gap-3">
                           {isSubmitting ? 'Sending Request...' : 'Request Appointment'} <Send size={14} />
                        </button>
                    </div>
                 </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-10 text-center border-t border-gray-100 mt-auto">
          <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.4em]">SMILE IMPACT KARACHI • EXPERT CARE • DHA & MACHS</p>
      </div>
    </section>
  );
};

export default CTASection;