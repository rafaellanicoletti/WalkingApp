const mongoose = require ('mongoose');
const User= require ('../models/usermodel');

module.exports = app => {

app.post('/signup' , (req,res) => {
    const user = new User ({
        _id: new mongoose.Types.ObjectId(),
        email: req.body.email,
        password: req.body.password,
        isLoggedIn: false
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

    app.post("/login", (req,res)=> {
        User.find({ email: req.body.email , password: req.body.password})
        .exec()
        .then(user => {
            console.log(user);
            if (user.length < 1){
                return res.status(404).json({
                    message: "Mail not found"
                });
            } else{
                let query= {email: user[0].email, password: user[0].password};
                console.log("query", query)
                User.update(query, {isLoggedIn: true})
       
                    .then(result => {
                        console.log(result);
                        res.status(200).json({
                            message: 'User logged in!!'
                        })
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(500).json({
                            error: err
                        })
                    });
            }
           
        })
    });

    app.delete("/:userId", (req,res)=> {
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
}
