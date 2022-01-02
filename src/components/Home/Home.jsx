import React, { useState, useEffect } from 'react';
import ProdList from '../ProdList';

const Home = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const url = 'https://hidden-beach-96657.herokuapp.com/api/products';

    const deleteProd = async (id) => {
        setData(data.filter((prod) => prod.id !== id));
        await fetch(
            `https://hidden-beach-96657.herokuapp.com/api/products/${id}`,
            {
                method: 'DELETE',
            }
        )
            .then((res) => {
                console.log(res);
            })
            .catch((error) => console.error('Error:', error));
    };

    const getProducts = async () => {
        const data = await fetch(url);
        const response = await data.json();
        setData(response);
        setLoading(false);
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            {loading ? (
                <h1 style={{ textAlign: 'center' }}>Loading...</h1>
            ) : (
                <ProdList prod={data} deleteProd={deleteProd} />
            )}
        </>
    );
};

export default Home;
