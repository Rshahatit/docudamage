const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const docuSchema = new Schema({
    name: { type: String, required: true},
    claim: { type: String, required: true},
    address: { type: String, required: true},
    zipcode: { type: Number, required: true},
    description: { type: String, required: true},
    cost: { type: Number, required: true},
    dateofaccident: { type: Date, required: true},

}, {
    timestamps: true,
});

const Docu = mongoose.model('Docu', docuSchema);

module.exports = Docu;