FakeStore E-Commerce App

This is a React-based **FakeStore E-Commerce App** that interacts with the [FakeStoreAPI](https://fakestoreapi.com/) to demonstrate CRUD operations, state management, routing, and responsive design using React-Bootstrap.


Project Overview

This project allows users to:

- View a list of products from FakeStoreAPI
- View details for each product
- Add new products
- Edit existing products
- Delete products
- Add products to a shopping cart (optional feature)
- Navigate through a responsive, mobile-friendly interface

> **Note:** FakeStoreAPI is a testing API. POST, PUT, and DELETE requests return successful responses, but changes will not persist on the API.


 Technologies Used

- React 18 + Vite
- React Router DOM
- Axios for API requests
- React-Bootstrap for UI styling and responsiveness
- JavaScript (ES6+)
- CSS

---

 Pages & Features

 Home Page
- Welcome message and introduction
- Button to navigate to Product Listing page
- Responsive and styled with React-Bootstrap

 Product Listing Page
- Fetches products from FakeStoreAPI
- Displays product image, title, and price in a responsive grid
- "View Details" button for each product
- Handles loading and error states

 Product Details Page
- Displays product image, title, description, category, and price
- **Delete Product** button with confirmation and redirect
- **Optional Add to Cart** button implemented
- Handles loading and error states
- Fully responsive layout

 Add Product Page
- Form to create a new product (title, price, description, category)
- Sends POST request to FakeStoreAPI
- Shows success/failure messages
- Fully responsive and styled using React-Bootstrap

 Edit Product Page
- Fetches existing product by ID
- Prefills form fields with product data
- Allows updating product via PUT request
- Displays success/failure messages
- Fully responsive layout

 Cart (Optional Feature)
- Users can add products to a cart from the Product Details page
- Cart page displays all selected products, quantity, and total price
- Users can remove items from the cart
- Navbar shows cart item count
- Fully responsive table layout

 Navigation Bar
- Links to Home, Products, Add Product, and Cart
- Responsive with a collapsible menu for mobile devices
- Highlights current page using React Router NavLink



 Project Highlights

- State Management: Used `useState` for product data, cart, and form inputs
- API Handling: Axios used to fetch, create, update, and delete products
- Routing: React Router DOM manages navigation between pages
- Styling & Layout: React-Bootstrap components and responsive design
- User Feedback: Loading spinners, success alerts, and error messages included
- **Optional Features:** Shopping cart functionality implemented
