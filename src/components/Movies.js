import React from 'react';
import { Route, Link } from 'react-router-dom';
// import Movie from './Movie'

const Movies = (props) => {
    debugger;
    return (
        <div>
            Movies
            {props.movies.map(movie =>
                <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`}>{movie.title} - {movie.genre} - {movie.year_released}</Link>
                </li>)}
        </div>
    )
}

export default Movies