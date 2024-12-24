const express = require('express');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/api', productRoutes);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});