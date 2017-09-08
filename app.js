const express = require('express')
const app = express()

const sqlite = require('sqlite3')
const db = new sqlite.Database('db/database.db')

app.set('view engine', 'ejs')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const siswa = require('./routes/siswa')

app.use('/', siswa)

app.listen(3000, () => {
  console.log('AYO JALAN!');
})
