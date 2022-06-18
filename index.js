//get the enviroment variables
require('dotenv').config()

// require needed node modules
const express = require('express')
const app = express()


app.get('/', function (req, res) {
    res.send (`
        <body style="margin: 0;">
            <div style="border: 1px solid black; height: 10vh; background-color: white;">
                <h2 style="text-align: center;">NAV BAR</h2>
            </div>
            <h1>White Page</h1>
        </body>
        `)
})
// can't get the myColor to work?  Ask later.

app.get('/:color', function (req, res) {
    let myColor = req.params.color
    res.send(`
        <body style="margin: 0;">
            <div style="border: 1px solid black; height: 10vh; background-color: $(myColor);">
                <h2 style="text-align: center;">NAV BAR</h2>
            </div>
            <h1 style="color: $(myColor);">$(myColor) Page</h1>
        </body>
    `)
})


//app.get('/teal', function (req, res) {
    //res.send(`
    //<body style="margin: 0;">
            //<div style="border: 1px solid black; height: 10vh; background-color: teal;">
                //<h2 style="text-align: center;">NAV BAR</h2>
           // </div>
        //<h1 style="color: teal;">Teal Page</h1>
    //</body>
   // `)
//})

// app.get('/crimson', function (req, res) {
    //res.send(`
    //<body style="margin: 0;">
        //<div style="border: 1px solid black; height: 10vh; background-color: crimson;">
           // <h2 style="text-align: center;">NAV BAR</h2>
        //</div>
        //<h1 style="color: crimson;">Crimson Page</h1>
   // </body>
   // `)
//})

// Listen to a port number defined by a local enviroment variable (.env)
// got .env to work

app.listen(process.env.PORT, function () {
   console.log('Connected to Foxnet')
})

//app.listen(3000, function () {
//    console.log('Connected to Foxnet')
//})