const {body} = require('express-validator');

exports.createValidator = [
    body('name', 'name does not Empty').not().isEmpty(),
]