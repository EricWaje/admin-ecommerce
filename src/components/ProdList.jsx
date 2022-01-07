import React from 'react';
import Product from './Product';

const ProdList = ({ prod, deleteProd }) => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginTop: '30px',
            }}
        >
            {prod?.map((product) => (
                <Product
                    key={product.id}
                    {...product}
                    deleteProd={deleteProd}
                />
            ))}
        </div>
    );
};

export default ProdList;
