import { Link, navigate } from "@reach/router";
import axios from "axios";
import React, { useState, useEffect} from "react";
import "../App.css";


const ProductList = (props) => {
    const { submissionBoolean } = props;
    const [products, setProducts] = useState([]);

    // use effect runs after each post returning html that maps out each product's title
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
        .then(response => {
            console.log(response.data);
            setProducts(response.data);
        })
        .catch(err => console.log(err));
    }, [submissionBoolean]);

const deleteFilter = (idFromBelow) => {
    axios.delete(`http://localhost:8000/api/products/${idFromBelow}`)
    .then(response => {
        console.log(response.data);
        setProducts(products.filter((product, index) => product._id !== idFromBelow));
    })
    .catch(err => console.log(err));
}

    return (
    <>
        <h1>Product Listings: </h1> 
        {/* maps all product entries and lists the title as a clickable link by giving the products id in the link function, this takes us to a page featuring just product details */}
        {products.map((product, index) =>(
            <div className="form-div" key={index}>
                {" "}
                <Link  to={`${product._id}`}> - {product.title} - 
                </Link>
                <button className="button-margin" onClick={()=>navigate(`/edit/${product._id}`)}>Edit</button>
                <button className="button-margin" onClick={()=>deleteFilter(product._id)}>Delete</button>
            </div>
        ))}
    
    </>
    );
}

export default ProductList;