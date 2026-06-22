import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center py-6 px-6 ${
        scrolled ? 'py-4' : 'py-8'
      }`}
    >
      <nav className={`flex items-center gap-8 px-6 py-3 rounded-full transition-all duration-500 ${
        scrolled ? 'glass-panel bg-white/5 backdrop-blur-xl' : 'bg-transparent'
      }`}>
        <a href="#work" className="text-sm font-medium tracking-wide text-white/70 hover:text-white transition-colors">Work</a>
        <a href="#about" className="text-sm font-medium tracking-wide text-white/70 hover:text-white transition-colors">About</a>
        <a href="#tech" className="text-sm font-medium tracking-wide text-white/70 hover:text-white transition-colors">Tech</a>
        <a href="#contact" className="text-sm font-medium tracking-wide text-white/70 hover:text-white transition-colors">Contact</a>
      </nav>
    </motion.header>
  );
}
