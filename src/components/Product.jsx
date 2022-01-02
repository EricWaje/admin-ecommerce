import React from 'react';
import './Product.css';

const Product = ({ img, name, price, id, deleteProd, stock }) => {
    return (
        <div className="prodContainer">
            <h2>{name}</h2>
            <div>
                <img src={img} alt={name} />
            </div>
            <h3>$ {price}</h3>
            <h3>Stock: {stock}</h3>
            <div className="priceContainer">
                <button className="delete" onClick={() => deleteProd(id)}>
                    Delete
                </button>
                <button className="edit">Edit</button>
            </div>
        </div>
    );
};

export default Product;
