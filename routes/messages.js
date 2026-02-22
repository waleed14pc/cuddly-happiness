// Message endpoints

const express = require('express');
const router = express.Router();

// Sample message endpoints

/**
 * @route GET /messages
 * @desc Get all messages
 */
router.get('/', (req, res) => {
    res.status(200).json({ message: 'Fetch all messages' });
});

/**
 * @route POST /messages
 * @desc Create a new message
 */
router.post('/', (req, res) => {
    res.status(201).json({ message: 'Message created' });
});

module.exports = router;