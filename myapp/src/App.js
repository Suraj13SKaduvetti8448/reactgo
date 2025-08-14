import { useState } from 'react';
import './App.css';
import Card from './components/Card';
// import UserForm from './components/UserForm';

function App() {

  const [data, setData] = useState({
    name: "Suraj",
    age: "22",
    degree: "B.Sc."
  });

  

  const handleEmit = (value) => {
    alert("Hello " + value + " !!");
    data.name=value;
    console.log(data.name=value);
    setData({...data, name: value});
  }

  return (
    <div className="App">
      {/* <Card></Card>*/}
      <center><Card props={data} onEmit={handleEmit}/></center>
      {/* <UserForm /> */}
    </div>
  );
}

export default App;
