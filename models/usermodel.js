const mongoose = require ("mongoose");


const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: { type: String, required: true},
    password: { type: String, required: true},
    isLoggedIn: { type: Boolean, default: false}
});

module.exports = mongoose.model('User', userSchema);