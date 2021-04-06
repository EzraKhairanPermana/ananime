import { useContext, useCallback } from "react";

import { SearchContext } from "../Context/SearchContext";

function Right() {
  const { searchValue, setSearchValue } = useContext(SearchContext);

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
        <div className="top-content" id="anime-upcoming"></div>
      </div>
    </section>
  );
}

export default Right;
