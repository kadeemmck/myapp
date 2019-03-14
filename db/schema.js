
const mongoose = require('mongoose');
const Schema = mongoose.Schema
 mongoose.connect(process.env.MONGODB_URI);


var ProjectSchema = new Schema({
        title: String,
        unit: {
                type: String,
                required: true
        },
        });

var StudentSchema = new Schema({
    name: {  
        type: String,
        unique: true,
        required: true
    },
    gradeAverage: Number,
    projects: [ProjectSchema]
    });



const ProjectModel = mongoose.model('Project', ProjectSchema)
const StudentModel = mongoose.model('Student', StudentSchema)

module.exports = { ProjectModel, StudentModel } 