const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const LOG_FILE = path.join(__dirname, '..', 'logs.json');

// Middleware to log requests
router.use((req, res, next) => {
  const logEntry = {
    method: req.method,
    url: req.originalUrl,
    timestamp: new Date().toISOString(),
    body: req.body && Object.keys(req.body).length > 0 ? req.body : null,
  };

  let logs = [];
  if (fs.existsSync(LOG_FILE)) {
    try {
      const existingLogs = fs.readFileSync(LOG_FILE);
      logs = JSON.parse(existingLogs);
    } catch (err) {
      console.error('Error reading logs.json:', err);
      logs = [];
    }
  }

  logs.push(logEntry);

  try {
    fs.writeFileSync(LOG_FILE, JSON.stringify(logs, null, 2));
  } catch (err) {
    console.error('Error writing to logs.json:', err);
  }

  next();
});

// GET all logs
router.get('/', (req, res) => {
  if (!fs.existsSync(LOG_FILE)) {
    return res.json([]);
  }
  try {
    const logs = JSON.parse(fs.readFileSync(LOG_FILE));
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: 'Could not read logs' });
  }
});

module.exports = router;
