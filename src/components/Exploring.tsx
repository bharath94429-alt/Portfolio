import { motion } from 'motion/react';
import { useRef } from 'react';

const topics = [
  "Artificial Intelligence",
  "Modern Web Experiences",
  "Digital Product Design",
  "Emerging Technologies",
  "Open Source",
  "Human-Centered Design",
  "Advanced Web Technologies",
  "Future of HCI"
];

export default function Exploring() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-32 overflow-hidden border-y border-white/5 bg-white/[0.01]" ref={containerRef}>
      <div className="px-6 md:px-24 max-w-[1400px] mx-auto mb-16">
        <span className="text-xs uppercase tracking-[0.2em] text-white/40 block">Currently Exploring</span>
      </div>
      
      {/* Dynamic Marquee-style Flow */}
      <div className="relative w-full flex flex-col gap-8 md:gap-16">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex whitespace-nowrap gap-8 md:gap-16 pr-8 md:pr-16"
          style={{ width: "fit-content" }}
        >
          {/* Double array for seamless loop */}
          {[...topics, ...topics].map((topic, i) => (
            <div key={i} className="flex items-center gap-8 md:gap-16">
              <span className="font-display text-5xl md:text-8xl lg:text-[10rem] font-light tracking-tighter text-white/10 uppercase">
                {topic}
              </span>
              <span className="h-4 w-4 md:h-8 md:w-8 rounded-full bg-white/10" />
            </div>
          ))}
        </motion.div>

        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          className="flex whitespace-nowrap gap-8 md:gap-16 pr-8 md:pr-16"
          style={{ width: "fit-content" }}
        >
          {/* Double array for seamless loop */}
          {[...[...topics].reverse(), ...[...topics].reverse()].map((topic, i) => (
            <div key={i} className="flex items-center gap-8 md:gap-16">
              <span className="font-display text-5xl md:text-8xl lg:text-[10rem] font-light tracking-tighter text-white/10 uppercase">
                {topic}
              </span>
              <span className="h-4 w-4 md:h-8 md:w-8 rounded-full bg-white/10" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
