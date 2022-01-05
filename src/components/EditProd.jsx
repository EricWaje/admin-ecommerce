import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Form from './Form';
import Product from './Product';

const EditProd = () => {
    const [prod, setProd] = useState({});
    const [producto, setProducto] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    const { img, name, stock, price } = producto;

    const url = `https://hidden-beach-96657.herokuapp.com/api/products/${id}`;

    const traerProducto = async () => {
        const data = await fetch(url);
        const response = await data.json();
        setProducto(response);
    };

    useEffect(() => {
        traerProducto();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProd({
            ...prod,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(prod),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => {
                res.json();
            })
            .catch((error) => console.error('Error:', error))
            .finally(() => {
                navigate('/');
            });
    };

    const x = '==>';

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginTop: '30px',
            }}
        >
            <div
                style={{
                    display: 'flex',
                }}
            >
                <img src={img} />
                <div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h3
                            style={{
                                textDecoration: 'line-through',
                                color: 'red',
                            }}
                        >
                            {name}
                        </h3>
                        <span>{x}</span>
                        <h3 style={{ color: 'green' }}>{prod.name}</h3>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h3
                            style={{
                                textDecoration: 'line-through',
                                color: 'red',
                            }}
                        >
                            {price}
                        </h3>
                        <span>{x}</span>
                        <h3 style={{ color: 'green' }}>{prod.price}</h3>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h3
                            style={{
                                textDecoration: 'line-through',
                                color: 'red',
                            }}
                        >
                            {stock}
                        </h3>
                        <span>{x}</span>
                        <h3 style={{ color: 'green' }}>{prod.stock}</h3>
                    </div>
                </div>
            </div>
            <Form handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>
    );
};

export default EditProd;
