const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const DATA_FILE = path.join(__dirname, '..', 'students.json');

// Helper functions
const readData = () => {
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([]));
  }
  const data = fs.readFileSync(DATA_FILE);
  return JSON.parse(data);
};

const writeData = (data) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};

// Generate unique ID for each student (simple timestamp + random)
const generateId = () => `${Date.now()}_${Math.floor(Math.random() * 1000)}`;

// Create (POST) - Add student
router.post('/', (req, res) => {
  const student = req.body;

  if (!student.name || !student.age || !student.course) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const students = readData();

  // Check duplicate by name, age, and course
  const isDuplicate = students.some(
    (s) =>
      s.name === student.name &&
      s.age === student.age &&
      s.course === student.course
  );

  if (isDuplicate) {
    return res.status(409).json({ error: 'Duplicate student entry' });
  }

  // Assign an ID for later update/delete by id
  student.id = generateId();

  students.push(student);
  writeData(students);

  res.status(201).json({ message: 'Student added successfully', student });
});

// Read (GET) - Get all students
router.get('/', (req, res) => {
  const students = readData();
  res.json(students);
});

// Update (PUT) - Update student by ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const updatedStudent = req.body;

  if (!updatedStudent.name || !updatedStudent.age || !updatedStudent.course) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const students = readData();

  const index = students.findIndex((s) => s.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Student not found' });
  }

  // Preserve the id
  students[index] = { id, ...updatedStudent };
  writeData(students);

  res.json({ message: 'Student updated successfully' });
});

// Delete (DELETE) - Delete student by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  let students = readData();

  const index = students.findIndex((s) => s.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Student not found' });
  }

  students.splice(index, 1);
  writeData(students);

  res.json({ message: 'Student deleted successfully' });
});

module.exports = router;
