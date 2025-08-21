const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Setup views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => res.render('index'));

app.use('/callbacks', require('./routes/callback'));
app.use('/settimeout', require('./routes/settimeout'));
app.use('/setinterval', require('./routes/setinterval'));
app.use('/promise', require('./routes/promise'));
app.use('/asyncawait', require('./routes/asyncawait'));
app.use('/asyncxhr', require('./routes/asyncxhr'));
app.use('/callbackhell', require('./routes/callbackhell'));
app.use('/httpserver', require('./routes/httpserver'));
app.use('/expressbasic', require('./routes/expressbasic'));
app.use('/expresspost', require('./routes/expresspost'));
app.use('/routerexample', require('./routes/routerexample'));
app.use('/dynamicroute', require('./routes/dynamicroute'));
app.use('/regexroute', require('./routes/regexroute'));
app.use('/notfound', require('./routes/notfound'));
app.use('/middleware', require('./routes/middleware'));
app.use('/middlewareorder', require('./routes/middlewareorder'));
app.use('/validator', require('./routes/validator'));
app.use('/auth', require('./routes/auth'));

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
