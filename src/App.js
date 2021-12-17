import "./App.css";
import Content from "./containers/Content";
import NavBar from "./NavBar";
import Vinyl from "./containers/components/Vinyl";
import Product from "./containers/components/Product";
import ProductsData from "./mok/ProductsData";
import React, { useState, useEffect } from "react";
import ToTopButton from "./containers/components/ToTopButton";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setTimeout(() => setProducts(ProductsData), 1000);
  }, []);

  const renderProducts = products.map((product) => {
    return <Product key={product.id} product={product} />;
  });

  return (
    <div>
      <NavBar />
      <Content>
        <Vinyl>{renderProducts}</Vinyl>
      </Content>
      <ToTopButton />
    </div>
  );
}

export default App;
