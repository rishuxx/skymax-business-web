import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SkymaxLogo from './SkymaxLogo';

interface SplashLoaderProps {
  onComplete?: () => void;
  duration?: number; // duration in milliseconds
}

export default function SplashLoader({ onComplete, duration = 2200 }: SplashLoaderProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onComplete) {
        setTimeout(onComplete, 400); // Allow exit animation to finish
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="splash-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center p-6 selection:bg-[#3D9FFF]/20"
        >
          {/* logo centered, small and professional */}
          <div className="w-full max-w-[160px] sm:max-w-[200px] flex flex-col items-center justify-center">
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <SkymaxLogo mode="currentColor" wedgeColor="#0B2E59" className="w-full h-auto text-[#0B2E59]" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
