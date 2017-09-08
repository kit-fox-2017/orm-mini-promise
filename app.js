const express = require('express')
const app = express()

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db/database.db');

app.set('view engine','ejs')

const bodyParser = require('body-parser')





























app.listen(3000,()=>{
  console.log("server Run");
})
