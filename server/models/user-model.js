const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require("dotenv").config();


const userSchema = new mongoose.Schema({
    username:{
        type:String,
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    isAdmin:{
        type:Boolean,
        default:false 
    },
});

// Hashing a password using Bcryptjs 
userSchema.pre("save",async function(next){
    // console.log("pre method",this);
    const user = this;
    console.log(user.isModified("password"));

    if(! user.isModified("password")){
        next();
    }

    try {
        const saltround = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password,saltround);
        user.password = hash_password
        console.log(hash_password);
    } catch (error) {
        next(error);
    }

     
})

//JWT Token
userSchema.methods.generateToken=function(){
    try {
        return jwt.sign({
            userId:this._id.toString(),
            email:this.email,
            isAdmin:this.isAdmin
        },
        process.env.JWT_KEY,
        // ${process.env.JWT_SECRET_KEY}
        {
            expiresIn:"30d"
        }
        )

    } catch (error) {
        console.log(error);
        
    }
}


// Password matching
userSchema.methods.passwordChecker=async function(newpass){
    try {
        return  await bcrypt.compare(newpass,this.password);

        }

     catch (error) {
        console.log(error,"Indicating password Checker")
    }
}
  

const User = new mongoose.model("User",userSchema);

module.exports = User;