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

app.use(express.urlencoded({
    extended:false
}));

// import model for tasks and developers
let Task = require(__dirname + '/models/tasks');
let Developer = require(__dirname  + '/models/developers');

// path for mongoose
let url = "mongodb://localhost:27017/week7lab";

mongoose.connect(url,{useNewUrlParser:true},{useUnifiedTopology:true},function(err) {
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
});

app.get('/update', function(req,res) {
    res.sendFile(viewPaths + '/update.html');
});

app.get('/insertDeveloper',function(req,res) {
    res.sendFile(viewPaths + '/insertDeveloper.html');
});

app.get('/listDevelopers', function(req,res) {
    Developer.find().exec(function(err,data) {
        if(err) {throw err};
        res.render(viewPaths + '/listDevelopers',{
            developer : data
        });
    });
});

app.post('/newDeveloper', function(req,res) {
    let developer = new Developer ({
        _id: new mongoose.Types.ObjectId(),
        name: {
            firstName: req.body.firstName,
            lastName: req.body.lastName
        },
        level: req.body.level,
        address: {
            state: req.body.state,
            suburb: req.body.suburb,
            street: req.body.street,
            unit: req.body.unit
        }
    });

    developer.save(function(err) {
        if (err) {
            console.log('Error saving developer!');
            throw err;
        }
        console.log('Developer saved successfully!');
    })

    res.redirect('/listDevelopers');
})

app.listen(8080);