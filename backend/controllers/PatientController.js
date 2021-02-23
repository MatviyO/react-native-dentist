const {Patient} = require('../models')
const {validationResult} = require('express-validator')

function PatientController() {
}

const create = function(req, res) {
    const data = {
        fullName: req.body.fullName,
        phone: req.body.phone
    }
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(422).json({
            status: false,
            message: errors.array()
        });
    }
    Patient.create(data, function(err,doc) {

        if (err) {
            return res.status(500).json({
                status: false,
                message: err
            });
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
