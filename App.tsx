import React, { useState } from 'react';
import Header from './components/Header';
import FloatingDock from './components/FloatingDock';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import FeaturesSection from './components/FeaturesSection';
import GallerySection from './components/GallerySection';
import CTASection from './components/CTASection';
import IntroLoader from './components/IntroLoader';
import WhatsAppButton from './components/WhatsAppButton';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HeroSection onNavigate={setCurrentPage} />;
      case 'about': return <MissionSection />;
      case 'services': return <FeaturesSection />;
      case 'gallery': return <GallerySection />;
      case 'contact': return <CTASection />;
      default: return <HeroSection onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen w-full relative bg-white flex flex-col">
      <AnimatePresence mode='wait'>
        {loading && <IntroLoader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Header activePage={currentPage} onNavigate={setCurrentPage} />
          
          <main className="flex-grow w-full relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full"
              >
                {renderPage()}
              </motion.div>
            </AnimatePresence>
          </main>

          <WhatsAppButton />
          <FloatingDock activePage={currentPage} onNavigate={setCurrentPage} />
        </>
      )}
    </div>
  );
};

export default App;