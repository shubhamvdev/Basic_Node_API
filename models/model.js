const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    date: {
        required: true,
        type: String
    },
})

module.exports = mongoose.model('Data', dataSchema,"Holiday_Dates")