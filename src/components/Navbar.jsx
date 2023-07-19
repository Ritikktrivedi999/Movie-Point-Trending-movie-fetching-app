import React from "react";
import Logo from "../assets/movielogo.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className=" border px-9 flex space-x-8 flex item-center ">
      <img className="w-10 md:w-14" src={Logo} alt="movie logo" />
      <Link
        to="/"
        className={`text-blue-400 font-bold text-xl md:text-3xl my-2`}
      >
        Movie
      </Link>
      <Link
        to="/favourite"
        className={`text-blue-400 font-bold text-xl md:text-3xl my-2`}
      >
        Favourites
      </Link>
    </div>
  );
}
