import { memo } from "react";
import { Row, Col } from "react-bootstrap";

const BoxInput = memo(
  ({ fireSearch, searchValue, setSearchValue }) => (
    <div className="box-input">
      <h2>Find Anime</h2>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyUp={fireSearch}
        autoComplete="off"
        value={searchValue}
      />
    </div>
  ),
  (prevProps, nextProps) => prevProps.searchValue === nextProps.searchValue
);

const TopContent = memo(
  ({ upcoming, fire }) => (
    <div className="top-content">
      {upcoming.length > 0 &&
        upcoming.map((data) => (
          <Row className="box-content" key={data.mal_id}>
            <Col md={4} className="col-4">
              <div
                className="img-top cursor-right"
                data-id={data.mal_id}
                style={{
                  backgroundImage: `url(${data.image_url.replace(
                    "jpg",
                    "webp"
                  )})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                onClick={() => fire(data.mal_id)}
              />
            </Col>
            <Col md={8} className="col-6 subdata">
              <h3>{data.title}</h3>
              <Row>
                <Col md={12}>
                  <p>
                    {data.type}
                    <span> {data.episodes} eps</span>
                  </p>
                </Col>
              </Row>
              <p>
                Members <span>{data.members}</span>
              </p>
            </Col>
          </Row>
        ))}
    </div>
  ),
  (prevProps, nextProps) => prevProps.upcoming === nextProps.upcoming
);

export { BoxInput, TopContent };
