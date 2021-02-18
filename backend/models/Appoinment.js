const mongoose = require('mongoose');

const {Schema} = mongoose;

const AppointmentSchema = new Schema({
    userId: String,
    dentNumber: String,
    diagnosis: String,
    phone: String
}, {timestamps: true})

const Appointment = mongoose.model('Appointment', AppointmentSchema)

module.exports = Appointment;
