const User = require("../models/userSchema");
const bcrypt = require('bcrypt');


let userRegistretionContoller = async (req, res) => {

    const { username, email, password } = req.body;

    try {
        let existingUser = await User.findOne({ email: email })
        if (existingUser) {
            return res.json({
                status: false,
                message: "email allready used",
            })
            // existingUser.save();
        }

        const hash = bcrypt.hashSync(password, 10);
        // console.log(hash);

        let createUser = new User({
            username: username,
            email: email,
            password: hash,
        })
        createUser.save();

        res.send({
            id: createUser._id,
            username: createUser.username,
            email: createUser.email,
            status: true,
            message: "registration done",
        });
        console.log("hit");

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "server error"
        });
    }

}

let userLoginController = async (req, res) => {
    const { email, password } = req.body
    let existingUser = await User.findOne({ email: email })
    if(existingUser.islogin){
        return res.status(400).json({
            success: false,
            message: "please logout from anther device"
        })
    }

    if (!existingUser) {
        return res.status(400).json({
            success: false,
            message: "login successful",
        })
    }

     let pass = bcrypt.compareSync(password, existingUser.password);
     if(pass){
        existingUser.islogin= true,
        existingUser.save();
        return res.status(400).json({
            success: true,
            message: "login successful",
        })
     }else {
        return res.status(401).json({
            success: false,
            message: "Invalid Credential",
        })
    }
}

let userLogoutController = async (req, res) =>{
    const {id} = req.body;
    let existinguser = await User.findOne({_id:id})
    existinguser.islogin = false
    existinguser.save();
    return res.status(200).json({
        success: true,
        message: "Logout successful",
    })
}

module.exports = { userRegistretionContoller, userLoginController, userLogoutController }