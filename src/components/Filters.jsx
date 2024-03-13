import { useId, useContext } from "react";
import { FiltersContext } from "../context/filters";

const Filters = () => {
  const { filters, setFilters } = useContext(FiltersContext);

  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: e.target.value,
    }));
  };

  const handleChangeCategory = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      category: e.target.value,
    }));
  };

  return (
    <aside>
      <div>
        <label htmlFor={minPriceFilterId}>starting from:</label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1749"
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
      </div>
      <span>${filters.minPrice}</span>

      <div>
        <label id={categoryFilterId} htmlFor={categoryFilterId}>
          Category
        </label>
        <select onChange={handleChangeCategory}>
          <option value="all">All</option>
          <option value="smartphones">smartphones</option>
          <option value="laptops">laptops</option>
          <option value="fragrances">fragrances</option>
        </select>
      </div>
    </aside>
  );
};

export default Filters;
