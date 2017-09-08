const express = require('express')
const routers = express.Router()

const models = require('../models/siswa')

routers.get('/', (req, res) => {
  models.findAll()
  .then(siswa => {
    res.render('siswa', {data: siswa, title: 'Siswa Page'})
  })
  .catch(err => {
    res.send(err)
  })
})

routers.post('/', (req, res) => {
  models.insertData(req.body)
   .then(siswa => {
     res.redirect('/')
   })
   .catch(err => {
     res.send(err)
   })
})

module.exports = routers
