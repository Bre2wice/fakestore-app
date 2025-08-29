import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        if (Array.isArray(res.data)) setProducts(res.data);
        else setError("Unexpected API response");
      })
      .catch(() => setError("Failed to load products"))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <Container className="d-flex justify-content-center align-items-center mt-5">
        <Spinner animation="border" />
      </Container>
    );

  if (error)
    return (
      <Container className="mt-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );

  return (
    <Container className="mt-4">
      <h1 className="mb-4 text-center">Products</h1>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4 justify-content-center">
        {products.map((p) => (
          <Col key={p.id}>
            <Card className="h-100 shadow-sm text-center">
              <Card.Img
                variant="top"
                src={p.image}
                alt={p.title}
                style={{ height: "200px", objectFit: "contain" }}
              />
              <Card.Body>
                <Card.Title className="fs-6 text-truncate">
                  {p.title}
                </Card.Title>
                <Card.Text className="fw-bold">${p.price.toFixed(2)}</Card.Text>
                <Link
                  to={`/products/${p.id}`}
                  className="btn btn-primary btn-sm"
                >
                  View Details
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;
