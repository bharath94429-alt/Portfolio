import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import RevealText from './RevealText';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-24 max-w-[1400px] mx-auto min-h-[80vh] flex flex-col justify-end">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-12"
      >
        <h2 className="font-display text-5xl md:text-8xl lg:text-[10rem] font-medium tracking-tighter leading-[0.9] max-w-5xl">
          <RevealText text="Let’s Build Something Interesting." />
        </h2>

        <div className="flex flex-col md:flex-row gap-8 justify-between items-start md:items-end mt-12 md:mt-24">
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto glass-panel p-2 rounded-2xl md:rounded-full">
            <a 
              href="https://github.com/bharath94429-alt?tab=repositories" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 px-8 py-4 rounded-xl md:rounded-full hover:bg-white/10 transition-colors"
            >
              <span className="font-medium tracking-wide">GitHub</span>
              <ArrowUpRight size={16} className="text-white/50" />
            </a>
            <div className="hidden sm:block w-px bg-white/10 my-2" />
            <a 
              href="mailto:hello@example.com" 
              className="flex items-center justify-between gap-4 px-8 py-4 rounded-xl md:rounded-full hover:bg-white/10 transition-colors"
            >
              <span className="font-medium tracking-wide">Email</span>
              <ArrowUpRight size={16} className="text-white/50" />
            </a>
          </div>

          <div className="flex flex-col gap-2 text-white/40 text-sm">
            <p>© {new Date().getFullYear()} Bharath.</p>
            <p>Design & Code.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
