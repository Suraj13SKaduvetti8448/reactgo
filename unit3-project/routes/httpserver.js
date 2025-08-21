const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // Simulating Node.js http.createServer response
  res.render('httpserver', { message: "Hello World!" });
});

module.exports = router;
