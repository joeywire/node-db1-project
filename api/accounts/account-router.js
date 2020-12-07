const express = require('express');
const Account = require('./account-model'); 

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const data = await Account.getAll();
        res.status(200).json(data); 
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

module.exports = router; 