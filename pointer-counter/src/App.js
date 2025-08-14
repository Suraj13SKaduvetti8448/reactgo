import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  incrementOdd, incrementEven, decrementOdd, decrementEven, autoIncrement } from './components/store';

function App() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  // Auto increment every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(autoIncrement());
    }, 5000);

    return () => clearInterval(interval);
  }, [dispatch]);

  const handleIncrement = () => {
    if (value % 2 === 0) {
      dispatch(incrementEven());
    } else {
      dispatch(incrementOdd());
    }
  };

  const handleDecrement = () => {
    if (value % 2 === 0) {
      dispatch(decrementEven());
    } else {
      dispatch(decrementOdd());
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div style={{ textAlign: 'center', marginTop: 50 }}>
      <h1>Pointer Counter</h1>
      <h2>{value}</h2>
      <button onClick={handleDecrement} style={{ marginRight: 10, fontSize: '1.5rem' }}>
        -
      </button>
      <button onClick={handleIncrement} style={{ fontSize: '1.5rem' }}>
        +
      </button>
      <p style={{ marginTop: 20, fontStyle: 'italic' }}>
        Auto incrementing every 5 seconds.
      </p>
    </div>
    </div>
  );
}

export default App;


