const express = require ('express');
const router = express.Router();
const mongoose = require ('mongoose');

const User= = require ('...models file user file');

router.post('/signup' , (req,res) => {
    const user = new User ({
        _id: new mongoose.Types.ObjectId(),
        email: req.body.email,
        password: req.body.password 
        //node bcrypt to hash the password, will be encrypted npm i bcrypt
        

    })

});







module.exports = router;