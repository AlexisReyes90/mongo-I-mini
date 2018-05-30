const mongoose = require('mongoose');

// create schema here

const definition = {
    species: {
        type: String,
        required: true,
    },
    latinName: {
        type: String,
        required: true,
    },
    createdOn: {
        type: Date,
        default: Date.now,
    },
};

const bearSchema = new mongoose.Schema(definition);

// model -> schema -> name of collection inside of the database

const bearModel = mongoose.model('Bear', bearSchema, 'bears');

module.exports = bearModel;