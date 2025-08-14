"use client"; // Client-side logic
import { useState } from 'react';
import TodoForm from './todoForm';
import TaskList from './taskList';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [userDetails, setUserDetails] = useState(null);

  const handleFormSubmit = async (user) => {
    const { name, age } = user;

    // Send request to save user data (name, age, and empty tasks)
    const response = await fetch('/api/saveUserData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, age, tasks: [] }), // Send empty array for tasks
    });

    const data = await response.json();

    if (response.status === 200) {
      // If tasks exist for the user, use them
      setTasks(data.tasks);
      setUserDetails({ name, age });
    } else {
      console.error('Error saving user data:', data.message);
    }
  };

  return (
    <div>
      <h1>Todo Application</h1>
      <TodoForm onSubmit={handleFormSubmit} />
      {userDetails && <h2>Welcome back, {userDetails.name}!</h2>}
      <TaskList tasks={tasks} />
    </div>
  );
}
