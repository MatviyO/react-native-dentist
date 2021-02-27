const {Patient} = require('../models')
const {validationResult} = require('express-validator')

function PatientController() {
}

const create = function (req, res) {
    const data = {
        fullName: req.body.fullName,
        phone: req.body.phone
    }
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({
            status: false,
            message: errors.array()
        });
    }
    Patient.create(data, function (err, doc) {

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
    const patientId = req.params.id;
    const errors = validationResult(req);

    const data = {
        fullName: req.body.fullName,
        phone: req.body.phone
    }


    if (!errors.isEmpty()) {
        return res.status(422).json({
            status: false,
            message: errors.array()
        });
    }


    Patient.updateOne({_id: patientId}, {$set: data}, function (err, doc) {

        if (err) {
            return res.status(500).json({
                status: false,
                message: err
            });
        }

        if (!doc) {
            return res.status(404).json({
                status: false,
                message: 'Patient not found'
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
        await Patient.findOne({_id: id})

    } catch (errs) {
        return res.status(404).json({
            status: false,
            message: 'Patient not found'
        });

    }


    Patient.deleteOne({_id: id}, (err) => {
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

const getById = async function (req, res) {
    const id = req.params.id;
    try {
        const patient = await Patient.findById(id).exec();
        res.json({
            status: 'success',
            data: patient
        })
    } catch (err) {
        return res.status(404).json({
            success: false,
            message:'Patient not found'
        })
    }
}

const all = function (req, res) {

    Patient.find({}, function (err, docs) {
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
    getById,
    create,
    update,
    remove
}

module.exports = PatientController
