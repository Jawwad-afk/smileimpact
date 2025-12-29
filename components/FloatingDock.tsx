import React from 'react';
import { motion } from 'framer-motion';
import { Home, Info, Stethoscope, Image, Phone } from 'lucide-react';

interface FloatingDockProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const FloatingDock: React.FC<FloatingDockProps> = ({ activePage, onNavigate }) => {
  const navItems = [
    { id: 'home', icon: <Home size={20} />, label: 'Home' },
    { id: 'about', icon: <Info size={20} />, label: 'About' },
    { id: 'services', icon: <Stethoscope size={20} />, label: 'Services' },
    { id: 'gallery', icon: <Image size={20} />, label: 'Gallery' },
    { id: 'contact', icon: <Phone size={20} />, label: 'Contact' },
  ];

  const handleNav = (id: string) => {
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden block">
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
        className="flex items-center gap-4 bg-primary-700/90 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full shadow-2xl"
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNav(item.id)}
            className={`transition-all duration-300 ${activePage === item.id ? 'text-white scale-125' : 'text-white/50 hover:text-white'}`}
          >
            {item.icon}
          </button>
        ))}
      </motion.nav>
    </div>
  );
};

export default FloatingDock;