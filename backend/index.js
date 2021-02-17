const express = require('express')
const app = express();

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
