import { useId } from "react";
import { CartIcon } from "./Icons";
import "./Cart.css";
import { useCart } from "../hooks/useCart";

const Carrito = () => {
  const cartCheckBox = useId();
  const { cart, clearCart, addToCart } = useCart();

  function ItemInCart({ thumbnail, price, title, quantity, addToCart }) {
    return (
      <li>
        <img src={thumbnail} alt={title} />
        <strong className="text-white">{title}</strong> - {price}
        <footer className="text-white">
          <small>Quantity: {quantity}</small>
          <button onClick={addToCart}>+</button>
        </footer>
      </li>
    );
  }

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckBox}>
        <CartIcon />
      </label>
      <input id={cartCheckBox} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <ItemInCart
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />
          ))}
        </ul>

        <button className="text-white" onClick={clearCart}>
          Clear Cart
        </button>

        <button className="p-2">ClearCart</button>
      </aside>
    </>
  );
};

export default Carrito;
