import { useMemo, useContext } from "react";

import { SearchContext } from "../Context/SearchContext";
import { CurrentContext } from "../Context/CurrentContext";
import { DataContext } from "../Context/DataContext";
import { DetailContext } from "../Context/DetailContext";
import { BoxInput, Content, Season } from "./Children/MiddleChildren";

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

      <Season
        SeasonData={SeasonData}
        setCurrent={setCurrent}
        current={current}
      />

      <BoxInput
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        fireSearch={fireSearch}
      />

      <div className="result">
        <p>Result of</p>
        <h1 id="hero-title">
          {current === "" ? `Top Airing ${time.getFullYear()}` : current}
        </h1>
      </div>

      <Content data={data} loading={loading} fire={fire} />
    </section>
  );
}

export default Middle;
