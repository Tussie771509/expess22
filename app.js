const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const app = express();
require('dotenv').config(); // To load environment variables from .env file

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json()); // To handle JSON payloads
app.use(express.static(path.join(__dirname, 'public')));

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'expense_tracker'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('MySQL connected...');
});

// Routes
app.use('/auth', require('./routes/auth'));

// Serve register page
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/register.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// const express = require('express');
// const bodyParser = require('body-parser');
// const authRoutes = require('./routes/authRoutes');
// const expenseRoutes = require('./routes/expenseRoutes');

// const app = express();

// app.use(bodyParser.json());
// app.use(express.static('public'));

// app.use('/auth', authRoutes);
// app.use('/expenses', expenseRoutes);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
