var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/database.db');

class ModelProject {
  constructor(raw) {
    this.id = raw.id
    this.name = raw.name
    this.status = raw.status
  }

  static findAll(cb) {
    db.all(`SELECT * FROM project`, (err, dataProject)=>{
      // let results = dataProject.map(m => new ModelProfile(m))
      // console.log(results);
      // cb(results)
      cb(err, dataProject)
    })
  }

  static findById(reqId, cb) {
    db.all(`SELECT * FROM project WHERE id=${reqId} `, (err, dataProject)=>{
    // res.send(dataProject)
      cb(err, dataProject)
    })
  }

  static findWhere() {}

  static create(reqBody, cb) {
    db.run(`INSERT INTO project(name, status) VALUES('${reqBody.name}', '${reqBody.status}')`, ()=>{
      // res.redirect('/project')
      cb()
    })
  }

  static update(reqId, reqBody, cb) {
    db.run(`UPDATE project SET name='${reqBody.name}', status='${reqBody.status}' WHERE id=${reqId} `, ()=>{
      // res.redirect('/project')
      cb()
    })
  }

  static destroy(reqId, cb) {
    db.run(`DELETE FROM project WHERE id=${reqId}`,()=>{
      cb()
    })
  }

}

module.exports = ModelProject
