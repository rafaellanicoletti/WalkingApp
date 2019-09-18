const mongoose = require('mongoose');

const orderWalkSchema = mongoose.Schema ({
    _id: mongoose.Schema.Types.ObjectId,
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Walks', required: true},
    quantity : { type: Number, default: 1}
});

module.exports =mongoose.model('orderWalks', orderWalkSchema)
