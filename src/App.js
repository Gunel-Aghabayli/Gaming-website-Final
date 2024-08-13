import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import FAQ from "./Pages/FAQ";
import Shop from "./Pages/Shop";
import Wishlist from "./Pages/Wishlist";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import { ThemeProvider } from "./ThemeContext";
import Contact from "./Pages/Contact";
import ProductsDetail from "./Pages/ProductsDetail";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shops/products" element={<ProductsDetail />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
