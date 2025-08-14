// src/components/HookUseMemo.js

import React, { useState, useMemo } from 'react';

function HookUseMemo() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  // Memoize the expensive calculation to avoid unnecessary re-renders
  const expensiveCalculation = useMemo(() => {
    console.log('Expensive Calculation...');
    return count * 2;
  }, [count]);

  return (
    <div className="use-memo-page">
      <h1>useMemo Hook</h1>
      <p>Expensive Calculation: {expensiveCalculation}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setDarkMode(!darkMode)} className="dark-mode">
        Toggle Dark Mode
      </button>
    </div>
  );
}

export default HookUseMemo;
