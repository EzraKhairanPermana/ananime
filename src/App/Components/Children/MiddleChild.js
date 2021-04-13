import { memo } from "react";
import { LoadGif } from "../../Util/Image";
import { Row, Col } from "react-bootstrap";

const commonComprator = (prevProps, nextProps) =>
  JSON.stringify(prevProps) === JSON.stringify(nextProps);

const BoxInput = memo(
  ({ fireSearch, searchValue, setSearchValue }) => {
    return (
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
    );
  },
  (prevProps, nextProps) => prevProps.searchValue === nextProps.searchValue
);

const Content = memo(
  ({ loading, data, fire }) => (
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
                backgroundImage: `url(${ani.image_url.replace("jpg", "webp")})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              onClick={() => fire(ani.mal_id)}
            />
            <h3>{ani.title}</h3>
          </Col>
        ))}
    </Row>
  ),
  commonComprator
);

const Season = memo(
  ({ SeasonData, setCurrent, current }) => (
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
  ),
  (prevProps, nextProps) => prevProps.current === nextProps.current
);

export { BoxInput, Content, Season };
