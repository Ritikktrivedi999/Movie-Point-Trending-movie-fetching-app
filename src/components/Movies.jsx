import React from "react";
import Axios from "axios";
import ShiftPage from "./ShiftPage";
import { Audio } from "react-loader-spinner";
import { useState, useEffect } from "react";
export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPage] = useState(1);
  const [hover, setHover] = useState("");
  const [favourites, setFavourites] = useState([]);

  function goToNext() {
    setPage(pageNumber + 1);
  }

  function goToBack() {
    if (pageNumber > 1) setPage(pageNumber - 1);
  }
  useEffect(
    function () {
      Axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=6f68aa51360b005842e6dbcb4eafdf5e&page=${pageNumber}`
      ).then((res) => {
        console.table(res.data.results);
        setMovies(res.data.results);
        let oldFav = localStorage.getItem("imdb");
        oldFav = JSON.parse(oldFav)
        setFavourites([...oldFav])
      });
    },
    [pageNumber]
  );
  const add = (movie) => {
    let newArr = [...favourites, movie];
    setFavourites([...newArr]);
    localStorage.setItem("imdb", JSON.stringify(newArr))
  };
  let del = (movie) => {
    let newArr = favourites.filter((m) => m.id !== movie.id)
    setFavourites([...newArr])
    localStorage.setItem("imdb", JSON.stringify(newArr))
  }
  return (
    <>
      <div className="mb-8">
        <div className="mt-8 mb-8 text-bold text-3xl text-center">
          Trending Movie
        </div>
        {movies.length === 0 ? (
          <div className="flex justify-center">
            <Audio
              height="80"
              width="80"
              radius="9"
              color="green"
              ariaLabel="loading"
              wrapperStyle
              wrapperClass
            />
          </div>
        ) : (
          <div className="flex flex-wrap justify-center ">
            {movies.map((movie) => (
              <div
                className={`bg-[url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})]  h-[25vh] w-[150px] md:h-[30vh] md:w-[250px] bg-center bg-cover rounded-xl flex items-end m-4 hover:scale-110 ease-out duration-300 relative `}
                onMouseEnter={() => setHover(movie.id)}
                onMouseLeave={() => setHover("")}
              >
                {hover === movie.id && (
                  <>
                    {favourites.find((m) => m.id === movie.id) ? (
                      <div
                        className="absolute top-2 right-2 text-xl p-1 bg-gray-800 rounded-xl cursor-pointer"
                        onClick={() => del(movie)}
                      >
                        ❌
                      </div>
                    ) : (
                      <div
                        className="absolute top-2 right-2 text-xl p-1 bg-gray-800 rounded-xl cursor-pointer"
                        onClick={() => add(movie)}
                      >
                        ❤️
                      </div>
                    )}
                  </>
                )}

                <div className=" w-full bg-gray-900 text-white py-1 text-center rounder-b-xl  font-bold ">
                  {movie.title}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <ShiftPage
        pageProp={pageNumber}
        goToNext={goToNext}
        goToBack={goToBack}
      />
    </>
  );
}
