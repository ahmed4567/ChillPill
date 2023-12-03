import React, { useEffect, useRef, useState } from "react";
import axios from "../axios";
import "./row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const basUrl = "https://image.tmdb.org/t/p/original";
function Row({ title, fechUrl, isLargeRow }) {
  const ref = useRef(null);
  const [movies, setMovies] = useState([]);
  const [trailerID, settrailerID] = useState(null);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handelPosterClik = async (movie) => {
    if (trailerID) {
      settrailerID("");
    } else {
      console.log(movie);
      ref.current?.scrollIntoView({
        behavior: "smooth",
      });
      const a = await movieTrailer(movie.orname || "");
      console.log(a);
      movieTrailer(null, { tmdbId: movie.id })
        .then((url) => {
          console.log("url is " + url);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log("urlParamsn" + urlParams);
          settrailerID(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    // effect
    async function feachData() {
      const req = await axios.get(fechUrl);
      setMovies(req.data.results);
      return req;
    }
    feachData();
    return () => {
      //   cleanup
    };
  }, [fechUrl]);

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {/* sevral row__poster */}
        {movies.map((movie) => (
          <img
            onClick={() => handelPosterClik(movie)}
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${basUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.title}
          />
        ))}
      </div>
      {trailerID && (
        <YouTube ref={ref} videoId={trailerID} id="movieID" opts={opts} />
      )}
    </div>
  );
}

export default Row;
