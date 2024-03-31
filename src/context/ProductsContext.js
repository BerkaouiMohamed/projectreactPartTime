import axios from "axios";
import React, { createContext, useEffect, useReducer, useState } from "react";

export const ProductStore = createContext();
export const productsActions={
    getProducts:(products)=>({type:"GET_PRODUCTS",payload:products}),
    addProducts:(product)=>({type:"ADD_PRODUCTS",payload:product}),
    updateProduct:(product)=>({type:"UPDATE_PRODUCT",payload:product}),
    deleteProduct:(product)=>({type:"DELETE_PRODUCT",payload:product}),
}


function reducerProducts(state, action) {
  switch (action.type) {    
    case "GET_PRODUCTS":return action.payload;
    case "ADD_PRODUCTS":return [...state,action.payload];
    case "UPDATE_PRODUCT":return state.map((product)=>product.id===action.payload.id?action.payload:product);
    case "DELETE_PRODUCT":return state.filter((product)=>product.id!==action.payload.id);
    default: return state
  }}
function ProductsContext({ children }) {
  const [products, dispatch] = useReducer(reducerProducts, []);
  useEffect(function () {
    // fetch("https://fakestoreapi.com/products")
    // .then(res=>res.json())
    // .then(json=>setProducts(json))
    axios.get("http://localhost:3000/products").then((res) => {
      dispatch(productsActions.getProducts(res.data))
    });
  }, []);
  return (
    <ProductStore.Provider value={{ products, dispatch }}>
      {children}
    </ProductStore.Provider>
  );
}

export default ProductsContext;
