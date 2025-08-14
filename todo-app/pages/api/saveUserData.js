import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { name, age, tasks } = req.body;

  try {
    const filePath = path.join(process.cwd(), 'data', 'userData.json');
    let userData = [];

    // Check if the file exists and read data from it
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf-8');
      if (fileData.trim()) {
        userData = JSON.parse(fileData);  // Parse existing data
      }
    }

    // Check if the user already exists
    const existingUser = userData.find(user => user.name === name);

    if (existingUser) {
      // If the user exists, don't append tasks again. Return existing tasks.
      return res.status(200).json(existingUser); // Send existing tasks back
    } else {
      // If user is new, generate tasks and create a new entry
      const newTasks = generateTasksBasedOnAge(age);

      // Add the new user with tasks to the array
      userData.push({ name, age, tasks: newTasks });

      // Write the updated user data back to the file
      fs.writeFileSync(filePath, JSON.stringify(userData, null, 2));

      return res.status(200).json({ name, age, tasks: newTasks }); // Return new tasks
    }
  } catch (error) {
    console.error('Error saving user data', error);
    res.status(500).json({ message: 'Error saving user data', error: error.message });
  }
}

// Function to generate tasks based on age
function generateTasksBasedOnAge(age) {
  if (age < 18) {
    return [
      { task: 'Study', timestamp: new Date().toISOString() },
      { task: 'Play a game', timestamp: new Date().toISOString() }
    ];
  } else if (age >= 18 && age <= 30) {
    return [
      { task: 'Work out', timestamp: new Date().toISOString() },
      { task: 'Learn something new', timestamp: new Date().toISOString() }
    ];
  } else {
    return [
      { task: 'Read a book', timestamp: new Date().toISOString() },
      { task: 'Relax and meditate', timestamp: new Date().toISOString() }
    ];
  }
}
