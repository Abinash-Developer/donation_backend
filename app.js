const express = require('express');
const app = express();
const connectDB = require('./config/databaseconfig');
require('dotenv').config()

const PORT = process.env.PORT|| 5555;
connectDB();
app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});