// tasks schema
let mongoose = require('mongoose');

let tasksSchema = mongoose.Schema({
    taskName: {
        type:String,
        required:true
    },
    assignTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DevelopersCol'
    },
    date: {
        type: Date
    },
    taskStatus: {
        type: String
    },
    taskDescription: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    }
})

let tasksModel = mongoose.model('TasksCol',tasksSchema);

module.exports=tasksModel;