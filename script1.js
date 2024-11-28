const numberOfFilms = prompt(`How many movies have you watch already?""`);
let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
