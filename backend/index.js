const express = require('express')
const app = express();

app.get('/test', function(req, res) {
   return res.send('hello')
})
