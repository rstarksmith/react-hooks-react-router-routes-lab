import React from "react";
import { movies } from "../data";


function Movies() {

  const displayMovies = movies.map((movie) => (
    <div key={movie.title}>
      <h2>Name: {movie.title}</h2>
      <p>Time: {movie.time}</p>
      <p>Genres:</p>
        <ul>
          {movie.genres.map((genre) => {
            return <li key={genre}>{genre}</li>
            })
          }
        </ul>
    </div>
    )
  )


  return (
    <div>
      <h1>Movies Page</h1>
      {displayMovies}
    </div>
  )
}

export default Movies;
