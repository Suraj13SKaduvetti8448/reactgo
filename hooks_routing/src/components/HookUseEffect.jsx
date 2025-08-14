// src/components/HookUseEffect.js

import React, { useState, useEffect } from 'react';

function HookUseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // Only re-run effect when `count` changes

  return (
    <div className="use-effect-page">
      <h1>useEffect Hook</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default HookUseEffect;
