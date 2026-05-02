const mongoose = require("mongoose");
const { Schema } = mongoose

let createProfile = new Schema({
    studentId:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    roll:{
        type: String,
        required: true,
    },
    FatherName: {
        type: String,
        required: true,
    },
    MotherName: {
        type: String,
        required: true,
    },
    Class:{
        type: String,
    },
    parentsPhoneNumber:{
        type: String,
        required: true,
    },
    bloodGroup:{
        type: String,
        required: true,
    },
    gender:{
        type: String,
        enum: ["male","female","custom"],
        required: true,
    },
    dob:{
        type: String,
        required: true,
    },
    Result:{
        type: String,
        required: true,
    },
    classAttendens:{
        type: String,
        required: true,
    },
    tutionFeeDate:{
        type: String,
        required: true,
    },
    tutionFeeClear:{
        type: String,
        required: true,
    },
    tutionFeeDue:{
        type: String,
        required: true,
    },

    ishold:{
        type: Boolean,
        default: false,
    },

})

module.exports = mongoose.model("profile",createProfile)