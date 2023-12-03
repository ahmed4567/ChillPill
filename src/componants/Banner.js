import React, { useState, useEffect } from "react";
import axios from "../axios";
import requstes from "../req.js";
import "./banner.css";
const basUrl = "https://image.tmdb.org/t/p/original";
function Banner() {
  const [movies, setMovies] = useState(null);
  const feachData = async () => {
    const req = await axios.get(requstes.fetchTrending);
    setMovies(
      req.data.results[Math.floor(Math.random() * req.data.results.length - 1)]
    );
    return req;
  };
  const truncet = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  useEffect(
    () => {
      //effect

      feachData();

      return () => {
        //  cleanup
      };
    },
    [
      /**run one time  */
    ]
  );

  return (
    <header
      className="banner"
      style={{
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        loading: "lazy",
        backgroundImage: `url(${basUrl}${movies?.backdrop_path})`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {truncet(movies?.title || movies?.name || movies?.original_title)}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button B">play</button>
          <button className="banner_button L">my list</button>
        </div>
        <h1 className="banner__desc">{truncet(movies?.overview, 150)}</h1>
      </div>
      <div className="banner__fadeBot"></div>
    </header>
  );
}

export default Banner;
