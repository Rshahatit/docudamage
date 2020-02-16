const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    itemID: { type: String, required: true},
    description: { type: String, required: true},
    cost: { type: Number, required: true},
}, {
    timestamps: true,
});

const Item = mongoose.model('item', itemSchema);

module.exports = Item;