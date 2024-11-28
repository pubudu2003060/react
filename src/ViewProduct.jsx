import { useState, useEffect } from 'react';

function ProductDiv() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const RenderProducts = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/products');

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const products = await response.json();
            console.log(products);

            setData(products);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };


    useEffect(() => {
        RenderProducts();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>Product List</h2>
            {data.map((product, index) => (
                <Product
                    key={index}
                    name={product.name}
                    price={product.price}

                />
            ))}
        </div>
    );
}

function Product(props) {
    return (
        <div>
            <p>{props.name}</p>

            <p>${props.price}</p>
        </div>
    );
}

export default ProductDiv;
