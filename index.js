//get the enviroment variables
require('.env').config()

// require needed node modules
const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Connected to Foxnet Successfully!')
})

// Listen to a port number defined by a local enviroment variable (.env)

app.listen(process.env.PORT)