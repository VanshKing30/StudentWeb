const mongoose = require("mongoose");

const studSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    department : {
        type : String,
        required : true,
        maxLength : 50
    },
    rollNo : {
        type : Number,
        required : true
    },
    yearOfStudy : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model("studentSchema" , studSchema)

