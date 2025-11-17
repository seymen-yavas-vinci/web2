import type { Movie } from "../../types";
import MovieItem from "../MovieItem";

interface CinemaProps {
  name: string;
  movies: Movie[];
}

import "./Cinema.css";

const Cinema = (props: CinemaProps) => (
  <div className="cinema-block">
    <h2>{props.name}</h2>
    <ul>
      {props.movies.map((movie) => (
        <MovieItem key={movie.title} movie={movie} />
      ))}
    </ul>
  </div>
);


export default Cinema;