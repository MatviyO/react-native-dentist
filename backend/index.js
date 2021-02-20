const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();


app.use(bodyParser.json());
app.use(cors())

app.get('/test', function(req, res) {
   return res.send('hello')
})

app.listen(5000, function (err) {
    if (err) {
        console.log(err)
        return throw Error('')
    }
    console.log('Server has been started')

})
