import { createContext, useState, useMemo } from "react";

export const SearchContext = createContext("");

export default function SearchProvider(props) {
  const [searchValue, setSearchValue] = useState("");

  const providerValue = useMemo(() => ({ searchValue, setSearchValue }), [
    searchValue,
    setSearchValue,
  ]);

  return <SearchContext.Provider value={providerValue} {...props} />;
}
