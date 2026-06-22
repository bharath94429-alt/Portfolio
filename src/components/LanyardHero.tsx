import { useState, useEffect } from 'react';
import Lanyard from './Lanyard';
import { useCardTexture } from './useCardTexture';

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
      <Lanyard 
        position={isDesktop ? [0, 0, 20] : [0, 5, 30]} 
        gravity={[0, -40, 0]} 
        frontImage={frontImage} 
        backImage={backImage} 
        lanyardImage={lanyardImage}
        imageFit="cover" 
        lanyardWidth={1.5}
      />
    </div>
  );
}
