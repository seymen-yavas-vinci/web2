import { useState } from "react";

import MovieListView from "../MovieListView";
import PageTitle from "../PageTitle";
import AddMovieForm from "../AddMovieForm";
import type { Movie } from "../../types";

const MovieListPage = () => {
  const defaultMovies: Movie[] = [
    {
      title: "The Amazing Spider-Man",
      director: "Marc Webb",
      duration: 136,
      imageUrl:
        "https://images.justwatch.com/poster/176260652/s718/the-amazing-spider-man.jpg",
      description:
        "Peter Parker, un lycéen, découvre ses nouveaux pouvoirs après avoir été mordu par une araignée génétiquement modifiée et affronte le Dr Connors, alias le Lézard.",
      budget: 230,
    },
    {
      title: "Spider-Man: Into the Spider-Verse",
      director: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
      duration: 117,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/f/fa/Spider-Man_Into_the_Spider-Verse_poster.png",
      description:
        "Miles Morales devient le nouveau Spider-Man après la mort de Peter Parker dans son univers. Il découvre rapidement l’existence du multivers et d’autres versions de Spider-Man venues d’univers parallèles.",
      budget: 90,
    },
    {
      title: "Spider-Man: Across the Spider-Verse",
      director: "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
      duration: 140,
      imageUrl:
        "https://c8.alamy.com/compfr/2r0her8/spider-man-a-travers-le-verset-d-araignee-alias-spider-man-a-travers-le-verset-d-araignee-partie-1-affiche-de-gauche-spider-man-miles-morales-voix-shameik-moore-spider-gwen-gwen-stacy-voix-hailee-steinfeld-2023-sony-pictures-sortie-marvel-entertainment-courtesy-everett-collection-2r0her8.jpg",
      description:
        "Miles Morales retrouve Gwen Stacy et plonge dans le multivers, où il rencontre une équipe de Spider-Héros chargée de protéger toutes les réalités. Une menace cosmique mettra à l’épreuve ses convictions.",
      budget: 100,
    },
    {
      title: "Cars",
      director: "John Lasseter",
      duration: 117,
      imageUrl:
        "https://fr.web.img6.acsta.net/pictures/17/08/01/16/24/309645.jpg",
      description:
        "Flash McQueen, une voiture de course arrogante, se retrouve coincée dans la petite ville de Radiator Springs où il apprend la vraie signification de l’amitié et du travail d’équipe.",
      budget: 120,
    },
    {
      title: "Cars 2",
      director: "John Lasseter, Brad Lewis",
      duration: 106,
      imageUrl:
        "https://preview.redd.it/who-still-loves-this-poster-from-the-original-cars-i-do-v0-vvp2b95qi2se1.png?width=640&crop=smart&auto=webp&s=eb810e6e1ce496fed4da3ce9a03525e075bb15a4",
      description:
        "Flash McQueen et son ami Mater voyagent autour du monde pour participer au Grand Prix Mondial, mêlant compétition automobile et missions d’espionnage.",
      budget: 200,
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      director: "Chris Columbus",
      duration: 152,
      imageUrl:
        "https://images.justwatch.com/poster/175531228/s718/harry-potter-a-lecole-des-sorciers.jpg",
      description:
        "Harry découvre à ses 11 ans qu’il est un sorcier et rejoint l’école de sorcellerie Poudlard, où il fait ses premiers pas dans un monde magique.",
      budget: 125,
    },
    {
      title: "Harry Potter and the Chamber of Secrets",
      director: "Chris Columbus",
      duration: 161,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/c/c0/Harry_Potter_and_the_Chamber_of_Secrets_movie.jpg",
      description:
        "De retour à Poudlard, Harry fait face à de nouveaux dangers quand une mystérieuse chambre interdite est ouverte, libérant un monstre terrifiant.",
      budget: 100,
    },
  ];

  const [movies, setMovies] = useState(defaultMovies);

  const onMovieAdded = (newMovie: Movie) => {
    console.log("Movie to add:", newMovie);
    setMovies([...movies, newMovie]);
  };

  return (
    <div>
      

      <main className="page-content">
        <PageTitle title="My favorite movies" />

        <MovieListView movies={movies} />

        <AddMovieForm onMovieAdded={onMovieAdded} />

        <br />
        <br />
        <br />
        <br />
      </main>

      
    </div>
  );
};

export default MovieListPage;
