const profile = require("../models/profileCreatModel");

let profileCreateController = async (req, res) => {
    const { name, roll, FatherName, MotherName, Class, parentsPhoneNumber, bloodGroup, gender, dob, Result, classAttendens, tutionFeeDate, tutionFeeClear,tutionFeeDue } = req.body;

    // id create kora
    let fastThreeLetter = name.slice(0, 3);
    let rendomNumber =  Date.now().toString();
    let sid = fastThreeLetter + rendomNumber.slice(-3);

    let profileCreate = new profile({
        studentId: sid,
        name: name,
        roll: roll,
        FatherName,
        MotherName,
        Class,
        parentsPhoneNumber,
        bloodGroup: bloodGroup,
        gender: gender,
        dob: dob,
        Result,
        classAttendens,
        tutionFeeDate,
        tutionFeeClear,
        tutionFeeDue,
        
    });
    profileCreate.save();

    res.status(201).json({
        status: true,
        message : "Profile Created",
    })
}

let getShowAllProfil = async (req,res) =>{
    let data = await profile.find({})
    res.status(200).json({
        status: true,
        message: "all profile",
        data: data,
    })
}

module.exports = { profileCreateController,getShowAllProfil,}