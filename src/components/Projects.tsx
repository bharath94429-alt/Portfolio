import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import RevealText from './RevealText';

const projects = [
  {
    id: 1,
    title: "Attendance Management App",
    description: "Streamlining classroom tracking with intuitive interfaces.",
    tech: "React Native • Firebase • TypeScript",
    link: "#"
  },
  {
    id: 2,
    title: "Infinity Studio",
    description: "Digital agency landing experience with immersive animations.",
    tech: "Next.js • Tailwind CSS • Framer Motion",
    link: "https://infinity-studio-jet.vercel.app/"
  },
  {
    id: 4,
    title: "AI Experiments",
    description: "Local model explorations and prompt engineering workflows.",
    tech: "Python • Ollama • LLMs",
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="work" className="py-32 px-6 md:px-24 max-w-[1400px] mx-auto min-h-screen flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="mb-24"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4 block">Selected Work</span>
        <h2 className="font-display text-4xl md:text-6xl font-medium tracking-tight">
          <RevealText text="Featured Projects" />
        </h2>
      </motion.div>

      <div className="flex flex-col border-t border-white/10">
        {projects.map((project, index) => (
          <motion.a
            key={project.id}
            href={project.link}
            target={project.link !== "#" ? "_blank" : undefined}
            rel={project.link !== "#" ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group flex flex-col md:flex-row md:items-end justify-between py-12 border-b border-white/10 relative overflow-hidden"
          >
            {/* Hover Background Reveal */}
            <div className="absolute inset-0 bg-white/[0.02] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0" />

            <div className="flex flex-col gap-4 relative z-10 w-full md:w-2/3">
              <h3 className="font-display text-4xl md:text-5xl lg:text-7xl tracking-tighter text-white/90 group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <p className="text-lg md:text-xl font-light text-white/50 group-hover:text-white/70 transition-colors">
                {project.description}
              </p>
            </div>
            
            <div className="flex items-center justify-between mt-8 md:mt-0 relative z-10 w-full md:w-1/3 md:ml-12">
              <span className="text-sm font-mono text-white/30 group-hover:text-white/50 transition-colors">
                {project.tech}
              </span>
              <span className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/50 group-hover:bg-white text-white group-hover:text-black transition-all duration-300 transform group-hover:scale-110">
                <ArrowUpRight size={20} />
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
