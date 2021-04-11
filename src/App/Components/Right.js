import { useContext, useEffect, useCallback, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Axios from "axios";

import { SearchContext } from "../Context/SearchContext";
import { DetailContext } from "../Context/DetailContext";

function Right() {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const [upcoming, setUpcoming] = useState([]);
  const { fire } = useContext(DetailContext);

  const fetchUpcoming = useCallback(async () => {
    const data = await Axios.get(
      "https://api.jikan.moe/v3/top/anime/1/upcoming"
    ).then((res) => res.data.top.slice(0, 3));

    const after = data.map((data) => {
      if (data.episodes === null) return { ...data, episodes: "unknown" };
      return data;
    });

    setUpcoming(after);
  }, [setUpcoming]);

  useEffect(() => void fetchUpcoming(), [fetchUpcoming]);

  const updateValue = useCallback((e) => setSearchValue(e.target.value), [
    setSearchValue,
  ]);
  const onEnter = useCallback((e) => {
    if (e.key === "Enter") {
      console.log("Di tekan");
    }
  }, []);

  return (
    <section className="web-right">
      <div className="box-input">
        <h2>Find Anime</h2>
        <input
          type="text"
          placeholder="Search..."
          onChange={updateValue}
          onKeyUp={onEnter}
          autoComplete="off"
          value={searchValue}
        />
      </div>
      <div className="top-anime">
        <h2>Top Upcoming</h2>
        <div className="top-content">
          {upcoming.length > 0 &&
            upcoming.map((data) => (
              <Row className="box-content" key={data.mal_id}>
                <Col md={4} className="col-4">
                  <div
                    className="img-top cursor-right"
                    data-id={data.mal_id}
                    style={{
                      backgroundImage: `url(${data.image_url})`,
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
      </div>
    </section>
  );
}

export default Right;
