export const addProduct = (product) => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  if (cart.find((cart) => cart.id === product.id)) {
    const productIndex = cart.findIndex((cart) => cart.id === product.id);
    cart[productIndex].quantity += 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    return;
  }
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const getCart = (cart) => {
  return (cart = JSON.parse(localStorage.getItem("cart")));
};

export const reduceProduct = (product) => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const productIndex = cart.findIndex((cart) => cart.id === product.id);
  if (cart[productIndex].quantity > 1) {
    cart[productIndex].quantity -= 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    return;
  }
  localStorage.setItem("cart", JSON.stringify(cart.splice(productIndex, 1)));
};

export const deleteProduct = (product) => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const productIndex = cart.findIndex((cart) => cart.id === product.id);
  localStorage.setItem("cart", JSON.stringify(cart.splice(productIndex, 1)));
};

export const getTotalSum = (totalSum, reducer) => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  totalSum = (price, quantity) => price * quantity;
  reducer = (previousValue, totalSum) => previousValue + totalSum;
  return cart.reduce(reducer);
};
