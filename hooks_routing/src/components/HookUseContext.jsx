// src/components/HookUseContext.js

import React, { useContext, useState } from 'react';

// Create a context for theme (dark mode or light mode)
const ThemeContext = React.createContext();

function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

function HookUseContext() {
  const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    <div className={`use-context-page ${isDark ? 'dark' : 'light'}`}>
      <h1>useContext Hook</h1>
      <p>The theme is {isDark ? 'Dark' : 'Light'}</p>
      <button onClick={() => setIsDark(!isDark)}>Toggle Theme</button>
    </div>
  );
}

export { HookUseContext, ThemeProvider };
