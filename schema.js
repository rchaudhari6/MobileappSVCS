

var mongoose = require("mongoose")
var Schema = mongoose.Schema

var note = new Schema({

    username: String,
    password: String

})


const data = mongoose.model("data", note) //creates data object
module.exports = data

