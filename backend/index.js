const express = require('express')
const cors = require('cors')

const db = require('./core/db')
const {patientValidation, appointmentValidation} = require('./utils/validations')
const { PatientController, AppointmentController } = require('./controllers')
const app = express();

app.use(express.json());
app.use(cors())

app.get('/patients',  AppointmentController.prototype.all);
app.post('/patients', patientValidation.create, PatientController.prototype.create);

app.get('/appointments',  AppointmentController.prototype.all);
app.post('/appointments', appointmentValidation.create, AppointmentController.prototype.create);


app.listen(5000, function(err) {
    if (err) {
        return console.log(err)
    }
    console.log('Server has been started')

})
