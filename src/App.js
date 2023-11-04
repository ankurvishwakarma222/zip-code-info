import { useContext } from "react";
import LocationInfo from "./components/loccationCard/LocationInfo";
import SearchBox from "./components/search/SearchBox";
import { AppContext } from "./globalStore/store";
const App = () => {
  const { data, isError, isLoad } = useContext(AppContext);
  return (
    <>
      <section>
        <h3 className="text-center py-4 m-0 logo">Zip Code Information</h3>
        <div className="container mt-5">
          <div className="row justify-content-center gap-2">
            <SearchBox />
            {isLoad && <div className="col-10 text-center">Loading...</div>}
            {isError && <p className="text-center text-danger">{isError}</p>}
            {data && data.length > 0 && <LocationInfo />}
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
