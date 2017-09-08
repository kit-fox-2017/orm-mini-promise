var express = require('express')
var app = express()
var bodyParser = require('body-parser')
//---- percobaan

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

let index = require('./routes/index.js')
let project = require('./routes/project.js')

app.use('/', index)
app.use('/project', project)



app.listen(3000)
