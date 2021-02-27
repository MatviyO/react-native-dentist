const {Appointment, Patient} = require('../models')
const {validationResult} = require('express-validator')

function AppointmentController() {
}

const create = async function (req, res) {
    const errors = validationResult(req);
    const data = {
        patient: req.body.patient,
        dentNumber: req.body.dentNumber,
        diagnosis: req.body.diagnosis,
        price: req.body.price,
        date: req.body.date,
        time: req.body.time
    }


    if (!errors.isEmpty()) {
        return res.status(422).json({
            status: false,
            message: errors.array()
        });
    }
    try {
        await Patient.findOne({_id: data.patient})

    } catch (errs) {
        return res.status(404).json({
            status: false,
            message: errs
        });

    }

    Appointment.create(data, function (err, doc) {

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

const update = async function (req, res) {
    const appoinmentId = req.params.id;
    const errors = validationResult(req);

    const data = {
        patient: req.body.patient,
        dentNumber: req.body.dentNumber,
        diagnosis: req.body.diagnosis,
        price: req.body.price,
        date: req.body.date,
        time: req.body.time
    }


    if (!errors.isEmpty()) {
        return res.status(422).json({
            status: false,
            message: errors.array()
        });
    }


    Appointment.updateOne({_id: appoinmentId}, {$set: data}, function (err, doc) {

        if (err) {
            return res.status(500).json({
                status: false,
                message: err
            });
        }

        if (!doc) {
            return res.status(404).json({
                status: false,
                message: 'Appointment not found'
            });
        }

        res.status(200).json({
            status: true,
            data: doc
        })
    })
}

const remove = async function (req, res) {
    const id = req.params.id;

    try {
        await Appointment.findOne({_id: id})

    } catch (errs) {
        return res.status(404).json({
            status: false,
            message: errs
        });

    }


    Appointment.deleteOne({_id: id}, (err) => {
        if (err) {
            return res.status(500).json({
                status: false,
                message: err
            });
        }
        res.json({
            status: 'success',
        })
    });

}

const all = function (req, res) {

    Appointment.find({}).populate('patient').exec(function (err, docs) {
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
    create,
    update,
    remove
}


module.exports = AppointmentController;
