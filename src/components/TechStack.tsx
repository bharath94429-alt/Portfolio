import { motion } from 'motion/react';
import RevealText from './RevealText';

const skillCategories = [
  {
    title: "Technology",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "GitHub", "Figma"]
  },
  {
    title: "Programming",
    items: ["C", "C++", "Java", "Python"]
  },
  {
    title: "Artificial Intelligence",
    items: ["Large Language Models", "Local LLMs", "Ollama", "Prompt Engineering", "AI Workflows", "Generative AI", "AI-assisted Development"]
  },
  {
    title: "Design",
    items: ["UI Design", "UX Thinking", "Design Systems", "Web Design"]
  },
  {
    title: "Creative Work",
    items: ["Video Editing", "Photo Editing", "Poster Design", "Product Advertisement", "Visual Storytelling"]
  }
];

export default function TechStack() {
  return (
    <section id="tech" className="py-32 px-6 md:px-24 max-w-[1400px] mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="text-xs uppercase tracking-[0.2em] text-white/40 mb-24 block">Expertise & Experience</span>
        
        <div className="flex flex-col gap-24">
          {skillCategories.map((category, i) => (
            <div key={category.title} className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-24 border-t border-white/10 pt-12">
              <div className="lg:w-1/4">
                <h3 className="font-display text-xl text-white/40 uppercase tracking-widest">
                  <RevealText text={category.title} delay={0} />
                </h3>
              </div>
              <div className="lg:w-3/4 flex flex-wrap gap-x-8 gap-y-4 md:gap-x-12 md:gap-y-6">
                {category.items.map((item, j) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1 + j * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display text-3xl md:text-5xl lg:text-6xl tracking-tighter text-stroke-transparent cursor-default hover:text-white transition-colors duration-500"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
