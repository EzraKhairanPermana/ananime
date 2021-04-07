import { useContext, useEffect, useCallback, useState } from "react";
import Axios from "axios";

import { SearchContext } from "../Context/SearchContext";

function Right() {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const [upcoming, setUpcoming] = useState([]);

  const fetchUpcoming = useCallback(async () => {
    const data = await Axios.get(
      "https://api.jikan.moe/v3/top/anime/1/upcoming"
    ).then((res) => res.data.top);

    setUpcoming(data.slice(0, 3));
  }, [setUpcoming]);

  useEffect(() => void fetchUpcoming(), [fetchUpcoming]);
  console.log(upcoming);

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
              <div class="row box-content">
                <div class="col-md-4 col-4">
                  <div
                    class="img-top cursor-right"
                    id="detail-anime"
                    key={data.mal_id}
                    style={{
                      backgroundImage: `url(${data.image_url})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  ></div>
                </div>
                <div class="col-md-8 col-6 subdata">
                  <h3>{data.title}</h3>
                  <div class="row">
                    <div class="col-md-12">
                      <p>
                        {data.type}
                        <span>{data.episodes} eps</span>
                      </p>
                    </div>
                  </div>
                  <p>
                    Members <span>{data.members}</span>
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Right;
