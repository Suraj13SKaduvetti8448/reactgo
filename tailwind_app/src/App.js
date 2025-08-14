import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function fetchUsers(){
  return fetch("https://jsonplaceholder.typicode.com/users").then(response => {
    if(!response.ok ){
      throw new Error(`Network Response was not OK ; Status, ${response.status}`);
    }
    console.log(response);
    return response.json();
  });
}

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers().then((data) => setUsers(data));
  }, []);
  if (!users.length){
    return <div>Loading....</div>
  }
  if (users.length){
    return <div>
      {users.map((user) => (
    <div className='p-4 bg-white shadow-md mt-4' key={user.id}>
        <h2>{user.name}</h2>
      <p>Email : {user.email}</p>
      <p>Phone : {user.phone}</p>
      <p>Website : {user.website}</p>
      <p>Company : {user.company.name}</p>
      </div>
      ))}
  </div>
  }
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
          <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  </header>
  <div className='Data'>
    <div className='ps'>
      <p>Email : example@example.example</p>
      <p>Phone : 9876543210</p>
      <p>Website : www.example.example</p>
      <p>Company : example</p>
    </div>
      {users.length}
      <div className='dps p-4 bg-white shadow-md mt-4' key={users.id}>
        <h2>{users.name}</h2>
      <p>Email : {users.email}</p>
      <p>Phone : {users.phone}</p>
      <p>Website : {users.website}</p>
      <p>Company : {users.company.name}</p>
      </div>
  </div>
    </div>
  );
  
}

export default App;
