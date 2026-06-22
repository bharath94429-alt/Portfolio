import { useRef } from 'react';
import { useInView } from 'motion/react';
import { useDimLights } from './DimLightsContext';

export default function FocusRing({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { isDimmed } = useDimLights();
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-30% 0px -30% 0px" });

  const classes = `transition-opacity duration-700 ease-in-out w-full ${isDimmed ? (isInView ? 'opacity-100' : 'opacity-20') : 'opacity-100'} ${className}`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
}
