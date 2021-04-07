import { useMemo, useContext } from "react";
import { Row, Col } from "react-bootstrap";

import { SearchContext } from "../Context/SearchContext";
import { CurrentContext } from "../Context/CurrentContext";

function Middle() {
  const {
    SeasonData,
    current: { current, setCurrent },
  } = useContext(CurrentContext);
  const { searchValue, setSearchValue } = useContext(SearchContext);

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
        <Col className="col-12 text-center mt-5">
          <img src="load.gif" alt="Load" />
        </Col>
      </Row>
    </section>
  );
}

export default Middle;
