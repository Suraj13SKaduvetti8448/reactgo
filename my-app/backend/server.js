const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Import routes
const studentRoutes = require('./crud/students');
const authRoutes = require('./login_signup/auth');
const logsRoutes = require('./logs/logs');

// Use routes
app.use('/api/students', studentRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/logs', logsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
