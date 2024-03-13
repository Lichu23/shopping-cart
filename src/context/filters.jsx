import { createContext, useState } from "react";

//1. crear el contexto(es el que tenemos q consumir)
export const FiltersContext = createContext();

// 2. crear el Provider, para proveer el contexto a los componentes(este es el q nos provee de acceso al contexto)
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });
  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
