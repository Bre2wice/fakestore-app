import { useState } from "react";
import axios from "axios";
import { Container, Form, Button, Alert } from "react-bootstrap";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://fakestoreapi.com/products", {
        title,
        price: parseFloat(price),
        description,
        category,
        image: "https://via.placeholder.com/300x300.png?text=Product",
      });
      setMessage(
        `✅ Product created! (ID: ${res.data.id}) — but won’t persist on refresh.`
      );
      setTitle("");
      setPrice("");
      setDescription("");
      setCategory("");
    } catch {
      setMessage("❌ Failed to create product.");
    }
  };

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <div style={{ maxWidth: "600px", width: "100%" }}>
        <h2 className="mb-4 text-center">Add a New Product</h2>
        {message && <Alert variant="info">{message}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Control
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </Form.Group>
          <Button type="submit" variant="primary">
            Add Product
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default AddProduct;
