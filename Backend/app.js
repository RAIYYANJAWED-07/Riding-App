const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
const express = require('express');
const app = express();
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');
const cookies = require('cookie-parser');

connectToDb();

app.use(cors());
app.use(express.json());
app.use(cookies());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/users', userRoutes);
app.use('/captains', captainRoutes);

module.exports = app;
