import React, { useEffect, useState } from "react";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=431c4868";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: "false", msg: "" });
  const [query, setQuery] = useState("titanic");
  const getMovies = async (url) => {
    try {
      setLoading(false);
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setLoading(false);
        setIsError({ show: false, msg: "" });
        setMovie(data.Search);
      } else {
        setIsError({ show: true, msg: data.Error });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMovies(`${API_URL}&s=${query}`);
    }, 800);
    return () => clearTimeout(timerOut);
  }, [query]);
  return (
    <AppContext.Provider value={{ isLoading, isError, movie, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };