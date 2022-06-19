const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/user.js');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use('/users', usersRouter);

app.get('/', (req, res) => {res.send('Welcome to the Home Page!')});

app.listen(PORT, () => {console.log(`Our server is listening on port:${PORT}. Thank you!`)});