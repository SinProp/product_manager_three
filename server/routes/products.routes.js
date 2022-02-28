const ProductController = require("../controllers/products.controller");


module.exports = (app) => {
    app.post('/api/products', ProductController.addProduct);
    app.get('/api/products', ProductController.getAllProducts);
    app.get('/api/products/:_id', ProductController.getProductById);
    app.delete('/api/products/:_id', ProductController.deleteProduct);
    app.put('/api/products/:_id', ProductController.updateProduct)
};