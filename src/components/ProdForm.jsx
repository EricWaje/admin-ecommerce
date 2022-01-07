import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from './Form';

const ProdForm = () => {
    const navigate = useNavigate();

    const url = 'https://hidden-beach-96657.herokuapp.com/api/products';

    const [formData, setFormData] = useState({});
    const [valor, setValor] = useState(0);

    const handleValue = (val) => setValor(val);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const datos = { ...formData, stock: valor };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('hola');
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(datos),
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
            <Form
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                valor={valor}
                handleValue={handleValue}
            />
        </div>
    );
};

export default ProdForm;
