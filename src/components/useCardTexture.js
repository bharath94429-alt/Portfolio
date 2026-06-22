import { useEffect, useState } from 'react';

export function useCardTexture() {
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [lanyardImage, setLanyardImage] = useState(null);

  useEffect(() => {
    // Canvas dimensions (ID card portrait ratio)
    const W = 600;
    const H = 900;
    
    // Create Front Canvas
    const frontCanvas = document.createElement('canvas');
    frontCanvas.width = W;
    frontCanvas.height = H;
    const fCtx = frontCanvas.getContext('2d');
    
    // Background
    fCtx.fillStyle = '#0a0a0a';
    fCtx.fillRect(0, 0, W, H);
    
    // Draw text on Front
    fCtx.fillStyle = '#ffffff';
    
    // Name
    fCtx.font = 'bold 70px "Space Grotesk", Inter, sans-serif';
    fCtx.textAlign = 'center';
    fCtx.fillText('BHARATH', W/2, 180);
    
    // Subtitle
    fCtx.font = '300 22px Inter, sans-serif';
    fCtx.fillText('Computer Science Engineering Student', W/2, 230);
    
    // Separator
    fCtx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    fCtx.fillRect(W/2 - 50, 260, 100, 2);
    
    // Roles
    fCtx.fillStyle = '#ffffff';
    fCtx.font = '500 24px Inter, sans-serif';
    fCtx.fillText('Builder • Designer • Developer', W/2, 320);
    
    // Description
    fCtx.font = '300 20px Inter, sans-serif';
    const drawMultilineText = (ctx, text, x, y, maxWidth, lineHeight) => {
      const words = text.split(' ');
      let line = '';
      let currentY = y;
      
      for(let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
          ctx.fillText(line, x, currentY);
          line = words[n] + ' ';
          currentY += lineHeight;
        }
        else {
          line = testLine;
        }
      }
      ctx.fillText(line, x, currentY);
      return currentY;
    };
    
    let y = drawMultilineText(fCtx, 'Building digital experiences and solving real-world problems through technology, design, and AI.', W/2, 400, W - 100, 32);
    
    // Skills
    fCtx.font = '500 18px Inter, sans-serif';
    fCtx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    fCtx.fillText('SKILLS', W/2, y + 80);
    
    fCtx.fillStyle = '#ffffff';
    fCtx.font = '400 20px Inter, sans-serif';
    const skills = ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'GitHub', 'Figma'];
    drawMultilineText(fCtx, skills.join(' • '), W/2, y + 120, W - 100, 30);
    
    setFrontImage(frontCanvas.toDataURL('image/png'));
    
    // Create Back Canvas
    const backCanvas = document.createElement('canvas');
    backCanvas.width = W;
    backCanvas.height = H;
    const bCtx = backCanvas.getContext('2d');
    
    // Background
    bCtx.fillStyle = '#0a0a0a';
    bCtx.fillRect(0, 0, W, H);
    
    let by = 90;
    
    const drawSection = (title, items) => {
      bCtx.font = '500 16px Inter, sans-serif';
      bCtx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      bCtx.textAlign = 'center';
      bCtx.fillText(title.toUpperCase(), W/2, by);
      
      by += 35;
      
      bCtx.fillStyle = '#ffffff';
      bCtx.font = '400 18px Inter, sans-serif';
      by = drawMultilineText(bCtx, items.join(' • '), W/2, by, W - 100, 26);
      by += 50;
    };
    
    drawSection('Programming', ['C', 'C++', 'Java', 'Python']);
    drawSection('Artificial Intelligence', ['Large Language Models', 'Ollama', 'Local LLMs', 'Prompt Engineering', 'AI Workflows', 'Generative AI']);
    drawSection('Creative Work', ['Video Editing', 'Photo Editing', 'Poster Design', 'Product Advertisement Creation']);
    drawSection('Interests', ['Artificial Intelligence', 'Modern Web Development', 'Digital Product Design', 'Design Systems', 'Human-Centered Technology', 'Open Source', 'Problem Solving']);
    
    bCtx.font = '300 13px Inter, sans-serif';
    bCtx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    drawMultilineText(bCtx, 'Bharath is a Computer Science Engineering student passionate about combining technology, design, and artificial intelligence to build meaningful digital experiences. He enjoys creating websites, exploring local AI systems, experimenting with LLMs, building AI-powered applications, producing creative visual content, and continuously learning through real-world projects.', W/2, by + 10, W - 80, 20);
    
    setBackImage(backCanvas.toDataURL('image/png'));
    
    // Create Lanyard Band Canvas
    const bandCanvas = document.createElement('canvas');
    bandCanvas.width = 1000;
    bandCanvas.height = 100;
    const bandCtx = bandCanvas.getContext('2d');
    
    // Background
    bandCtx.fillStyle = '#0a0a0a';
    bandCtx.fillRect(0, 0, 1000, 100);
    
    // Borders
    bandCtx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    bandCtx.fillRect(0, 0, 1000, 2);
    bandCtx.fillRect(0, 98, 1000, 2);
    
    // Infinity symbol
    bandCtx.fillStyle = '#ffffff';
    bandCtx.font = '500 50px Inter, sans-serif';
    bandCtx.textAlign = 'center';
    bandCtx.textBaseline = 'middle';
    bandCtx.fillText('∞', 500, 52);
    
    setLanyardImage(bandCanvas.toDataURL('image/png'));
    
  }, []);

  return { frontImage, backImage, lanyardImage };
}
