const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);
const Schema = mongoose.Schema;

connect.then((db) => {
    console.log("Connected correctly to server");
}, (err) => { console.log(err); });


const leaderSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    abbr: {
        type: String,
        default: ''
    },
    featured: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});


var leaders = mongoose.model('Leader', leaderSchema);

module.exports = leaders;