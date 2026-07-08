import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isUpsideDown, setIsUpsideDown] = useState(false);

  const toggleUpsideDown = () => {
    setIsUpsideDown(!isUpsideDown);
  };

  useEffect(() => {
    if (isUpsideDown) {
      document.documentElement.classList.add('upside-down-filter');
    } else {
      document.documentElement.classList.remove('upside-down-filter');
    }
  }, [isUpsideDown]);

  return (
    <ThemeContext.Provider value={{ isUpsideDown, toggleUpsideDown }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
