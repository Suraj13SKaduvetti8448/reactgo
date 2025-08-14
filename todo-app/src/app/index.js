import { useState, useEffect } from 'react';

export default function Home() {
  // States for user name, age, tasks, and loading tasks from localStorage
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [tasks, setTasks] = useState([]);

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Suggest tasks based on age
    let suggestedTasks = [];
    if (age < 18) {
      suggestedTasks = ['Study for exams', 'Do homework', 'Play video games'];
    } else if (age >= 18 && age < 30) {
      suggestedTasks = ['Find a job', 'Start a side project', 'Travel'];
    } else {
      suggestedTasks = ['Exercise', 'Read a book', 'Relax with family'];
    }

    const newTask = {
      name: name,
      age: age,
      tasks: suggestedTasks,
      timestamp: new Date().toISOString(),
    };

    // Save the data in localStorage
    localStorage.setItem('userData', JSON.stringify(newTask));

    // Set the tasks in state
    setTasks(suggestedTasks);
  };

  // Load the data from localStorage when the page is refreshed
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('userData'));
    if (savedData) {
      setName(savedData.name);
      setAge(savedData.age);
      setTasks(savedData.tasks);
    }
  }, []);

  return (
    <div>
      <h1>Todo List Application</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {tasks.length > 0 && (
        <div>
          <h2>Suggested Tasks:</h2>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                {task} - <small>{new Date().toLocaleString()}</small>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
