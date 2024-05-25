const express = require('express');
const router = express.Router();
const Calculation = require('../models/calculation.js');

function calculate(operand1, operand2, operator) {
    switch (operator) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        case '/':
            if (operand2 === 0) throw new Error('Division by zero');
            return operand1 / operand2;
        default:
            throw new Error('Invalid operator');
    }
}

router.post('/calculate', async (req, res) => {
    const { operand1, operand2, operator } = req.body;

    try {
        const result = calculate(parseFloat(operand1), parseFloat(operand2), operator);
        const calculation = new Calculation({ operand1, operand2, operator, result });
        await calculation.save();
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/history', async (req, res) => {
    try {
        const history = await Calculation.find().sort({ createdAt: -1 });
        res.json(history);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
