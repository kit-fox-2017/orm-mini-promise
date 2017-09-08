var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/database.db');

db.serialize(function() {
   db.run(`CREATE TABLE project (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name varchar(255),
    status varchar(255))`, ()=>{
      console.log('berhasil di buat project');
    });

    db.run(`CREATE TABLE supervisor (
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     name varchar(255),
     email varchar(255),
     projectId INTEGER,
    FOREIGN KEY (projectId) REFERENCES project(id) )`, ()=>{
      console.log('berhasil di buat supervisor');
    } )

});
