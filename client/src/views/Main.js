import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import React, { useState } from "react";

const Main = () => {
    const [submissionBoolean, setSubmissionBoolean] = useState(false);
    return (
        <>
        <ProductForm 
            setSubmissionBoolean={setSubmissionBoolean} 
            submissionBoolean={submissionBoolean}
        />
        <hr />
        <ProductList submissionBoolean={submissionBoolean} />
        </>
    );
}

export default Main;