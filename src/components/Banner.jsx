import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
export default function Banner() {
  const [movie, setMovie] = useState({});
  useEffect(function () {
    Axios.get(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=5540e483a20e0b20354dabc2d66a31c9&page=1"
    ).then((res) => {
      console.table(res.data.results);
      setMovie(res.data.results[12]);
    });
  }, []);

  return (
    <>
      <div
        className={`bg-[url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})] h-[35vh] md:h-[80vh]  bg-center bg-cover flex items-end`}
      >
        <div className=" text-xl md:text-3xl text-white p-3 bg-gray-800 bg-opacity-50 w-full flex justify-center ">
          {movie.title}
        </div>
      </div>
    </>
  );
}
