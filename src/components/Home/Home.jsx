import React, { useState, useEffect } from 'react';
import ProdList from '../ProdList';
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react';

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
                res;
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
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        marginTop: '40px',
                    }}
                >
                    <Skeleton height="400px" width="200px" />
                    <Skeleton height="400px" width="200px" />
                    <Skeleton height="400px" width="200px" />
                    <Skeleton height="400px" width="200px" />
                    <Skeleton height="400px" width="200px" />
                </div>
            ) : (
                <ProdList prod={data} deleteProd={deleteProd} />
            )}
        </>
    );
};

export default Home;
