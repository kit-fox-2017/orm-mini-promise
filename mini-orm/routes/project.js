const express = require('express')
const router = express.Router()
const ModelProject = require('../models/project')

router('/', (req, res)=>{
  ModelProject.findAll((dataProject)=>{
    res.send(dataProject)
  })
})

module.exports = router
