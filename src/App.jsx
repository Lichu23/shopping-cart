import Products from "./components/Products";
import { products } from "./mocks/products";
import Header from "./components/Header";
import { useFilters } from "./hooks/useFilters";

function App() {
  //filtra los products en base a los filtros (filterProducts) y una forma de actualizar los filtros (setFilters)
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
