import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Form from './Form';
import Product from './Product';
import { edit } from '../services/product';
import { Skeleton } from '@chakra-ui/react';

const EditProd = () => {
    const [prod, setProd] = useState({});
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);
    const [valor, setValor] = useState(0);
    const { id } = useParams();
    const navigate = useNavigate();

    const handleValue = (val) => setValor(val);

    const { img, name, stock, price } = producto;

    const url = `https://hidden-beach-96657.herokuapp.com/api/products/${id}`;

    const traerProducto = async () => {
        const data = await fetch(url);
        const response = await data.json();
        setProducto(response);
        setLoading(false);
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

    const data = { ...prod, stock: valor };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await edit(data, id);
        navigate('/');
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
            {loading ? (
                <Skeleton width="170px" height="170px" />
            ) : (
                <div
                    style={{
                        display: 'flex',
                        width: '500px',
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
                            <h3 style={{ color: 'green' }}>{data.stock}</h3>
                        </div>
                    </div>
                </div>
            )}

            <Form
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                valor={valor}
                handleValue={handleValue}
            />
        </div>
    );
};

export default EditProd;
