import "./Product.css";
import { addProduct } from "../../Services/CartService";

const Product = ({ product, setAddedAmount }) => {
  const addToLocalStorage = () => {
    let localStorageAmount = parseInt(localStorage.getItem("amount"));

    if (localStorageAmount) {
      localStorage.setItem("amount", JSON.stringify(localStorageAmount + 1));
    } else {
      localStorage.setItem("amount", "1");
    }
    setAddedAmount(localStorageAmount + 1);
    addProduct(product);
  };

  return (
    <div className={"plastinka " + product.image}>
      <div className="vinyl-content">
        {product.description}
        <p>
          <button onClick={addToLocalStorage}>{"Buy " + product.price}</button>
        </p>
      </div>
    </div>
  );
};
export default Product;
