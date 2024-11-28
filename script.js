const numberOfFilms = +prompt(`How many movies have you watch already?`, ``);
let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  priv: false,
};

const a = prompt(`What was the last movie you watched?`, ``);
const b = prompt(`How much would you rate it?`, ``);
const c = prompt(`What was the last movie you watched?`, ``);
const d = prompt(`How much would you rate it?`, ``);

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);
