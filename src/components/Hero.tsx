import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-24 pt-24 pb-12 overflow-hidden mx-auto max-w-[1400px]">
      
      <motion.div
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-8 md:gap-12 relative z-10 lg:w-1/2 pointer-events-none"
      >
        <motion.h1 
          variants={itemVars}
          className="font-display text-7xl md:text-9xl lg:text-[12rem] font-medium tracking-tighter leading-none"
        >
          BHARATH
        </motion.h1>

        <motion.div variants={itemVars} className="flex flex-col gap-2">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight text-white/90">
            Designer.
          </h2>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight text-white/90">
            Developer.
          </h2>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight text-white/90">
            AI Explorer.
          </h2>
        </motion.div>

        <motion.p 
          variants={itemVars}
          className="max-w-xl text-lg md:text-xl text-white/50 leading-relaxed font-light mt-4"
        >
          Building digital experiences and solving real-world problems through technology, design, and AI.
        </motion.p>
        
        <motion.div variants={itemVars} className="mt-12 flex items-center pointer-events-auto">
          <a 
            href="#work"
            className="group flex items-center gap-4 text-sm uppercase tracking-widest text-white/50 hover:text-white transition-colors"
          >
            <span>Explore Work</span>
            <span className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
              <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
