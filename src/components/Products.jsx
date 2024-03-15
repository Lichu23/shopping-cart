import { useCart } from "../hooks/useCart";

const Products = ({ products }) => {
  const { addToCart, cart, removeFromCart } = useCart();

  const checkProductInCart = (prod) => {
    return cart.some((item) => item.id === prod.id);
  };

  return (
    <div>
      <ul>
        {products.slice(0, 12).map((prod) => {
          const isProductInCart = checkProductInCart(prod);

          return (
            <li key={prod.id}>
              <img src={prod.thumbnail} alt={prod.title} />
              <div>
                <strong>{prod.title}</strong> - ${prod.price}
              </div>
              <button
                onClick={() => {
                  isProductInCart ? removeFromCart(prod) : addToCart(prod);
                }}
              >
                {isProductInCart ? "Remove" : "Add to Cart"}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Products;
