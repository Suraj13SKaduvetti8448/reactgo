// src/components/HookUseCallback.js

import React, { useState, useCallback } from 'react';

function HookUseCallback() {
  const [count, setCount] = useState(0);

  // Memoize the callback function to avoid unnecessary re-renders
  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div className="use-callback-page">
      <h1>useCallback Hook</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default HookUseCallback;
