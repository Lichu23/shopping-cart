import { CartProvider } from "./context/cart";
import Products from "./components/Products";
import { products } from "./mocks/products";
import Header from "./components/Header";
import { useFilters } from "./hooks/useFilters";
import Carrito from "./components/Carrito";

function App() {
  //filtra los products en base a los filtros (filterProducts) y una forma de actualizar los filtros (setFilters)
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <CartProvider>
      <Header />
      <Carrito />
      <Products products={filteredProducts} />
    </CartProvider>
  );
}

export default App;
