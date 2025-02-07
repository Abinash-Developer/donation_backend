const mongoose = require('mongoose');
const connectDB = async (req,res)=>{
    try {
        const connectionResponse = await mongoose.connect('mongodb+srv://shubham:idO2Lm1Ub9Tzm36i@cluster0.6awju.mongodb.net');
        console.log("Database connection successfull");
    } catch (error) {
        console.log(error);
    }
}
module.exports = connectDB;
