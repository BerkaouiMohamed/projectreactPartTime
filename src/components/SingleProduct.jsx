import React, { useContext, useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";
import { ProductStore } from "../context/ProductsContext";
function SingleProduct() {
  const { id } = useParams();



  const [product, setProduct] = useState();
const navigate=useNavigate()
  useEffect(() => {
    axios
      .get("http://localhost:3000/products/" + id)
      .then((res) => setProduct(res.data));
  }, []);



  return (
    <div>
      <h1>{product?product.title:null}</h1>

      <h2 onClick={()=>navigate(-1)} >back</h2>
    </div>
  );
}

export default SingleProduct;
