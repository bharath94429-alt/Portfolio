import { useState, useEffect, lazy, Suspense } from 'react';
import { useCardTexture } from './useCardTexture';

const Lanyard = lazy(() => import('./Lanyard'));

export default function LanyardHero() {
  const { frontImage, backImage, lanyardImage } = useCardTexture();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Wait for the textures to generate, or pass null
  return (
    <div className="w-full h-full relative" style={{ height: '100vh' }}>
      <Suspense fallback={
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white/50">
          <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin mb-4"></div>
          <span className="text-xs font-mono tracking-widest uppercase">Initializing 3D...</span>
        </div>
      }>
        <Lanyard 
          position={isDesktop ? [0, 0, 20] : [0, 5, 30]} 
          gravity={[0, -40, 0]} 
          frontImage={frontImage} 
          backImage={backImage} 
          lanyardImage={lanyardImage}
          imageFit="cover" 
          lanyardWidth={1.5}
        />
      </Suspense>
    </div>
  );
}
