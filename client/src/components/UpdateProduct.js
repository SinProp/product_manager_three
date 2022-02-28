import axios from "axios";
import React, { useState, useEffect} from "react";
import { Link, navigate }from "@reach/router"

const UpdateProduct = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProductData = {
            title,
            price,
            description,
        };
        axios.put(`http://localhost:8000/api/products/${_id}`, newProductData)
        .then((response) => {
            console.log(response);
            navigate("/");
            })
        .catch((err) => console.log(err));
    };


    const { _id } = props;    
    // const [productInfo, setProductInfo] = useState({});
    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/products/${_id}`)
        .then(response => {
            console.log(response.data);
            setTitle(response.data.title);
            setPrice(response.data.price);
            setDescription(response.data.description);
            // setProductInfo(response.data);
        })
        .catch(err => console.log(err));
    }, []);

    console.log(_id);
    return (
    <div>
        <h1>Update Product Form</h1>
        <form onSubmit={handleSubmit}> 
        <h1>Submit a Product Listing: </h1> 
        <div className="form-div">Title:{" "} <input type="text" 
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        />
        </div>
        <div className="form-div">Price:{" "} <input type="text" 
        onChange={(e) => setPrice(e.target.value)}
        value={price}
        />
        </div>
        <div className="form-div">Description:{" "} <input type="text" 
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        />
        </div>
        <button type="submit" value="Update">Update</button>
    </form>

    </div>
    );
};

export default UpdateProduct;