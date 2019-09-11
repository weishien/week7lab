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

let url = "mongodb://localhost:27017/taskdb";

mongoose.connect(url,{useNewUrlParser:true},function(err) {
    if (err) {
        throw err;
    }
    
})

app.listen(8080);