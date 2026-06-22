import { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export default function MouseSpotlight() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  const smoothX = useSpring(mousePosition.x, { stiffness: 300, damping: 30, mass: 0.5 });
  const smoothY = useSpring(mousePosition.y, { stiffness: 300, damping: 30, mass: 0.5 });

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 mix-blend-difference hidden md:block"
        style={{
          x: smoothX,
          y: smoothY,
        }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[1] h-[50vmax] w-[50vmax] -translate-x-1/2 -translate-y-1/2 rounded-full hidden md:block"
        style={{
          x: smoothX,
          y: smoothY,
          background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0) 50%)',
        }}
      />
    </>
  );
}
