// src/pages/IndexPage.js

import React from 'react';
import { Link } from 'react-router-dom';

function IndexPage() {
  return (
    <div className="index-page">
      <h1>React Hooks Demo</h1>
      <p>Welcome to the React Hooks Demo! Click on any of the links below to explore different React Hooks.</p>
      <div className="links-container">
        <ul>
          <li><Link to="/use-state">useState</Link></li>
          <li><Link to="/use-effect">useEffect</Link></li>
          <li><Link to="/use-ref">useRef</Link></li>
          <li><Link to="/use-context">useContext</Link></li>
          <li><Link to="/use-memo">useMemo</Link></li>
          <li><Link to="/use-callback">useCallback</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default IndexPage;
