import MovieCard from "../MovieCard";
import type { Movie } from "../../types";
import "./MovieListView.css";

interface MovieListViewProps {
  movies: Movie[];
}

const MovieListView = ({movies}: MovieListViewProps) => {
    return (
        <div className="movie-list">
            <ul className="movie-list-ul">
                {movies.map((movie) => (
                    <MovieCard key={movie.title} movie={movie} />
                ))}
            </ul>
        </div>
    );
};

export default MovieListView;