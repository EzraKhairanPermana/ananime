import { useContext, useEffect, useCallback, useState } from "react";
import Axios from "axios";

import { SearchContext } from "../Context/SearchContext";
import { DetailContext } from "../Context/DetailContext";

import { BoxInput, TopContent } from "./Children/RightChild";

function Right() {
  const { searchValue, setSearchValue, fireSearch } = useContext(SearchContext);
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

  return (
    <section className="web-right">
      <BoxInput
        fireSearch={fireSearch}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <div className="top-anime">
        <h2>Top Upcoming</h2>
        <TopContent upcoming={upcoming} fire={fire} />
      </div>
    </section>
  );
}

export default Right;
