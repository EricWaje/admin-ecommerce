import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({ img, name, price, id, deleteProd, stock }) => {
    return (
        <div className="prodContainer">
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
                <h2>{name}</h2>
                <div>
                    <img src={img} alt={name} />
                </div>
                <h3>Price: $ {price}</h3>
                <h3>Stock: {stock}</h3>
            </div>
            <div className="priceContainer">
                <button className="delete" onClick={() => deleteProd(id)}>
                    Delete
                </button>
                <Link className="edit" to={`edit/${id}`}>
                    Edit
                </Link>
            </div>
        </div>
    );
};

export default Product;
