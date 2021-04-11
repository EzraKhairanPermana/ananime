import {
  createContext,
  useState,
  useContext,
  useCallback,
  useMemo,
} from "react";
import { DataContext } from "./DataContext";
import { CurrentContext } from "./CurrentContext";
import Axios from "axios";

export const SearchContext = createContext("");

export default function SearchProvider(props) {
  const {
    current: { setCurrent },
  } = useContext(CurrentContext);
  const { setLoading, setData } = useContext(DataContext);
  const [searchValue, setSearchValue] = useState("");

  const fireSearch = useCallback(
    async (e) => {
      if (e.key === "Enter") {
        if (searchValue !== "") {
          setSearchValue("");
          setLoading(true);
          const data = await Axios.get(
            "https://api.jikan.moe/v3/search/anime",
            {
              params: {
                q: searchValue,
                limit: 32,
              },
            }
          ).then((res) => res.data.results);

          setData(data);
          setLoading(false);
        } else {
          setCurrent("");
        }
      }
    },
    [searchValue, setData, setLoading, setCurrent]
  );

  const providerValue = useMemo(
    () => ({ searchValue, setSearchValue, fireSearch }),
    [searchValue, setSearchValue, fireSearch]
  );

  return <SearchContext.Provider value={providerValue} {...props} />;
}
