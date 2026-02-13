"use strict";

// #1
const numberOfFilms = +prompt("How many movies have you watched already", "");
//console.log(numberOfFilms);


// #2
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// #3
const a = prompt("One of the last movies whatched?", "");
const b = prompt("How whould you rate the movie", "");
const c = prompt("One of the last movies whatched?", "");
const d = prompt("How whould you rate the movie", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
