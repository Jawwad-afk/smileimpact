import React, { useState } from 'react';
import { Phone, Menu, X, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activePage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNav = (id: string) => {
    onNavigate(id);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="bg-[#545454] text-white text-center py-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] z-50">
        Up to 35% Off On All Dental Treatments
      </div>
      
      <header className="sticky top-0 left-0 right-0 z-40 w-full px-6 py-4 flex items-center justify-between bg-white/80 backdrop-blur-md">
        {/* Logo Section */}
        <div 
          className="flex items-center gap-4 cursor-pointer group" 
          onClick={() => handleNav('home')}
        >
          <div className="relative overflow-visible">
             <img 
                src="https://smileimpact.pk/assets/SmileImpact-logo.png" 
                alt="Smile Impact" 
                // className="h-16 md:h-24 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
             />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-xl font-black text-primary-700 tracking-tighter leading-none">SMILE IMPACT</span>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest"></span>
          </div>
        </div>

        {/* Desktop & Tablet Pill Navbar */}
        <nav className="hidden md:flex items-center">
          <div className="bg-darkgray p-1.5 rounded-[24px] shadow-2xl">
            <div className="bg-white/10 backdrop-blur-md px-2 py-1.5 rounded-[20px] flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`
                    px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300
                    ${activePage === item.id 
                      ? 'bg-white text-darkgray shadow-lg scale-105' 
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                    }
                  `}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => handleNav('contact')}
                className="ml-2 px-6 py-2 rounded-full bg-primary-600 text-white text-xs font-black uppercase tracking-widest hover:bg-primary-500 transition-colors shadow-lg flex items-center gap-2"
              >
                <MapPin size={14} />
                Locations
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            className="p-3 bg-primary-600 text-white rounded-2xl shadow-lg shadow-primary-600/30"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-darkgray/80 backdrop-blur-md z-[60]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-4 right-4 bottom-4 w-[85%] max-w-sm bg-white z-[70] shadow-2xl rounded-[40px] p-10 flex flex-col"
            >
              <div className="flex justify-between items-center mb-16">
                <img src="https://smileimpact.pk/assets/SmileImpact-logo.png" className="h-20 w-auto object-contain" alt="Logo" />
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-3 bg-beige-100 text-gray-400 hover:text-primary-600 rounded-2xl transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNav(item.id)}
                    className={`
                      text-3xl font-black text-left py-4 px-6 rounded-3xl transition-all
                      ${activePage === item.id ? 'bg-primary-600 text-white shadow-xl translate-x-2' : 'text-gray-900 hover:bg-beige-50'}
                    `}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="mt-auto bg-darkgray p-8 rounded-[32px] text-white">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-50 mb-2">Karachi Locations</p>
                <a href="tel:+923342152045" className="text-xl font-bold block mb-4">DHA: 0334-2152045</a>
                <a href="tel:+923490646564" className="text-xl font-bold block mb-6">MACHS: 0349-0646564</a>
                <button 
                  onClick={() => handleNav('contact')}
                  className="w-full py-4 bg-primary-600 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl"
                >
                    Get Directions
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;