const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const docuSchema = new Schema({
    docuname: { type: String, required: true},
    description: { type: String, required: true},
    cost: { type: Number, required: true},
    date: { type: Date, required: true},
}, {
    timestamps: true,
});

const Docu = mongoose.model('Docu', docuSchema);

module.exports = Docu;