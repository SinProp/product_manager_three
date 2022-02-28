const Product = require("../models/product.model");

const addProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json(newProduct))
        .catch(err => console.log(err));
};
const getAllProducts = (req, res) => {
    Product.find()
    .then((allProducts) => res.json(allProducts))
    .catch((err) => console.log(err));
};

const getProductById = (req, res) => {
    Product.findOne({ _id: req.params._id })
    .then((targetProduct) => res.json(targetProduct))
    .catch((err) => console.log(err));
};

const deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params._id })
    .then((erasedProduct) => res.json(erasedProduct))
    .catch((err) => console.log(err));
};

const updateProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params._id}, 
        req.body, 
        {
        new: true,
        runValidators: true,
        })
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => console.log(err))
};


module.exports = {
    addProduct,
    getAllProducts,
    getProductById,
    deleteProduct,
    updateProduct,
}