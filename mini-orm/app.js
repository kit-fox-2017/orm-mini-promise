var express = require('express')
var app = express()
var bodyParser = require('body-parser')
//---- percobaan
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/database.db');

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

let project = require('./routes/project.js')
app.use('/project', project)



app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/project', (req, res)=>{
  db.all(`SELECT * FROM project`, (err, dataProject)=>{
    // res.send(dataProject)
    res.render('project', {dtProject:dataProject})
  })
})

app.post('/project', (req, res)=>{
  db.run(`INSERT INTO project(name, status) VALUES('${req.body.name}', '${req.body.status}')`, ()=>{
    res.redirect('/project')
  })
})

app.get('/project/delete/:id', (req, res)=>{
  db.run(`DELETE FROM project WHERE id=${req.params.id}`,()=>{
    res.redirect('/project')
  })
})

app.get('/project/edit/:id', (req, res)=>{
  db.all(`SELECT * FROM project WHERE id=${req.params.id} `, (err, dataProject)=>{
    // res.send(dataProject)
    res.render('editProject', {dtProject:dataProject[0]})
  })
})

app.post('/project/edit/:id', (req, res)=>{
  db.run(`UPDATE project SET name='${req.body.name}', status='${req.body.status}' WHERE id=${req.params.id} `, ()=>{
    res.redirect('/project')
  })
})




app.listen(3000)
