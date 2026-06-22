import { createContext, useContext, useState, ReactNode } from 'react';

const DimLightsContext = createContext<{
  isDimmed: boolean;
  toggleDim: () => void;
}>({
  isDimmed: false,
  toggleDim: () => {},
});

export const useDimLights = () => useContext(DimLightsContext);

export const DimLightsProvider = ({ children }: { children: ReactNode }) => {
  const [isDimmed, setIsDimmed] = useState(false);
  const toggleDim = () => setIsDimmed((prev) => !prev);

  return (
    <DimLightsContext.Provider value={{ isDimmed, toggleDim }}>
      {children}
    </DimLightsContext.Provider>
  );
};
