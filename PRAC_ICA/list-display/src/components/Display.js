import {React, useState, useEffect} from "react";

function fetchUsers(){
  return fetch("https://jsonplaceholder.typicode.com/posts").then(response => {
    if(!response.ok ){
      throw new Error(`Network Response was not OK ; Status, ${response.status}`);
    }
    console.log(response);
    return response.json();
  });
}
function Display(){


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
    <div className='p-4 bg-white shadow-md mt-4' key={user.userId}>
        <h2>UserId : {user.userId}</h2>
        <p>ID : {user.id}</p>
        <p>Title : {user.title}</p>
        <p>Body : {user.body}</p>
        <hr/>
      </div>
      ))}
  </div>
  }
  return (
    <div className="Display">     
    <div className='Data'>
        {users.length}
        <h1>Here the Data will be shown</h1>
        
    </div>
      </div>
  );
}
export default Display;
