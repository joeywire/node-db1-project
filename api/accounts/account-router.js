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
});

router.get('/:id', async (req,res) => {
    try {
        const { id } = req.params; 
        const data = await Account.getById(id);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const post = req.body;
    try { 
        const freshAcct = await Account.create(post); 
        res.status(200).json(freshAcct); 
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const change = req.body; 
    try { 
        const updatedAcct = await Account.update(id, change); 
        res.status(200).json(updatedAcct); 
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}); 

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try { 
        const deletion = await Account.delete(id); 
        res.status(200).json(deletion);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

module.exports = router; 