const express = require ('express');
const router = express.Router();
const mongoose = require ('mongoose');

//const bcrypt = require ('bcrypt');

const User= require ('...models file user file');

router.post('/signup' , (req,res) => {

    // bcrypt.hash(req.body.email, 10, (err, hash) => {
            //if (err){
                //return res.status(500).json({
                    //error: err
                // })
            // } else {
                // 
            // }

    const user = new User ({
        _id: new mongoose.Types.ObjectId(),
        email: req.body.email,
        password: req.body.password 
        //node bcrypt to hash the password, will be encrypted npm i bcrypt
        //password : 
        })

        user.save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'User created'
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error:err
            })
        });

    })

// });

router.delete("/:userId", (req,res)=> {
    User.remove({ _id: req.params.userId})
    .exec()
    .then(result => {
        res.status(200).json({
            message: "user deleted"
        });
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});


//NEED TO IMPORT USER ROUTES IN APP.JS


module.exports = router;