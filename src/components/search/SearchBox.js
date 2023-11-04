import { AppContext } from "../../globalStore/store";
import styled from "./Search.module.css";
import { useContext } from "react";
const SearchBox = () => {
  const {
    preSearchQuery,
    searchQuery,
    getData,
    setSearchQuery,
    setData,
    isLoad,
  } = useContext(AppContext);
  return (
    <>
      <div className="col-lg-6 col-12 gap-1 d-flex flex-sm-row flex-column align-items-center">
        <input
          className={styled.search_box}
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter Postal Code"
          name="search"
        />
        <button
          disabled={isLoad}
          className={styled.search_btn}
          onClick={() => getData(searchQuery)}
        >
          Search
        </button>
        <button
          className={styled.search_btn}
          onClick={() => {
            setData([]);
            setSearchQuery("");
            preSearchQuery.current = "";
          }}
        >
          Clear
        </button>
      </div>
    </>
  );
};

export default SearchBox;
