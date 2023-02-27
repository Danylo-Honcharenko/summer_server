const {Schema, model} = require('mongoose');

const Entry = new Schema({
    title: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    dateBuy: {
        type: String,
        require: true
    },
    dateCreate: {
        type: String
    }
});

module.exports = model('Entry', Entry);