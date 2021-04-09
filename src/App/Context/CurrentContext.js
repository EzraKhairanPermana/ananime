import { createContext, useCallback, useState, useMemo } from "react";

export const CurrentContext = createContext(false);

export default function ModalProvider(props) {
  const [current, setCurrent] = useState("");
  const GenreData = useMemo(
    () => [
      "Action",
      "Adventure",
      "Comedy",
      "Fantasy",
      "Game",
      "Horror",
      "Romance",
      "Sports",
    ],
    []
  );
  const SeasonData = useMemo(() => ["Summer", "Spring", "Fall", "Winter"], []);

  const bindGenreID = useCallback((gen) => {
    switch (gen.toLowerCase()) {
      case "action":
        return 1;
      case "adventure":
        return 2;
      case "comedy":
        return 4;
      case "fantasy":
        return 10;
      case "game":
        return 11;
      case "horror":
        return 14;
      case "romance":
        return 22;
      case "sports":
        return 30;
      default:
        break;
    }
  }, []);

  const providerValue = useMemo(
    () => ({
      current: { current, setCurrent },
      GenreData,
      SeasonData,
      bindGenreID,
    }),
    [current, setCurrent, SeasonData, GenreData, bindGenreID]
  );

  return <CurrentContext.Provider value={providerValue} {...props} />;
}
