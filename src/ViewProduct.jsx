import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import "./ViewProduct.css";

function ProductDiv() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const RenderProducts = async () => {
        try {
            const response = await fetch('http://localhost:8081/getproducts');

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const products = await response.json();

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
        <div className='main'>
            <h2>Product List</h2>
            <div className="product-list">

                {data.map((product, index) => (
                    <Product
                        key={index}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        id={product.id}
                    />
                ))}
            </div>
        </div>

    );
}

function Product(props) {
    return (
        <div className='product-box'>
            <p>{props.name}</p>
            <p>${props.price}</p>
            <p>{props.description}</p>

            <div className='nav'>
                <nav>
                    <Link to={'/updateproduct/'+props.id}><button>Update Product</button></Link>
                    <Link to="#"><button>Create an Order</button></Link>
                </nav>

            </div>


        </div>
    );
}

export default ProductDiv;
