import { Container, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Cart({ cart, setCart }) {
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Container className="mt-5">
      <h2 className="mb-4 text-center">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center">
          Your cart is empty. <Link to="/products">Browse products</Link>
        </p>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>{item.quantity}</td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="3" className="text-end fw-bold">
                Total:
              </td>
              <td>${totalPrice.toFixed(2)}</td>
            </tr>
          </tbody>
        </Table>
      )}
    </Container>
  );
}

export default Cart;
