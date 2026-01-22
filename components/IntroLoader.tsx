import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface IntroLoaderProps {
  onComplete: () => void;
}

const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Sequence timing
    const sequence = async () => {
      await new Promise(r => setTimeout(r, 1000)); // Initial pause
      setStep(1); // 360
      await new Promise(r => setTimeout(r, 1000));
      setStep(2); // 180
      await new Promise(r => setTimeout(r, 1000));
      setStep(3); // 90
      await new Promise(r => setTimeout(r, 1000));
      setStep(4); // Exit
      await new Promise(r => setTimeout(r, 500));
      onComplete();
    };
    sequence();
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        animate={
          step === 1 ? { rotate: 360 } :
          step === 2 ? { rotate: 180 } :
          step === 3 ? { rotate: 90 } :
          step === 4 ? { scale: 5, opacity: 0 } :
          { rotate: 0 }
        }
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="relative w-96 h-96 flex items-center justify-center"
      >
        <img 
            src="https://smileimpact.pk/assets/SmileImpact-logo.png" 
            alt="Smile Impact Logo" 
            className="w-full h-full object-contain"
        />
      </motion.div>
    </motion.div>
  );
};

export default IntroLoader;