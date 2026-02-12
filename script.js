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