import React, { useState, useEffect } from 'react';
import ProdList from '../ProdList';
import { Skeleton } from '@chakra-ui/react';
import { all } from '../../services/product';

const Home = () => {
    const { data, loading } = all();

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
                </div>
            ) : (
                <ProdList prod={data} deleteProd={deleteProd} />
            )}
        </>
    );
};

export default Home;
