const mongoose = require('mongoose');

const calculationSchema = new mongoose.Schema({
    operand1: Number,
    operand2: Number,
    operator: String,
    result: Number,
    CreateAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Calculation', calculationSchema);