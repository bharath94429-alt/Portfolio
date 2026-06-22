import { motion } from 'motion/react';
import RevealText from './RevealText';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-24 max-w-[1400px] mx-auto min-h-[70vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-white/40 mb-12 block">About</span>
        
        <div className="flex flex-col gap-8 md:gap-12 mt-12">
          <p className="font-display text-3xl md:text-5xl lg:text-6xl leading-tight md:leading-snug tracking-tight text-white/90">
            <RevealText text="I’m Bharath, a Computer Science Engineering student who enjoys building digital experiences at the intersection of technology, design, and artificial intelligence." />
          </p>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <p className="font-light text-lg md:text-2xl leading-relaxed text-white/50">
              My interests range from modern web development and UI design to local LLMs, AI-powered workflows, and digital product creation.
            </p>
            <p className="font-light text-lg md:text-2xl leading-relaxed text-white/50">
              Beyond coding, I work on visual content, product advertisements, posters, photo editing, and video production, combining technical and creative thinking to bring ideas to life.
            </p>
          </div>
          <p className="font-light text-lg md:text-2xl leading-relaxed text-white/50 max-w-3xl">
            Currently exploring advanced web technologies, AI systems, and the future of human-computer interaction.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
