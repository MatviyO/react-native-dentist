const { check} = require('express-validator')

const valiadation = {
    create: [
        check('fullName').isLength({min: 6}),
        check('phone').isLength({min: 12})

    ],
    update: [
        check('fullName').isLength({min: 6}),
        check('phone').isLength({min: 12})

    ]
}


module.exports = valiadation
