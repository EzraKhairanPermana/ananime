import { useMemo, useContext, useCallback, useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Axios from "axios";

import { LoadGif } from "../Util/Image";
import { SearchContext } from "../Context/SearchContext";
import { CurrentContext } from "../Context/CurrentContext";

function Middle() {
  const {
    SeasonData,
    GenreData,
    bindGenreID,
    current: { current, setCurrent },
  } = useContext(CurrentContext);
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const time = useMemo(() => new Date(), []);

  const TopAiringFetch = useCallback(async () => {
    setLoading(true);
    const data = await Axios.get(
      "https://api.jikan.moe/v3/top/anime/1/airing"
    ).then((res) => {
      setLoading(false);

      return res.data.top.slice(0, 32);
    });

    setData(data);
  }, []);
  const fetchGendreOrSeason = useCallback(
    async ({ type, secondArg }) => {
      setLoading(true);
      const FetchData = await Axios.get(
        type === "genre"
          ? `https://api.jikan.moe/v3/genre/anime/${secondArg}`
          : `https://api.jikan.moe/v3/season/${time.getFullYear()}/${secondArg.toLowerCase()}`
      ).then((res) => {
        setLoading(false);

        return res.data.anime.slice(0, 32);
      });

      setData(FetchData);
    },
    [time]
  );

  useEffect(() => {
    if (current === "") {
      TopAiringFetch();
    } else {
      const attemptGenre = GenreData.filter((gen) => current === gen);
      const attemptSeason = SeasonData.filter((seas) => current === seas);

      const whatFetch = {
        type: attemptGenre.length === 1 ? "genre" : "season",
        secondArg:
          attemptGenre.length === 1
            ? bindGenreID(attemptGenre[0])
            : attemptSeason[0],
      };

      setData([]);
      fetchGendreOrSeason(whatFetch);
    }
  }, [
    current,
    TopAiringFetch,
    GenreData,
    SeasonData,
    bindGenreID,
    fetchGendreOrSeason,
  ]);

  return (
    <section className="web-middle">
      <h2 id="title-season">Anime Season {time.getFullYear()}</h2>

      <Row className="season">
        {SeasonData.map((dat, i) => (
          <span
            className={`link-season ${
              current === dat ? "link-season-active" : ""
            }`}
            key={i}
            onClick={() => setCurrent(dat)}
          >
            {dat}
          </span>
        ))}
      </Row>

      <div className="box-input" id="input-mobile">
        <h2>Find Anime</h2>
        <input
          type="text"
          placeholder="Search..."
          id="search-input"
          autoComplete="off"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
      </div>

      <div className="result">
        <p>Result of</p>
        <h1 id="hero-title">
          {current === "" ? `Top Airing ${time.getFullYear()}` : current}
        </h1>
      </div>

      <Row className="content" id="middle-content">
        {loading && (
          <Col className="col-12 text-center mt-5">
            <img src={LoadGif} alt="Load" />
          </Col>
        )}
        {!loading &&
          data.length > 0 &&
          data.map((ani) => (
            <Col md={3} className="col-6 mb-4" key={ani.mal_id}>
              <div
                id="detail-anime"
                className="img-poster"
                style={{
                  backgroundImage: `url(${ani.image_url})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              />
              <h3>{ani.title}</h3>
            </Col>
          ))}
      </Row>
    </section>
  );
}

export default Middle;
