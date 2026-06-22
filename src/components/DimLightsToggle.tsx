import { Moon, Sun } from 'lucide-react';
import { useDimLights } from './DimLightsContext';

export default function DimLightsToggle() {
  const { isDimmed, toggleDim } = useDimLights();

  return (
    <div className="fixed bottom-6 left-6 z-50 pointer-events-auto">
      <button
        onClick={toggleDim}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-colors shadow-[0_4px_24px_rgba(0,0,0,0.5)] group"
        aria-label="Toggle Focus Mode"
        title="Toggle Focus Mode"
      >
        {isDimmed ? (
          <Sun className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
        ) : (
          <Moon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
        )}
      </button>
    </div>
  );
}
