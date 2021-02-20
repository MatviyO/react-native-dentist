const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const {PatientController} = require('./controllers')
const app = express();


app.use(bodyParser.json());
app.use(cors())

app.get('/patients', PatientController.prototype.all);
app.post('/patients', PatientController.prototype.create);


app.listen(5000, function (err) {
    if (err) {
        return   console.log(err)
    }
    console.log('Server has been started')

})
