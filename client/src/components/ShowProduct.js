import axios from "axios";
import React, { useState, useEffect} from "react";

const ShowProduct = (props) => {
    const { _id } = props;    
    const [productInfo, setProductInfo] = useState({});
    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/products/${_id}`)
        .then(response => {
            console.log(response.data);
            setProductInfo(response.data);
        })
        .catch(err => console.log(err));
    }, []);

    console.log(_id);
    return (
    <div>
        <h1>Product Listing: {productInfo.title}</h1>
        <hr />
        <p>Price: ${productInfo.price}</p>
        <p>Description: {productInfo.description}</p>

        </div>
    );
};

export default ShowProduct;