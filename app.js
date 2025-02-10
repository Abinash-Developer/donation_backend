const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const connectDB = require('./config/databaseconfig');
require('dotenv').config()
const DONATIONROUTER = require('./routes/index');

const PORT = process.env.PORT|| 5555;
connectDB();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/',DONATIONROUTER);
app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});