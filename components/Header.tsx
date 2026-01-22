import React from 'react';
import { Phone, MapPin } from 'lucide-react';

interface HeaderProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activePage, onNavigate }) => {
  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNav = (id: string) => {
    onNavigate(id);
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
                className="h-20 md:h-24 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
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
      </header>
    </>
  );
};

export default Header;