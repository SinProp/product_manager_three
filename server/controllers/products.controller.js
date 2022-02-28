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

module.exports = {
    addProduct,
    getAllProducts,
    getProductById,
}