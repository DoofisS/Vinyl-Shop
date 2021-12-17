import "./Product.css";

const Product = ({ product }) => {
  return (
    <div className={"plastinka " + product.image}>
      <div className="vinyl-content">
        {product.description}
        <p>
          <button>{"Buy " + product.price}</button>
        </p>
      </div>
    </div>
  );
};
export default Product;
