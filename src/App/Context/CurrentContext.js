import { createContext, useState, useMemo } from "react";

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

  const providerValue = useMemo(
    () => ({
      current: { current, setCurrent },
      GenreData,
      SeasonData,
    }),
    [current, setCurrent, SeasonData, GenreData]
  );

  return <CurrentContext.Provider value={providerValue} {...props} />;
}
