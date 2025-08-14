import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { name } = req.query;
  console.log(`API hit with name: ${name}`); // Debugging statement

  try {
    const filePath = path.join(process.cwd(), 'data', 'userData.json');

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      return res.status(500).json({ message: 'User data file not found' });
    }

    const fileData = fs.readFileSync(filePath, 'utf-8');

    // Check if the file is empty
    if (!fileData.trim()) {
      return res.status(404).json({ message: "No user data available" });
    }

    // Parse the JSON content
    let userData;
    try {
      userData = JSON.parse(fileData);
    } catch (err) {
      return res.status(500).json({ message: 'Error parsing user data JSON', error: err.message });
    }

    const user = userData.find(user => user.name === name);

    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Error reading user data', error);
    return res.status(500).json({ message: "Error reading user data", error: error.message });
  }
}
