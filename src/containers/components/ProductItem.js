import "./ProductItem.css";

const ProductItem = (product) => {
  const plusProductItem = () => {
    let productItems = JSON.parse(localStorage.getItem("cart"));
    let localStorageAmount = parseInt(localStorage.getItem("amount"));
    const productIndex = productItems.findIndex(
      (productItems) => productItems.id === product.id
    );
    productItems[productIndex].quantity += 1;
    localStorage.setItem("cart", JSON.stringify(productItems));
    product.setProductItems(productItems);
    localStorage.setItem("amount", JSON.stringify(localStorageAmount + 1));
    product.setAddedAmount(localStorageAmount + 1);
    return;
  };

  const reduceProduct = () => {
    let productItems = JSON.parse(localStorage.getItem("cart"));
    let localStorageAmount = parseInt(localStorage.getItem("amount"));
    const productIndex = productItems.findIndex(
      (productItems) => productItems.id === product.id
    );

    if (productItems[productIndex].quantity > 1) {
      productItems[productIndex].quantity -= 1;
      localStorage.setItem("cart", JSON.stringify(productItems));
      product.setProductItems(productItems);
      localStorage.setItem("amount", JSON.stringify(localStorageAmount - 1));
      product.setAddedAmount(localStorageAmount - 1);
    } else {
      productItems.splice(productIndex, 1);
      localStorage.setItem("cart", JSON.stringify(productItems));
      product.setProductItems(productItems);
      localStorage.setItem("amount", JSON.stringify(localStorageAmount - 1));
      product.setAddedAmount(localStorageAmount - 1);
    }
  };

  return (
    <div className="productContainer">
      <div className="product">{product.name}</div>
      <div className="amount">{product.quantity}</div>
      <div className="paginator">
        <button onClick={plusProductItem} className="button">
          +
        </button>
        <button onClick={reduceProduct} className="button">
          -
        </button>
      </div>
    </div>
  );
};
export default ProductItem;
