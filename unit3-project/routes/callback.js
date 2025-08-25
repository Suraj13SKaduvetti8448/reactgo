const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  function myDisplayer(something) {
    return something;
  }

  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    return myCallback(sum);
  }

  const result = myCalculator(5, 5, myDisplayer);
  res.render('callbacks', { result });
});

module.exports = router;
