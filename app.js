const express = require('express');

const morgan = require('morgan');

const { port } = require('./src/config/serverConfig');

const { appLogger } = require('./src/middlewares/app.middleware');

const productRoutes = require('./src/routes/product.routes');

const app = express();

app.use(express.json());

app.use(morgan('combined'));

app.use(appLogger);

app.use('/products', productRoutes);

app.use((req, res) => {
res.status(404).json({ message: 'Route not found' });
});

app.listen(port, () => {
console.log(`Server running on port ${port}`);
});