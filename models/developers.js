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