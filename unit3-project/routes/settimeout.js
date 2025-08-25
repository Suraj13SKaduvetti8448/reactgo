const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  setTimeout(() => {
    res.render('settimeout', { message: "I love You !! (after 3s)" });
  }, 3000);
});

module.exports = router;
