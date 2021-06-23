const productsHandler = require('./handers/product');
module.exports = [
   
        {
            method: 'GET',
            path: '/api/v1/products',
            handler: productsHandler.getAll
        },

        {
            method: 'POST',
            path: '/api/v1/products',
            handler: productsHandler.save
        }
]