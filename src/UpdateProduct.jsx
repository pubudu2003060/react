import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./UpdateProduct.css";

function UpdateProductDiv() {

  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState({ name: "", price: "", description: "" });
  const [loading, setLoading] = useState(true);

  // Fetch product details based on ID
  const fetchProduct = async () => {
    try {
      const url = `http://localhost:8081/getproduct/${id}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const productData = await response.json();
      setProduct(productData); // Set fetched data to state
      setLoading(false);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  // Call fetchProduct when the component mounts
  useEffect(() => {
    fetchProduct();
  }, [id]); // This will run when the ID changes

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = `http://localhost:8081/editproduct/${id}`;
      const response = await fetch(url, {
        method: "PUT", // Using PUT for update
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product), // Send updated product data
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // You can redirect or show a success message here
      console.log("Product updated successfully");
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  // Display a loading message if the product data is still being fetched
  if (loading) {
    return <p>Loading product...</p>;
  }

  return (
    <div>
      <h4>Update Product</h4>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={product.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="price">Price: </label>
          <input
            type="text"
            name="price"
            id="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="description">Description: </label>
          <textarea
            name="description"
            id="description"
            value={product.description}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Update Product</button>
      </form>
    </div>
  );
}

export default UpdateProductDiv;
