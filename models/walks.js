const mongoose = require('mongoose');

const walksSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Walks', required : true},
    quantity: { type: Number, default: 1}
});

module.exports = mongoose.model('Walks' , orderSchema);
