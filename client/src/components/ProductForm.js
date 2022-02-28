import React, { useState } from "react";
import axios from "axios";
import "../App.css";

const ProductForm = (props) => {
    const {submissionBoolean, setSubmissionBoolean} = props; // creates a prop that acts as our lifted state variable
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
        axios.post("http://localhost:8000/api/products", newProductData)
        .then((response) => {
            console.log(response);
            
            setTitle("") // sets form input back to empty string
            setPrice("")
            setDescription("")
            setSubmissionBoolean(!submissionBoolean); // through a lifted state boolean we go back and forth on whether or not a new entry was submitted to the db
            })
        .catch((err) => console.log(err));
    };

    return (
    
    // Form setup or front end formatting
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
        <button type="submit">Submit</button>
    </form>
    );

};

export default ProductForm;