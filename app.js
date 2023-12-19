const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./config/database');
const routeDiseases = require('./routes/disease');
const validationDisease = require('./validations/disease');
const app = express();
const PORT = process.env.PORT || 5000;
// set body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/diseases', validationDisease.createValidator, routeDiseases.create);
app.get('/api/diseases', routeDiseases.index);
app.put('/api/diseases/:id', validationDisease.createValidator, routeDiseases.update);
app.delete('/api/diseases/:id', routeDiseases.delete);

app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));