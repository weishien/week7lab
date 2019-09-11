let express = require('express');
let mongoose = require('mongoose');
let ejs = require('ejs');

// initialise local path to access files from different folders
let viewPaths = __dirname + '/public';

let app = express();

// configure express to handle machine
// tell express wherever in html, run this machine
app.engine('html',ejs.renderFile);
app.set('view engine','html');

// tells express which file to look for static assets
app.use(express.static('img'));
app.use(express.static('css'));

let url = "mongodb://localhost:27017/week7lab";

mongoose.connect(url,{useNewUrlParser:true},function(err) {
    if (err) {
        console.log("Error connecting to mongoose!");
        throw err;
    }
})

// check pathname and return static homepage
app.get('/', function(req,res) {
    res.sendFile(viewPaths + '/index.html');
});

app.get('/listTasks', function(req,res) {
    col.find({}).toArray(function(err,data) {
        res.render(viewPaths + '/listTasks.html', {
            task : data
        });
    });
});

app.get('/newTask', function(req,res) {
    res.sendFile(viewPaths + '/newTask.html');
});

app.get('/deleteTask', function(req,res) {
    res.sendFile(viewPaths + '/deleteTask.html');
});

app.get('/deleteCompleted', function(req,res) {
    res.sendFile(viewPaths + '/deleteCompleted.html');
})

app.get('/update', function(req,res) {
    res.sendFile(viewPaths + '/update.html');
})

app.get('/insertDeveloper',function(req,res) {
    res.sendFile(viewPaths + '/insertDeveloper.html');
})

app.get('/listDevelopers', function(req,res) {
    res.sendFile(viewPaths + '/listDevelopers.html');
})

app.listen(8080);