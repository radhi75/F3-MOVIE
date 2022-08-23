import React from "react";

import MovieCard from "./MovieCard";

const MovieList = (moviesData) => {
  console.log(moviesData);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "50px",
        marginTop: "50px",
      }}
    >
      {moviesData.moviesData?.map((el) => (
        <MovieCard el={el} />
      ))}
    </div>
  );
};

export default MovieList;
