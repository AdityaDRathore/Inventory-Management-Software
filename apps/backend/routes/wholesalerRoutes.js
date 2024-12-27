const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Add a new wholesaler
router.post('/wholesalers', authMiddleware, async (req, res) => {
    const { name, phone_number, email, address } = req.body;
    const user_id = req.user.userId;
    try {
        const wholesaler = await prisma.wholesaler.create({
            data: {
                name,
                phone_number,
                email,
                address,
                user_id,
            },
        });
        res.status(201).json(wholesaler);
    } catch (error) {
        console.error('Error adding wholesaler:', error);
        res.status(400).json({ error: 'Error adding wholesaler', details: error.message });
    }
});

module.exports = router;