import { useState, useEffect } from "react";

function UpdateProduct(id) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(True);

    const renderProduct = async () => {
        try {
            const url = "http://localhost:8081/product/" + id;

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const update = await response.json();
            setData(update);
            setLoading(false);

        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        renderProduct();
    })

}

function UpdateProductDiv(props) {
    return (
        <div>
            <h4>Update Product</h4>

            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" value={props.name}/>
            </div>

            <div>
                <label htmlFor="price">Price: </label>
                <input type="text" name="price" id="price" value={props.price}/>
            </div>

            <div>
                <label htmlFor="description">Description: </label>
                <input type="text" name="description" id="description" value={props.description}/>
            </div>

            <div>
                <input type="hidden" name="id" id="id" value={props.id}/>
            </div>

            <button>Update Product</button>
        </div>
    )
}