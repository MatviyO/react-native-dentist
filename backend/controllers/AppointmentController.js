const {Appointment} = require('../models')
const {validationResult} = require('express-validator')

function AppointmentController() {

}

const create = function(req, res) {
    const data = {
        fullName: req.body.fullName,
        patientId: req.body.patientId,
        dentNumber: req.body.dentNumber,
        diagnosis: req.body.diagnosis,
        price: req.body.price,
        date: req.body.date,
        time: req.body.time
    }
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(422).json({
            status: false,
            message: errors.array()
        });
    }
    Appointment.create(data, function(err,doc) {

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

    Appointment.find({}, function(err, docs) {
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
AppointmentController.prototype = {
    all,
    create
}


module.exports = AppointmentController;
