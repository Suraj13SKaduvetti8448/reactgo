// src/pages/UseContextPage.js

import React from 'react';
import { HookUseContext, ThemeProvider } from '../components/HookUseContext';

function UseContextPage() {
  return (
    <ThemeProvider>
      <div className="container">
        <HookUseContext />
      </div>
    </ThemeProvider>
  );
}

export default UseContextPage;
