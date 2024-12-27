const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Add a new product
router.post('/products', authMiddleware, async (req, res) => {
    const { name, category, stock_quantity, price_per_unit, wholesaler_id } = req.body;
    const user_id = req.user.userId;
    console.log('Request body:', req.body);
    console.log('User ID:', user_id);
    try {
        // Check if wholesaler_id exists
        const wholesaler = await prisma.wholesaler.findUnique({ where: { wholesaler_id } });
        if (!wholesaler) {
            return res.status(400).json({ error: 'Invalid wholesaler_id' });
        }

        const product = await prisma.product.create({
            data: {
                name,
                category,
                stock_quantity,
                price_per_unit,
                wholesaler_id,
                user_id,
            },
        });
        res.status(201).json(product);
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(400).json({ error: 'Error adding product', details: error.message });
    }
});

// Retrieve all products
router.get('/products', authMiddleware, async (req, res) => {
    const user_id = req.user.userId;
    try {
        const products = await prisma.product.findMany({ where: { user_id } });
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving products' });
    }
});

// Update an existing product
router.put('/products/:id', authMiddleware, async (req, res) => {
    const { id } = req.params;
    const { name, category, stock_quantity, price_per_unit, wholesaler_id } = req.body;
    console.log('Request body:', req.body);
    console.log('Product ID:', id);
    try {
        // Check if wholesaler_id exists
        const wholesaler = await prisma.wholesaler.findUnique({ where: { wholesaler_id } });
        if (!wholesaler) {
            return res.status(400).json({ error: 'Invalid wholesaler_id' });
        }

        const product = await prisma.product.update({
            where: { product_id: id },
            data: {
                name,
                category,
                stock_quantity,
                price_per_unit,
                wholesaler_id,
            },
        });
        res.json(product);
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(400).json({ error: 'Error updating product', details: error.message });
    }
});

// Delete a product
router.delete('/products/:id', authMiddleware, async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.product.delete({ where: { product_id: id } });
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ error: 'Error deleting product' });
    }
});

module.exports = router;