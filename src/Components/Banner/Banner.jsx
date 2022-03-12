import React, { useEffect, useState } from "react";
import "./banner.css";
import axios from "../../Axios";
import { API_Key, imageUrl } from "../../Constance/Constance";

export const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const Num = Math.floor(Math.random() * (20 - 1) + 1)
    axios.get(`trending/all/day?api_key=${API_Key}`).then((response) => {
      setMovie(response.data.results[Num]);
    });
  }, []);
  return (
    <div
    style={{backgroundImage:`url("${movie? imageUrl+movie.backdrop_path:""}")`}}
     className="banner">
      <div className="content">
        <h1 className="title">{movie? movie.title : ""}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">{movie? movie.overview : ""}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
};
