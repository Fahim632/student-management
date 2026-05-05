require('node:dns/promises').setServers(["1.1.1.1", "8.8.8.8"])

require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");

const { userRegistretionContoller, userLoginController, userLogoutController } = require('./controllers/userCcntoller');
const dbConnection = require('./config/dbConnectionConfig');
const { profileCreateController, getShowAllProfil, getSingleProfile, updateProfile, holdProfile } = require('./controllers/profileCreateController');
var cors = require('cors')

const app = express();
app.use(cors());

app.use(express.json());
dbConnection();

app.post('/registration',userRegistretionContoller);
app.post('/login',userLoginController);
app.post('/logout',userLogoutController);

app.post('/createprofile',profileCreateController);
app.get('/showprofiles',getShowAllProfil);
app.get('/getprofile/:id', getSingleProfile);

//profile update
app.post('/update/:id',updateProfile);

//hold profile
app.post('/hold',holdProfile);


console.log(process.env.PORT);
const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})