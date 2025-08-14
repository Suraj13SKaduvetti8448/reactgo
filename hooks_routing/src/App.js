import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import './pages/styles.css';
import IndexPage from './pages/IndexPage';
import UseStatePage from './pages/useStatePage';
import UseEffectPage from './pages/useEffectPage';
import UseRefPage from './pages/useRefPage';
import UseContextPage from './pages/useContextPage';
import UseMemoPage from './pages/useMemoPage';
import UseCallbackPage from './pages/useCallbackPage';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/use-state">useState Hook</Link></li>
          <li><Link to="/use-effect">useEffect Hook</Link></li>
          <li><Link to="/use-ref">useRef Hook</Link></li>
          <li><Link to="/use-context">useContext Hook</Link></li>
          <li><Link to="/use-memo">useMemo Hook</Link></li>
          <li><Link to="/use-callback">useCallback Hook</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/use-state" element={<UseStatePage />} />
        <Route path="/use-effect" element={<UseEffectPage />} />
        <Route path="/use-ref" element={<UseRefPage />} />
        <Route path="/use-context" element={<UseContextPage />} />
        <Route path="/use-memo" element={<UseMemoPage />} />
        <Route path="/use-callback" element={<UseCallbackPage />} />
      </Routes>

    </div>
  );
}


// Inside the App component:



export default App;
