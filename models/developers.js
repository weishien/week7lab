// developers schema
let mongoose = require('mongoose');

let developersSchema = mongoose.Schema({
    name: {
        firstName: {
            type: String,
            required: true
        },
        lastName: String
    },
    level: {
        type: String,
        required: true,
        uppercase: true
    },
    address: {
        state: String,
        suburb: String,
        street: String,
        unit: String
    },
    created: {
        type: Date,
        default: Date.now
    }
})

let DeveloperModel = mongoose.model('DevelopersCol',developersSchema);

module.exports = DeveloperModel;