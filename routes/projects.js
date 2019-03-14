var express = require('express');
const router = express.Router({ mergeParams: true })
const { StudentModel } = require('../db/schema')
const { ProjectModel } = require('../db/schema.js')

/* GET home page. */
router.get('/:projectId', function(req, res, next) {
  projectId = req.params.projectId
  console.log( req.params.projectId)
  StudentModel.findById(req.params.studentId).then((student) => {
    res.send(student.projects.id(projectId))

  })
  });

  // create new project route 
//create route
router.post('/', (req, res) => {
  StudentModel.findById(req.params.studentId).then((student) => {
      const newProject = new ProjectModel(req.body)
      student.projects.push(newProject)
      student.save().then((student)=>{
          res.send(student.projects)
      })
  })

})








  // update route
 
  router.put('/:projectId', (req, res) => {
    StudentModel.findById(req.params.studentId)
      .then((student) => {
        const project = student.projects.id(req.params.projectId)
        project.title = req.body.title,
        project.unit = req.body.unit

        return student.save().then(student=>{
            console.log('project updated')
            res.send(project)
       })     
      })
      .catch((error) => {
        console.log(error)
      })
  })


  // delete route

  router.delete('/:id', (req, res) => {
    StudentModel.findById(req.params.studentId)
      .then((student) => {
        projectId = req.params.projectId
        student.projects.id(req.params.id).remove()
        return student.save()
      })
      .then(() => console.log('project deleted'))
      .catch(err => console.log(err))
    
    })



module.exports = router;
