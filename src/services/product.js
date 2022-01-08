import React, { useState, useEffect } from 'react';

const url = 'https://hidden-beach-96657.herokuapp.com/api/products';

//get products
export const all = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getProducts = async () => {
        try {
            const datos = await fetch(url);
            const response = await datos.json();
            setData(response);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return { data, loading };
};

//create product
export const create = async (datos) => {
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
        .catch((error) => console.error('Error:', error));
};

//edit product
export const edit = async (datos, id) => {
    await fetch(`${url}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => {
            res.json();
        })
        .catch((error) => console.error('Error:', error));
};
