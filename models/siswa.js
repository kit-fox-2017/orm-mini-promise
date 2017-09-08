const sqlite = require('sqlite3').verbose()
const db = new sqlite.Database('db/database.db')

class Siswa {

  static findAll(){
    let promise = new Promise((resolve, reject) => {
      let query = `SELECT * FROM siswa`

      db.all(query, (err, rows) => {
        if(!err){
          resolve(rows)
        }else{
          reject(err)
        }
      })
    })
    return promise
  }

  static insertData(params){
    let promise = new Promise((resolve, reject) => {
      let query = `INSERT INTO siswa (first_name, last_name) VALUES (
        '${params.fn}',
        '${params.ln}'
      )`

      db.run(query, (err, rows) => {
        if(!err){
          resolve(rows)
        }else{
          reject(err)
        }
      })
    })
  }

}

module.exports = Siswa
