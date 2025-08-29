import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Card, Button, Spinner, Alert } from "react-bootstrap";

function ProductDetails({ cart, setCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  // Fetch product by ID
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch(() => setError("Failed to load product"))
      .finally(() => setLoading(false));
  }, [id]);

  // Delete product
  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;

    try {
      await axios.delete(`https://fakestoreapi.com/products/${id}`);
      alert("Product deleted (FakeStoreAPI response only)");
      navigate("/products");
    } catch {
      alert("Delete failed");
    }
  };

  // Optional: Add to Cart
  const handleAddToCart = () => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      alert("This product is already in the cart");
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      setMessage("Product added to cart!");
      setTimeout(() => setMessage(""), 2000);
    }
  };

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center mt-5">
        <Spinner animation="border" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  if (!product) return null;

  return (
    <Container className="mt-5">
      <Card className="p-3 shadow-sm text-center">
        <Card.Img
          src={product.image}
          alt={product.title}
          style={{
            objectFit: "contain",
            height: "300px",
            maxWidth: "300px",
            margin: "0 auto",
          }}
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text className="text-primary h5">${product.price}</Card.Text>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>
            <strong>Category:</strong> {product.category}
          </Card.Text>

          {message && <Alert variant="success">{message}</Alert>}

          {/* Buttons */}
          <div className="d-flex justify-content-center gap-2 flex-wrap mt-3">
            {/* Optional Add to Cart */}
            {cart && setCart && (
              <Button variant="success" onClick={handleAddToCart}>
                Add to Cart
              </Button>
            )}

            {/* Delete button */}
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProductDetails;
