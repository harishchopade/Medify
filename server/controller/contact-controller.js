const Contact = require('../models/contact-model.js');

const contactForm=async(req,res)=>{
    try {
        const response = req.body;
        await Contact.create(response);
        return res.status(200).json({msg:"message send suucesfully"});
    } catch (error) {
        return res.status(401).json({msg:"Internl error"});
    }
}

module.exports = contactForm;