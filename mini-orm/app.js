var express = require('express')
var app = express()
//---- percobaan
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/database.db');

app.set('view engine', 'ejs')
//
// let project = require('./routes/project.js')
//
// app.use('/project', project)

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/project', (req, res)=>{
  db.all(`SELECT * FROM project`, (err, dataProject)=>{
    // res.send(dataProject)
    res.render('project', {dtProject:dataProject})
  })
})

app.get('/project', (req, res)=>{
  db.run(`INSERT INTO project(name, status) VALUES()`)
})

app.listen(3000)
