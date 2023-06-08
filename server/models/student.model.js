const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    gr_no: {
        type: Number,
        required: true,
        unique: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    gender: {
        type: String,
        trim: true,
    },
    class:{
        type: String,
        required: true,
        trim: true,
    },
    DOB: {
        type: Date,
        trim: true,
    },
    address: {
        type: String,
        trim: true,
    },
    father_name: {
        type: String,
        trim: true,
    },
    status: {
        type: String,
        required: true,
        trim: true,
    },
    fee: {
        type: Number,
        trim: true,
    },
},
    { timestamps: true }
);

Student = mongoose.model("student", StudentSchema);

module.exports = Student; 