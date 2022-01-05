import React from 'react';

const Form = ({ handleSubmit, handleChange }) => {
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Product Name"
                onChange={handleChange}
                name="name"
            />
            <input
                type="number"
                placeholder="Product Price"
                onChange={handleChange}
                name="price"
            />
            <input
                type="number"
                placeholder="Product Stock"
                onChange={handleChange}
                name="stock"
            />
            <input
                type="text"
                placeholder="Img string"
                onChange={handleChange}
                name="img"
            />
            <button>Submit</button>
        </form>
    );
};

export default Form;
