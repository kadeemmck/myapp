require('dotenv').config();
const mongoose = require('mongoose')
const {ProjectModel} = require('./schema')
const {StudentModel} = require('./schema')




mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('connected to mongoDB')
    })
    .catch((err) => {
        console.log('ERROR', err)
    })


    const project1 = new ProjectModel({
        title: 'Project3',
        unit: 'Mongoose',
    })


    const project2 = new ProjectModel({
        title: 'Project4',
        unit: 'Mongoose part 2',
    })

   
   
    const student1 = new StudentModel({
        name: 'Devan',
        gradeAverage: '89',
        projects: [project1, project2]
    })



    const student2 = new StudentModel({
        name: 'Val',
        gradeAverage: '95',
        projects: [project1, project2]
    })






    const projects = [project1, project2]
    const student = [student1, student2]


    StudentModel.deleteMany()
    .then(() => ProjectModel.deleteMany())
    .then(() => StudentModel.insertMany(student))
    .then(() => ProjectModel.insertMany(projects))
    .then(() => mongoose.connection.close())