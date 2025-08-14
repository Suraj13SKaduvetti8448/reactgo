import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), 'data', 'tasks.json');
    const fileData = fs.readFileSync(filePath);
    const tasks = JSON.parse(fileData);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error reading tasks data", error: error.message });
  }
}
