const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/validationController')(app);

app.listen(3000, console.log('Servidor is running on port 3000...'));

module.exports.app = app;