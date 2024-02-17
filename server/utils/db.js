const mongoose = require('mongoose');

const  URL = "mongodb://127.0.0.1:27017/MERN_STACK";



const connectionDB = async ()=>{
    try {
        await mongoose.connect(URL);
        console.log("MongoDB is Connected");
    } catch (error) {
        console.error("This connection could not be make",error);
        process.exit(0);
    }
}

module.exports = connectionDB;