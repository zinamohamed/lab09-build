const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/v1/cats', require('./controllers/cats'))
app.use('/api/v1/dogs', require('./controllers/dogs'))

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
