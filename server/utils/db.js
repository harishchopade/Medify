const mongoose = require('mongoose');

const  URL = "mongodb://localhost:27017/MERN_STACK";


const connectionDB = async ()=>{
    try {
        await mongoose.connect(URL);
        console.log("MongoDB is Connected")
    } catch (error) {
        console.error("This connection could not be make");
        process.exit(0);
    }
}

module.exports = connectionDB;