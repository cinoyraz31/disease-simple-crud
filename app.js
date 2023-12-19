const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./config/database');
const handlerDiseases = require('./handlers/disease');
const handlerCategory = require('./handlers/category');
const validationDisease = require('./validations/disease');
const validationCategory = require('./validations/category');
const app = express();
const PORT = process.env.PORT || 5000;
// set body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({origin: "*"}));

app.post('/api/diseases', validationDisease.createValidator, handlerDiseases.create);
app.get('/api/diseases', handlerDiseases.index);
app.put('/api/diseases/:id', validationDisease.createValidator, handlerDiseases.update);
app.delete('/api/diseases/:id', handlerDiseases.delete);
app.post('/api/disease-categories', validationCategory.createValidator, handlerCategory.create);
app.get('/api/disease-categories', handlerCategory.index);

app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));