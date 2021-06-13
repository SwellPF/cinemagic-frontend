import React from 'react';
import { Route, Link } from 'react-router-dom';
import Movie from './Movie'

const Movies = (props) => {
    return (
        <div>
            {props.movies.map(movie =>
                <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                </li>)}
        </div>
    )
}

export default Movies