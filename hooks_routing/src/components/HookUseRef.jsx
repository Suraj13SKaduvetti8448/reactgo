// src/components/HookUseRef.js

import React, { useRef } from 'react';

function HookUseRef() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div className="use-ref-page">
      <h1>useRef Hook</h1>
      <input ref={inputRef} type="text" placeholder="Click button to focus" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default HookUseRef;
