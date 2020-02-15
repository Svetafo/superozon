const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    img: String,
    name: String,
    price: Number,
    guarantee: String,
    screenResolution: String,
    screenDiagonale: String,
    size: String,
    cameraResolution: Number,
    internalMemory: String,
    RAM: String,
    rating: Number,
    color: Array,
});



module.exports = mongoose.model('Item', ItemSchema);


