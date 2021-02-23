const {Patient} = require('../models')

function PatientController() {
}

const create = function(req, res) {
    const data = {
        fullName: req.body.fullName,
        phone: req.body.phone
    }
    Patient.create(data, function(err,doc) {
        const errors = validationResult(req);
        if (err) {
            return res.status(500).json({
                status: false,
                message: err
            });
        }

        if(!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array()});
        }
        
        res.status(201).json({
            status: true,
            data: doc
        })
    })
}

const all = function(req, res) {

    Patient.find({}, function(err, docs) {
        if (err) {
            return res.status(500).json({
                status: false,
                message: err
            });
        }
        res.json({
            status: true,
            data: docs
        })
    })
}

PatientController.prototype = {
    all,
    create
}

module.exports = PatientController
