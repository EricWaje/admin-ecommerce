import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from './Form';

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
            <Form handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>
    );
};

export default ProdForm;
