const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // Simulated nested callbacks
  function getArticlesData(limit, cb) {
    cb(["article1", "article2"]);
  }
  function getUserData(username, cb) {
    cb("User_" + username);
  }
  function getAddress(name, cb) {
    cb("Address of " + name);
  }

  let output = [];
  getArticlesData(20, (articles) => {
    output.push("article lists: " + articles);
    getUserData("demoUser", (name) => {
      output.push(name);
      getAddress(name, (item) => {
        output.push(item);
        res.render('callbackhell', { result: output });
      });
    });
  });
});

module.exports = router;
