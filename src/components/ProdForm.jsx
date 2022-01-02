import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProdForm = () => {
    const navigate = useNavigate();

    const url = 'https://hidden-beach-96657.herokuapp.com/api/products';

    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => {
                res.json();
            })
            .catch((error) => console.error('Error:', error))
            .finally(() => {
                setFormData({});
                navigate('/');
            });
    };

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Create Product</h2>
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
        </div>
    );
};

export default ProdForm;
