import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container className="mt-5 d-flex flex-column justify-content-center align-items-center text-center">
      <h1 className="mb-3">Welcome to FakeStore</h1>
      <p className="text-muted mb-4">
        Browse products, view details, and try adding or deleting products (API
        responses are mock only).
      </p>
      <Button as={Link} to="/products" variant="primary">
        Go to Products
      </Button>
    </Container>
  );
}

export default Home;
