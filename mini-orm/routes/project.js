const express = require('express')
const router = express.Router()
const ModelProject = require('../models/project')

router.get('/', (req, res)=>{
  ModelProject.findAll((err, dataProject)=>{
    res.render('project', {dtProject:dataProject})
    // res.send(dataProject)
  })
})

router.post('/', (req, res)=>{
  ModelProject.create(req.body, ()=>{
    res.redirect('/project')
  })
})

router.get('/edit/:id', (req, res)=>{
  ModelProject.findById(req.params.id, (err, dataProject)=>{
    res.render('editProject', {dtProject:dataProject[0]})
  })
})

router.post('/edit/:id', (req, res)=>{
  ModelProject.update(req.params.id, req.body, ()=>{
    res.redirect('/project')
  })
})

router.get('/delete/:id', (req, res)=>{
  ModelProject.destroy(req.params.id, ()=>{
    res.redirect('/project')
  })
})

module.exports = router
