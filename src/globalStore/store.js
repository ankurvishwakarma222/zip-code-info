import { createContext, useState, useRef } from "react";
import axios from "axios";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const [isLoad, setIsload] = useState(false);
  const [isError, setIsError] = useState("");
  const preSearchQuery = useRef("");
  const getData = async (pin) => {
    try {
      if (pin === "") {
        setData([]);
        setIsError("Filled Cannot Be Blank");
        setTimeout(() => {
          setIsError("");
        }, 3000);
        return;
      }
      if (preSearchQuery.current === pin) {
        return;
      }
      preSearchQuery.current = pin;
      setData([]);
      setIsload(true);
      const res = await axios.get("https://api.zippopotam.us/in/" + pin);
      setIsload(false);
      setIsError("");
      // setSearchQuery("");
      const country = res.data.country;
      const postCode = res.data["post code"];
      const countryAbbreviation = res.data["country abbreviation"];
      const places = res.data.places;
      const newArr = places.map((item) => {
        return { ...item, country, postCode, countryAbbreviation };
      });
      setData(newArr);
    } catch (err) {
      if (
        err &&
        err.response &&
        err.response.status &&
        err.response.status === 404
      ) {
        setIsload(false);
        setIsError(err.message);
        setTimeout(() => {
          setIsError("");
        }, 3000);
      } else {
        setIsload(false);
        console.log(err.message);
        setIsError(err.message);
        setTimeout(() => {
          setIsError("");
        }, 3000);
      }
    }
  };
  const dataToPass = {
    data,
    preSearchQuery,
    setSearchQuery,
    searchQuery,
    getData,
    setData,
    isError,
    isLoad,
  };
  return (
    <AppContext.Provider value={{ ...dataToPass }}>
      {children}
    </AppContext.Provider>
  );
};
export { AppContext, AppProvider };
