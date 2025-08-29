import { useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import NavigationBar from "./Components/NavigationBar";
import ProductList from "./Components/ProductList";
import ProductDetails from "./Components/ProductDetails";
import AddProduct from "./Components/AddProduct";
import EditProduct from "./Components/EditProduct";
import Cart from "./Components/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]); // <-- Cart state

  return (
    <Router>
      {/* Pass cart to Navbar so it can display count */}
      <NavigationBar cart={cart} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />

        {/* Pass cart and setCart to ProductDetails */}
        <Route
          path="/products/:id"
          element={<ProductDetails cart={cart} setCart={setCart} />}
        />

        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/editproduct/:id" element={<EditProduct />} />

        {/* Pass cart and setCart to Cart page */}
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
