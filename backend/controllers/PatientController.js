const {Patient} = require('../models')

function PatientController() {
}

PatientController.prototype.add = function(req, res) {
    Patient.create(data, function(err,doc) {
        if (err) {
            return res.status(500).json({
                status: 'error',
                message: err
            });
        }
        res.status(201).json({
            status: 'success',
            data: doc
        })
    })
}

PatientController.prototype.all = function(req, res) {

    PatientController.find({}, function(err, docs) {
        if (err) {
            return res.status(500).json({
                status: 'error',
                message: err
            });
        }
        res.json({
            status: 'success',
            data: docs
        })
    })


}

module.exports = PatientController
