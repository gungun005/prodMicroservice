const { check, validationResult } = require('express-validator');

exports.productSchemaValidation = [
    check('name').isString(),
    check('units').isNumeric(),
    check('ratings').isNumeric(),
    check('price').isNumeric(),
    check('company').isString(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        else next();
    }
];