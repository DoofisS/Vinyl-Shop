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
  const [addedAmount, setAddedAmount] = useState(0);

  useEffect(() => {
    setTimeout(() => setProducts(ProductsData), 1000);
    let amount = parseInt(localStorage.getItem("amount"));
    if (amount) {
      setAddedAmount(amount);
    }
  }, []);

  console.log(addedAmount);

  const renderProducts = products.map((product) => {
    return (
      <Product
        key={product.id}
        product={product}
        setAddedAmount={setAddedAmount}
      />
    );
  });

  return (
    <div>
      <NavBar addedAmount={addedAmount} />
      <Content>
        <Vinyl>{renderProducts}</Vinyl>
      </Content>
      <ToTopButton />
    </div>
  );
}

export default App;
