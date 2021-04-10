import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";
import { CurrentContext } from "../Context/CurrentContext";
import Axios from "axios";

export const DataContext = createContext(false);

export default function ModalProvider(props) {
  const {
    SeasonData,
    GenreData,
    bindGenreID,
    current: { current },
  } = useContext(CurrentContext);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const time = useMemo(() => new Date(), []);

  const fetchGeneralData = useCallback(
    async ({ type, secondArg }) => {
      setLoading(true);
      const FetchData = await Axios.get(
        type === false
          ? "https://api.jikan.moe/v3/top/anime/1/airing"
          : type === "genre"
          ? `https://api.jikan.moe/v3/genre/anime/${secondArg}`
          : `https://api.jikan.moe/v3/season/${time.getFullYear()}/${secondArg.toLowerCase()}`
      ).then((res) => {
        setLoading(false);

        if (type === false) return res.data.top.slice(0, 32);
        return res.data.anime.slice(0, 32);
      });

      setData(FetchData);
    },
    [time]
  );

  useEffect(() => {
    const attemptGenre = GenreData.filter((gen) => current === gen);
    const attemptSeason = SeasonData.filter((seas) => current === seas);

    const whatFetch = {
      type:
        current === "" ? false : attemptGenre.length === 1 ? "genre" : "season",
      secondArg:
        current === ""
          ? undefined
          : attemptGenre.length === 1
          ? bindGenreID(attemptGenre[0])
          : attemptSeason[0],
    };

    setData([]);
    fetchGeneralData(whatFetch);
  }, [current, GenreData, SeasonData, bindGenreID, fetchGeneralData]);

  const providerValue = useMemo(() => ({ loading, data }), [loading, data]);

  return <DataContext.Provider value={providerValue} {...props} />;
}
