const {body} = require('express-validator');

exports.createValidator = [
    body('name', 'name does not Empty').not().isEmpty(),
    body('description', 'description does not Empty').not().isEmpty(),
    body('description', 'description min 10 character').isLength({min: 10}),
    body('category_id', 'category_id does not Empty').not().isEmpty(),
    body('category_id', 'category_id must is numeric').isNumeric(),
    body('diagnosis', 'diagnosis does not Empty').not().isEmpty(),
    body('diagnosis', 'diagnosis min 10 character').isLength({min: 10}),
    body('treatment', 'treatment does not Empty').not().isEmpty(),
    body('treatment', 'treatment min 10 character').isLength({min: 10}),
  ]