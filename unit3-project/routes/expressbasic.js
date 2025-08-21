const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('expressbasic', { message: "Hello World from Express GET!" });
});

module.exports = router;
