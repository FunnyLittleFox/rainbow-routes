const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Connected to Foxnet Successfully!')
})