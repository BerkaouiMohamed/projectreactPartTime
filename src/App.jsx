import React, { useContext } from "react";
import Navigator from "./components/Navigator";
import CardProduct from "./components/Cardproduct";
import { ProductStore } from "./context/ProductsContext";

function App() {
  const {products}=useContext(ProductStore)
  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((product) => {
          return <CardProduct key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}

export default App;
