import React, { useState } from "react";

function Item({ name, category }) {

  const [cart, setCart] = useState(false);

  function handleCart() {
    setCart((cart) => !cart)
  }

  return (
    <li className={cart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={cart ? "remove" : "add"} onClick={handleCart}>{cart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
