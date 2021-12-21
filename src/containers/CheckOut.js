import "./CheckOut.css";
import ProductItem from "./components/ProductItem";
import { useState, useEffect } from "react";

const CheckOut = (props) => {
  const [productItems, setProductItems] = useState([]);
  useEffect(() => {
    let item = JSON.parse(localStorage.getItem("cart"));
    if (item) {
      setProductItems(item);
    }
    console.log(item);
  }, []);

  const checkOut = () => {
    console.log(productItems);
  };

  const renderProductItems = productItems.map((product) => {
    return (
      <ProductItem
        id={product.id}
        key={product.id}
        img={product.img}
        quantity={product.quantity}
        price={product.price}
        name={product.name}
        productItems={productItems}
        setProductItems={setProductItems}
        setAddedAmount={props.setAddedAmount}
      />
    );
  });

  return (
    <div>
      <div className="container">
        <div>{renderProductItems}</div>
        <div className="totalSumContainer"></div>
      </div>
      <button onClick={checkOut} className="checkoutButton">
        checkout
      </button>
    </div>
  );
};

export default CheckOut;
