// src/components/HookUseState.js

import React, { useState } from 'react';

function HookUseState() {
  const [count, setCount] = useState(0);

  return (
    <div className="use-state-page">
      <h1>useState Hook</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default HookUseState;
