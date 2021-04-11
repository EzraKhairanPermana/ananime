import { useMemo, useContext } from "react";
import { Row, Col } from "react-bootstrap";

import { LoadGif } from "../Util/Image";
import { SearchContext } from "../Context/SearchContext";
import { CurrentContext } from "../Context/CurrentContext";
import { DataContext } from "../Context/DataContext";
import { DetailContext } from "../Context/DetailContext";

function Middle() {
  const {
    SeasonData,
    current: { current, setCurrent },
  } = useContext(CurrentContext);
  const { searchValue, setSearchValue, fireSearch } = useContext(SearchContext);
  const { loading, data } = useContext(DataContext);
  const { fire } = useContext(DetailContext);
  const time = useMemo(() => new Date(), []);

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
          onKeyUp={fireSearch}
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
                className="img-poster"
                style={{
                  backgroundImage: `url(${ani.image_url})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                onClick={() => fire(ani.mal_id)}
              />
              <h3>{ani.title}</h3>
            </Col>
          ))}
      </Row>
    </section>
  );
}

export default Middle;
