import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigator from "./components/Navigator";
import AddProduct from "./components/AddProduct";
import ProductsContext from "./context/ProductsContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SingleProduct from "./components/SingleProduct";
import ShowProducts from "./components/ShowProducts";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <ToastContainer/>

  <BrowserRouter>
  <Navigator/>
  <ProductsContext>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/add" element={<AddProduct />} />
    <Route path="/products" element={<ShowProducts/>} />

    <Route path="/products/:id" element={<SingleProduct/>} />
  </Routes>
  </ProductsContext>
    </BrowserRouter>
  </>
);

