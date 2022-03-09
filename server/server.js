const path = require('path')
console.log('path is: ', __dirname)

const express = require('express')

const app = express()

require('dotenv').config()


app.use('/data', require('./routes/dataRoute'))

const port = process.env.PORT || 8000
app.listen(port,() => console.log("server is running at " + port) )