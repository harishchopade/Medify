const {z} = require('zod');

const signupSchema = z.object({
    username:z
    .string({required_error:"Name is required"})
    .trim()
    .min(4,{message:"Name must  be ata least of 4 chars"})
    .max(255,{message:"Name must  be ata least of 255 chars"}),

    email:z
    .string({required_error:"Email is required"})
    .email({message:"Invalid Email Address"})
    .trim()
    .min(4,{message:"Email must  be ata least of 4 chars"})
    .max(255,{message:"Email must  be ata least of 255 chars"}),

    phone:z
    .string({required_error:"phone is require"})
    .trim()
    .min(10,{message:"Name must  be  of 10 chars"})
    .max(10,{message:"Name must  be  10 chars"}),

    password:z
    .string({required_error:"Password is require"})
    .trim()
    .min(7,{message:"password must  be ata least of 7 chars"})
    .max(10,{message:"password must  be ata least of 255 chars"})
});

module.exports = signupSchema;