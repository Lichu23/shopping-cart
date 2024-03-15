import { useContext } from "react";
import { CartContext } from "../context/cart.jsx";

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("usando custom hook en un sitio q no puedes");
  }

  return context;
};
