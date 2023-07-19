import React from "react";
import Gif from "../assets/404.gif";

export default function Pagenotfound() {
  return (
    <div className="App">
      <p>Warning ! This Url is Not Present</p>
      <div>
        <img src={Gif} alt="404 Not Found" />
      </div>
    </div>
  );
}
