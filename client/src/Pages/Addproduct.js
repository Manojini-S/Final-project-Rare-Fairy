import React, { useEffect, useState } from 'react';

function Cards() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3003/image/getImg') 
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setProducts(data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    return (
        <div>
            {products.length > 0 ? (
                products.map((product) => (
                    <div key={product._id}>
                        <h3>{product.CategoryName}</h3>
                        <p>{product.Description}</p>
                        <img src={product.imageUrl} alt={product.CategoryName} />
                    </div>
                ))
            ) : (
                <p>No products available.</p>
            )}
        </div>
    );
}

export default Cards;
