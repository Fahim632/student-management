require('node:dns/promises').setServers(["1.1.1.1", "8.8.8.8"])

require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");

const { userRegistretionContoller, userLoginController, userLogoutController } = require('./controllers/userCcntoller');
const dbConnection = require('./config/dbConnectionConfig');
const { profileCreateController, getShowAllProfil } = require('./controllers/profileCreateController');

const app = express();

app.use(express.json());
dbConnection();

app.post('/registration',userRegistretionContoller);
app.post('/login',userLoginController);
app.post('/logout',userLogoutController);

app.post('/createprofile',profileCreateController);
app.get('/showprofiles',getShowAllProfil);


console.log(process.env.PORT);
const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})