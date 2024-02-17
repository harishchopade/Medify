const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({dest: 'public/upload/images/'});


router.post('/profile', upload.single('photo'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    console.log(req.file);
  })


// const path = require('path')

// const uploadForm = multer({
//     dest: './upload/images',  
// });

// app.post("/upload",uploadForm.single('profile'),(req,res)=>{
//     console.log(req.file);
//     res.json({ message: 'Image uploaded successfully!' });
// });

module.exports = router;