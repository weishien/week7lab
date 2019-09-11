let express = require('express');
let mongoose = require('mongoose');
let ejs = require('ejs');

let app = express();

// configure express to handle machine
// tell express wherever in html, run this machine
app.engine('html',ejs.renderFile);
app.set('view engine','html');

let url = "mongodb://localhost:27017/taskdb";

mongoose.connect(url,{useUnifiedTopology:true},function(err) {
    if (err) {
        throw err;
    }
    
})