require('node:dns/promises').setServers(["1.1.1.1", "8.8.8.8"])

require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");

const { userRegistretionContoller } = require('./controllers/userCcntoller');

const app = express();

app.use(express.json());
mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("database connected");
})

app.post('/registration',userRegistretionContoller);



console.log(process.env.PORT);
const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})