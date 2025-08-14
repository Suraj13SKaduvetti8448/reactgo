"use client"; // Client-side logic

export default function TaskList({ tasks }) {
  return (
    <div>
      <h3>Tasks:</h3>
      {tasks.length === 0 ? (
        <p>No tasks available. Add your name and age to get suggestions!</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task.task} - {task.timestamp}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
