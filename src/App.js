import "./App.css";
import Content from "./containers/Content";
import NavBar from "./NavBar";
import Vinyl from "./containers/components/Vinyl";
import Product from "./containers/components/Product";
import ProductsData from "./mok/ProductsData";
import React, { useState, useEffect } from "react";
import ToTopButton from "./containers/components/ToTopButton";
import CheckOut from "./containers/CheckOut";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

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
    <Router>
      <NavBar addedAmount={addedAmount} />
      <Switch>
        <Route
          exact
          path="/"
          element={
            <Content>
              <Vinyl>{renderProducts}</Vinyl>
            </Content>
          }
        />

        <Route
          path="/CheckOut"
          element={<CheckOut setAddedAmount={setAddedAmount} />}
        />
      </Switch>

      <ToTopButton />
    </Router>
  );
}

export default App;
