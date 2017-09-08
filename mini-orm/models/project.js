var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/database.db');

class ModelProject {
  constructor(raw) {
    this.attribute1 = raw.attribute1
    this.attribute2 = raw.attribute2
  }

  static findAll(cb) {
    db.all(`SELECT * FROM project`,(err, dataProject)={
      let results = dataProject.map(m => new ModelProfile(m))
      console.log(results);
      cb(results)
    })
  }

  static findById() {}

  static findWhere() {}

  static create() {}

  static update() {}

  static destroy() {}

}

module.exports = ModelProject
