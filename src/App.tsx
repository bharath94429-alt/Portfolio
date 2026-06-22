import MouseSpotlight from './components/MouseSpotlight';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import TechStack from './components/TechStack';
import Exploring from './components/Exploring';
import Contact from './components/Contact';
import { DimLightsProvider } from './components/DimLightsContext';
import FocusRing from './components/FocusRing';
import DimLightsToggle from './components/DimLightsToggle';

export default function App() {
  return (
    <DimLightsProvider>
      <div className="relative antialiased selection:bg-white selection:text-black">
        <MouseSpotlight />
        <Navigation />
        <DimLightsToggle />
        
        <main>
          <FocusRing><Hero /></FocusRing>
          <FocusRing><Projects /></FocusRing>
          <FocusRing><About /></FocusRing>
          <FocusRing><TechStack /></FocusRing>
          <FocusRing><Exploring /></FocusRing>
          <FocusRing><Contact /></FocusRing>
        </main>
      </div>
    </DimLightsProvider>
  );
}
