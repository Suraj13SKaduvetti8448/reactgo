import { useState } from 'react';
import './App.css';
import Student from './components/Student';

function App() {

  const [data] = useState({
    name: "Suraj",
    age: "22",
    grade: "A"
  });

  

  return (
    <div className="App">
      <center><Student props={data} /></center>
    </div>
  );
}

export default App;
