const express = require('express');
const router = express.Router()
const {StudentModel} = require('../db/schema')

/* GET users listing. */
router.get('/', (request, response) => {
  StudentModel.find({})
    .then((students) => {
      response.send({ 
        students: students
      })
    })
    .catch((error) => {
      console.log(error)
    })
 })
 
//  create route

router.post('/', (req,res)=>{
    const newStudent = new StudentModel(req.body)
    newStudent.save().then((student)=>{
        res.send(student)
    })
})









// show route 
router.get('/:studentId', (request, response) => {
  const studentId = request.params.studentId

  StudentModel.findById(studentId)
    .then((student) => {
      response.send({
        student: student
      })
    })
})

// update route 

router.put('/:studentId', (request, response) => {
  const studentId = request.params.studentid
  const updatedStudent = request.body

  StudentModel.findOneAndUpdate({_id:studentId}, updatedStudent, {new: true})
    .then((student) => {
      console.log(`${student.name} updated!`)
    })
    .catch((error) => {
      console.log(error)
    })
})


// delete route

router.delete('/:studentId', (request, response) => {
  const studentId = request.params.studentId

  StudentModel.findOneAndDelete({_id:studentId})
    .then(() => {
      console.log('student deleted')
    })
    .catch((error) => {
      console.log(error)
    })
})




module.exports = router